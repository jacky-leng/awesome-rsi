/* The existing reviewed catalog remains the only source of paper metadata. */
'use strict';
const $ = id => document.getElementById(id);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const save = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Reading still works when storage is unavailable. */ } };
const categories = {
  system: ['Specialized systems', '专用推理系统'], kernel: ['Kernels & compilers', '算子与编译器'],
  'kernel-benchmark': ['Kernel benchmarks', '算子评测基准'], recipe: ['Model development', '模型开发与训练'],
  harness: ['Research agents', '研究智能体'], evaluation: ['Research evaluation', '研究评测'], concept: ['Concepts & foundations', '概念与基础']
};
// English-only release; ignore language preferences saved by older previews.
const lang = 'en';
const storedBookmarks = read('rsi-bookmarks', []);
let bookmarks = new Set(Array.isArray(storedBookmarks) ? storedBookmarks : []);
let db, works = [], selected = '', visible = [];
// Loop-profile axes; labels and definitions come from catalog.taxonomy. loop and autonomy hold one value, the rest are lists.
const axes = ['loop','feedback','search','persistence','autonomy','evidence'];
const facetValues = (w,axis) => Array.isArray(w[axis]) ? w[axis] : [w[axis]];
const facetLabel = (axis,value) => db?.taxonomy?.[axis]?.values?.[value]?.label || value;
const defaults = {collection:'all', category:'', q:'', year:'', type:'', target:'', sort:'curated', ...Object.fromEntries(axes.map(a=>[a,'']))};
const state = {...defaults};
const filtersActive = () => state.year || state.type || state.target || axes.some(a=>state[a]);
const tr = (en, zh) => lang === 'en' ? en : zh;
const cat = key => categories[key]?.[lang === 'en' ? 0 : 1] || key;
const summary = w => w.publication.summary;
const repoBase = document.querySelector('meta[name=repository-base]')?.content || '';
const sourceType = w => w.source_type === 'paper' ? tr('Paper','论文') : tr('Project / blog','项目 / 博客');
const date = w => w.publication.date || w.date || String(w.year);
const safeURL = value => { try { const u = new URL(value); return ['https:', 'http:'].includes(u.protocol) ? u.href : null; } catch { return null; } };
let theme = read('rsi-theme', 'system');
function applyTheme() {
  const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  $('theme').setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
}
applyTheme();
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
function restoreURL() {
  const params = new URLSearchParams(location.search);
  for (const key of Object.keys(state)) state[key] = params.get(key) || ({collection:'all', sort:'curated'}[key] || '');
  if (!['all','papers','projects','saved'].includes(state.collection)) state.collection = 'all';
  if (!(state.category in categories)) state.category = '';
  if (!['curated','newest','oldest','title'].includes(state.sort)) state.sort = 'curated';
  if (!['','paper','project/blog'].includes(state.type)) state.type = '';
  if (state.year && !works.some(w => String(w.year) === state.year)) state.year = '';
  if (state.target && !works.some(w => w.targets.includes(state.target))) state.target = '';
  for (const axis of axes) if (state[axis] && !(state[axis] in (db.taxonomy?.[axis]?.values || {}))) state[axis] = '';
  selected = params.get('work') || '';
  for (const id of ['search','year','type','target','sort']) $(id).value = state[id === 'search' ? 'q' : id];
  for (const axis of axes) $(`facet-${axis}`).value = state[axis];
}
function updateURL() {
  const params = new URLSearchParams();
  for (const [key,value] of Object.entries(state)) if (value && !(key === 'collection' && value === 'all') && !(key === 'sort' && value === 'curated')) params.set(key,value);
  if (selected) params.set('work',selected);
  history.replaceState(null,'',location.pathname + (params.size ? '?' + params : '') + location.hash);
}
function collectionMatch(w) {
  return state.collection === 'all' || (state.collection === 'papers' && w.source_type === 'paper') || (state.collection === 'projects' && w.source_type !== 'paper') || (state.collection === 'saved' && bookmarks.has(w.slug));
}
function renderNavigation() {
  const groups = [ ['all',tr('All works','全部条目'),works.length], ['papers',tr('Papers','论文'),works.filter(w=>w.source_type==='paper').length], ['projects',tr('Projects & blogs','项目与博客'),works.filter(w=>w.source_type!=='paper').length], ['saved',tr('Reading list','我的收藏'),works.filter(w=>bookmarks.has(w.slug)).length] ];
  $('collections').innerHTML = groups.map(([key,label,count]) => `<button data-collection="${key}" class="${state.collection===key?'active':''}" aria-pressed="${state.collection===key}"><span>${label}</span><span class="count">${count}</span></button>`).join('');
  $('categories').innerHTML = Object.keys(categories).map(key => `<button data-category="${key}" class="${state.category===key?'active':''}" aria-pressed="${state.category===key}"><span>${esc(cat(key))}</span><span class="count">${works.filter(w=>w.category===key&&collectionMatch(w)).length}</span></button>`).join('');
  $('heading').textContent = state.category ? cat(state.category) : groups.find(g=>g[0]===state.collection)[1];
}
function renderLabels() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  $('research-insights').textContent = tr('Research insights','研究洞察');
  $('about-taxonomy').textContent = tr('About the taxonomy ↗','关于这套分类 ↗');
  $('directions-label').textContent = tr('RESEARCH DIRECTIONS','研究方向');
  $('eyebrow').textContent = tr('A CURATED READING DESK','递归自我改进 · 精选阅读桌');
  $('subtitle').textContent = tr('A map of approaches to recursive self-improvement.','以研究社区与改进对象为线索，理解 RSI 的不同路径。');
  $('search').placeholder = tr('Search papers, models, hardware…','搜索论文、模型、硬件、方法…');
  $('search').setAttribute('aria-label',tr('Search works','搜索条目'));
  $('updated').textContent = tr('Reviewed through ','审阅更新至 ') + db.updated;
  $('scope-note').textContent = tr('Different communities. Different approaches. A shared research map.','不同社区，不同方法。一份共同的研究地图。');
  $('sort-label').textContent = tr('Sort','排序');
  $('sort').innerHTML = [['curated',tr('Curated','精选顺序')],['newest',tr('Newest first','日期降序')],['oldest',tr('Oldest first','日期升序')],['title',tr('Title A–Z','标题 A–Z')]].map(([v,t])=>`<option value="${v}">${t}</option>`).join('');
  $('sort').value = state.sort;
  $('filter-toggle').textContent = tr('Filters','筛选') + (filtersActive() ? ' •' : ' ＋');
  $('reset').textContent = tr('Reset','重置');
  $('year-label').textContent = tr('Year','年份');
  $('type-label').textContent = tr('Source','来源');
  $('year').options[0].textContent = tr('All years','全部年份');
  ['All sources','Paper','Project / blog'].forEach((v,i)=>$('type').options[i].textContent=tr(v,['全部来源','论文','项目 / 博客'][i]));
  $('list-hint').textContent = tr('SELECT TO READ →','点击阅读 →');
}
function render() {
  renderLabels(); renderNavigation();
  const terms = state.q.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  visible = works.filter(w => collectionMatch(w) && (!state.category || w.category===state.category) && (!state.year || String(w.year)===state.year) && (!state.type || w.source_type===state.type) && (!state.target || w.targets.includes(state.target)) && axes.every(a=>!state[a] || facetValues(w,a).includes(state[a])) && terms.every(t=>w.searchText.includes(t)));
  if (state.sort==='title') visible.sort((a,b)=>a.title.localeCompare(b.title));
  if (state.sort==='newest' || state.sort==='oldest') visible.sort((a,b)=>String(a.date || a.year).localeCompare(String(b.date || b.year))*(state.sort==='newest'?-1:1));
  if (!visible.some(w=>w.slug===selected)) selected = visible[0]?.slug || '';
  $('total').textContent = visible.length;
  $('results').textContent = tr(`${visible.length} of ${works.length} works`,`${works.length} 篇中的 ${visible.length} 篇`);
  $('papers').innerHTML = visible.length ? visible.map(w=>`<article class="paper ${w.slug===selected?'selected':''}" data-slug="${esc(w.slug)}"><div class="meta"><span>${esc(date(w))}</span><span>·</span><span class="category-text">${esc(cat(w.category))}</span>${bookmarks.has(w.slug)?'<span aria-label="Saved">☆</span>':''}</div><button class="paper-title" data-work="${esc(w.slug)}" aria-pressed="${w.slug===selected}">${esc(w.title)}</button><p>${esc(summary(w))}</p><div class="tags"><span class="tag">${esc(sourceType(w))}</span><span class="tag loop-tag">${esc(facetLabel('loop',w.loop))}</span>${w.publication.scope?`<span class="tag">${esc(lang==='en'?w.publication.scope:w.infra?.scope||cat(w.category))}</span>`:''}</div></article>`).join('') : `<div class="empty-list"><h2>${tr('No matching works.','没有匹配的条目。')}</h2><p>${state.collection==='saved'?tr('Save a work from its detail panel to build your reading list.','在条目详情中点击收藏，即可加入阅读列表。'):tr('Try a broader search or reset your filters.','请尝试其他关键词，或重置筛选。')}</p><button id="empty-reset">${tr('Browse all works','浏览全部条目')}</button></div>`;
  renderDetail(); updateURL();
}
function renderDetail() {
  const w = works.find(w=>w.slug===selected);
  if (!w) { $('detail').innerHTML = `<div class="empty-detail"><h2>${tr('Your reading desk','你的阅读桌')}</h2><p>${tr('Select a work to explore its methods, results, and evidence.','选择一个条目，阅读方法、结果与证据边界。')}</p><button class="close-detail" id="close-detail">${tr('Back to list','返回列表')}</button></div>`; return; }
  const p=w.publication;
  const labels = {'Research actor':'研究模型', 'Target / environment':'目标与环境', 'Concrete task and artifact':'任务与产物', 'Method and supplied infrastructure':'方法与实验基础', 'Results and comparison':'结果与对照', 'Research budget':'研究预算', 'Evaluation context':'评测条件', 'Task and search space':'任务与搜索空间', 'Results and metrics':'结果与指标', 'Evaluation protocol':'评测协议', 'Results':'报告结果'};
  const sections = [['Research actor',p.actor], ['Target / environment',p.target], ...(p.details || [['Results',p.result]])];
  const sources = w.sources.map(s=>{const url=safeURL(s.url);return url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} ↗</a>`:'';}).join('');
  const profile = `<dl class="loop-profile"><div class="profile-title">${tr('Loop profile','循环画像')}</div>${axes.map(axis=>`<div><dt>${esc(db.taxonomy[axis].label)}</dt><dd>${facetValues(w,axis).length?facetValues(w,axis).map(v=>`<button data-facet="${axis}" data-value="${esc(v)}" title="${esc(db.taxonomy[axis].values[v]?.description||'')}">${esc(facetLabel(axis,v))}</button>`).join(''):'<span>—</span>'}</dd></div>`).join('')}</dl>`;
  $('detail').innerHTML = `<div class="detail-top"><span>${tr('READING NOTES','阅读笔记')} <span style="margin-left:9px">${String(works.indexOf(w)+1).padStart(2,'0')} / ${works.length}</span></span><div class="detail-actions"><button id="bookmark" aria-pressed="${bookmarks.has(w.slug)}">${bookmarks.has(w.slug)?tr('★ Saved','★ 已收藏'):tr('☆ Save','☆ 收藏')}</button><button id="copy-link">${tr('Copy link','复制链接')}</button><button id="close-detail" class="close-detail">${tr('Back','返回')}</button></div></div><div class="detail-content"><div class="meta"><span class="category-text">${esc(cat(w.category))}</span><span> / </span><span>${esc(date(w))}</span></div><h2>${esc(w.title)}</h2><div class="tags"><span class="tag">${esc(sourceType(w))}</span>${p.scope?`<span class="tag">${esc(lang==='en'?p.scope:w.infra?.scope||cat(w.category))}</span>`:''}</div><p class="target-tags"><span>Change / evaluation target</span> ${w.targets.map(t=>`<button data-target="${esc(t)}">${esc(t)}</button>`).join('')}</p><p class="lead">${esc(summary(w))}</p><div class="sources">${sources}</div>${profile}${sections.filter(([,value])=>value).map(([title,body])=>`<section class="detail-section ${title==='Evaluation context'?'boundary':''}"><h3>${esc(lang==='zh' ? labels[title] || title : title)}</h3><p>${esc(body)}</p></section>`).join('')}<div class="detail-footer">${tr('Reviewed','审阅日期')} ${esc(w.reviewed || db.updated)}<br>${tr('Organized by research direction; categories describe the focus of a work.','按研究方向整理；分类用于描述工作的主要对象。')}</div></div>`;
}
function reset() { Object.assign(state,defaults);$('search').value='';$('year').value='';$('type').value='';$('target').value='';for(const a of axes)$(`facet-${a}`).value='';render(); }
// Apply filters from a landscape cell or profile tag, e.g. {category:'kernel', loop:'artifact'}.
function applyFilters(filters) { reset();Object.assign(state,filters);restoreControls();render();$('catalog').scrollTop=0; }
function restoreControls() { for (const id of ['year','type','target']) $(id).value = state[id];for(const a of axes)$(`facet-${a}`).value=state[a];if(filtersActive()){$('filters').hidden=false;$('filter-toggle').setAttribute('aria-expanded','true');} }
$('collections').addEventListener('click',e=>{const b=e.target.closest('[data-collection]');if(b){state.collection=b.dataset.collection;state.category='';render();$('catalog').scrollTop=0;}});
$('categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b){state.category=state.category===b.dataset.category?'':b.dataset.category;render();$('catalog').scrollTop=0;}});
$('search').addEventListener('input',()=>{state.q=$('search').value;render();});
for (const id of ['sort','year','type','target']) $(id).addEventListener('change',()=>{state[id]=$(id).value;render();});
$('filter-toggle').addEventListener('click',()=>{const open=$('filters').hidden;$('filters').hidden=!open;$('filter-toggle').setAttribute('aria-expanded',String(open));});
$('reset').addEventListener('click',reset);
$('papers').addEventListener('click',e=>{if(e.target.closest('#empty-reset')) return reset();const b=e.target.closest('[data-work]');if(!b)return;selected=b.dataset.work;render();document.body.classList.add('detail-open');$('detail').scrollTop=0;if(matchMedia('(max-width: 900px)').matches)$('close-detail')?.focus();else document.querySelector(`[data-work="${CSS.escape(selected)}"]`)?.focus({preventScroll:true});});
function closeDetail(){document.body.classList.remove('detail-open');document.querySelector(`[data-work="${CSS.escape(selected)}"]`)?.focus({preventScroll:true});}
$('detail').addEventListener('click',async e=>{
  const targetButton=e.target.closest('[data-target]');
  if(targetButton){reset();state.target=targetButton.dataset.target;$('target').value=state.target;render();closeDetail();return;}
  const facetButton=e.target.closest('[data-facet]');
  if(facetButton){applyFilters({[facetButton.dataset.facet]:facetButton.dataset.value});closeDetail();return;}
  if(e.target.closest('#close-detail'))closeDetail();
  if(e.target.closest('#bookmark')){bookmarks.has(selected)?bookmarks.delete(selected):bookmarks.add(selected);save('rsi-bookmarks',[...bookmarks]);render();$('bookmark')?.focus({preventScroll:true});}
  if(e.target.closest('#copy-link')){try{await navigator.clipboard.writeText(location.href);$('copy-link').textContent=tr('Copied!','已复制！');}catch{$('copy-link').textContent=tr('Copy address bar URL','请复制地址栏链接');}}
});
$('theme').addEventListener('click',()=>{theme=document.documentElement.dataset.theme==='dark'?'light':'dark';save('rsi-theme',theme);applyTheme();});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)){e.preventDefault();$('search').focus();}if(e.key==='Escape')closeDetail();});
window.addEventListener('popstate',()=>{if(db){restoreURL();render();}});
async function boot() {
  try {
    const response=await fetch('catalog/browser.json', {cache:'no-cache'});if(!response.ok)throw new Error(`HTTP ${response.status}`);
    db=await response.json();works=db.works;
    for(const w of works) w.searchText=JSON.stringify(w).toLocaleLowerCase();
    $('year').innerHTML += [...new Set(works.map(w=>w.year))].sort((a,b)=>b-a).map(y=>`<option value="${y}">${y}</option>`).join('');
    $('target').innerHTML += [...new Set(works.flatMap(w=>w.targets))].sort().map(t=>`<option value="${esc(t)}">${esc(t)}</option>`).join('');
    $('facet-filters').innerHTML = axes.map(axis=>`<label><span>${esc(db.taxonomy[axis].label)}</span><select id="facet-${axis}"><option value="">${tr('Any','全部')}</option>${Object.entries(db.taxonomy[axis].values).map(([v,d])=>`<option value="${esc(v)}">${esc(d.label)}</option>`).join('')}</select></label>`).join('');
    for (const axis of axes) $(`facet-${axis}`).addEventListener('change',()=>{state[axis]=$(`facet-${axis}`).value;render();});
    const requestedWork = new URLSearchParams(location.search).has('work');
    restoreURL();render();
    if(requestedWork && matchMedia('(max-width: 900px)').matches)document.body.classList.add('detail-open');
    if(location.hash==='#insights')$('research-insights').click();
    if(location.hash==='#landscape')$('landscape').click();
  } catch(error) {
    $('results').textContent=tr('Collection unavailable','条目加载失败');
    $('papers').innerHTML=`<div class="empty-list"><h2>${tr('The collection could not be loaded.','无法加载论文列表。')}</h2><p>${tr('Serve this folder over HTTP, then reload.','请通过 HTTP 服务访问本目录，然后重新加载。')}</p><code>python3 -m http.server 8123 --bind 127.0.0.1</code><p><a href="${esc(repoBase)}README.md">${tr('Read the Markdown list','阅读 Markdown 列表')}</a></p><button onclick="location.reload()">${tr('Retry','重试')}</button></div>`;
    console.error(error);
  }
}
boot();

$('about-taxonomy').addEventListener('click',()=>{
 $('taxonomy-dialog').classList.remove('wide');
 const descriptions = {
 system: ['Serving runtimes, scheduling, communication and deployment.', '服务运行时、调度、通信与部署。'],
 kernel: ['Operators, compiler mappings and hardware-specific implementations.', '算子、编译映射与硬件特化实现。'],
 'kernel-benchmark': ['Kernel task definitions, correctness contracts and performance metrics.', '算子任务定义、正确性约束与性能指标。'],
 recipe: ['Architectures, data, optimizers and training or post-training recipes.', '架构、数据、优化器与训练或后训练方案。'],
 harness: ['Tools, prompts, memory, search policies and the improver itself.', '工具、提示词、记忆、搜索策略和改进器本身。'],
 evaluation: ['Research-task interfaces, held-out evaluation and measurement protocols.', '研究任务接口、留出评测与测量协议。'],
 concept: ['Frameworks, surveys and historical foundations connecting the field.', '连接各条研究路径的框架、综述与历史基础。']
 };
 $('taxonomy-content').innerHTML=`<div class="eyebrow">${tr('HOW TO READ THIS COLLECTION','如何阅读这份列表')}</div><h2 id="taxonomy-title">${tr('One term. Many research directions.','同一个 RSI，多个研究方向。')}</h2><p>${tr('Recursive self-improvement brings together systems, compiler, model-development and agent communities. This collection maps their approaches by the object being improved, the mechanism used and the feedback being studied.','RSI 汇集了系统、编译器、模型开发与智能体等社区。我们按改进对象、采用机制和研究中的反馈路径组织这些工作，让不同 approach 的联系与区别更清晰。')}</p><div class="taxonomy-axes"><section><h3>${tr('01 / What changes?','01 / 改什么？')}</h3><p>${tr('The primary object determines the research direction.','主要被改进或评估的对象决定主分类。')}</p></section><section><h3>${tr('02 / How does it change?','02 / 怎么改？')}</h3><p>${tr('Code search, memory, coordination and weight updates can cross categories.','代码搜索、记忆、协作与权重更新可以跨越多个分类。')}</p></section><section><h3>${tr('03 / What feeds back?','03 / 什么进入下一轮？')}</h3><p>${tr('Track whether implementations, experience or research procedures are reused.','区分实现、经验或研究过程如何被后续任务复用。')}</p></section></div><p>${tr('The seven shelves below expand our community-oriented map. Each work has one primary home. The target filter links work across shelves: tags identify objects changed, evaluated or discussed, including model weights, agent harnesses and memory. Multiple tags indicate scope, not independent evidence for each component. Methods and experimental contexts remain in the reading notes. These are descriptive categories, not a quality ranking.','以下七个栏目展开这张面向研究社区的地图。每项工作有一个主要归属；交叉方法和实验条件保留在详情中。分类描述研究对象，不表示质量排名。')}</p><dl>${Object.keys(categories).map(key=>`<dt>${esc(cat(key))}</dt><dd>${esc(descriptions[key][lang==='en'?0:1])}</dd>`).join('')}</dl><h3 class="profile-heading">${tr('The loop profile: six questions asked of every work','循环画像：每项工作回答的六个问题')}</h3><p>${tr('Directions say what is improved. The loop profile says how the improvement loop is built and what the paper shows about it. Each axis is a closed vocabulary; filters and the research landscape use the same terms.','研究方向说明改进对象；循环画像描述改进循环如何构成、论文给出了什么证据。')}</p>${(db?axes:[]).map(axis=>`<details class="axis-definition"><summary><strong>${esc(db.taxonomy[axis].label)}</strong> — ${esc(db.taxonomy[axis].question)}</summary><dl>${Object.values(db.taxonomy[axis].values).map(v=>`<dt>${esc(v.label)}</dt><dd>${esc(v.description)}</dd>`).join('')}</dl></details>`).join('')}<p class="meta">${tr('The reading desk is currently available in English. Categories and target tags describe research scope, not a quality ranking.','公开摘要采用经审阅的英文文案，界面支持中英文。')}</p>`;
 $('taxonomy-dialog').showModal();
});

$('research-insights').addEventListener('click',()=>{
 $('taxonomy-dialog').classList.remove('wide');
 if(!db) return;
 const context=db.reading_context || {};
 const sources=(context.collections || []).map(s=>safeURL(s.url)?`<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} ↗</a>`:'').join(' · ');
 $('taxonomy-content').innerHTML=`<div class="eyebrow">${tr('EVIDENCE & OPEN QUESTIONS','证据与开放问题')}</div><h2 id="taxonomy-title">${tr('Research insights','研究洞察')}</h2><p>${tr('Observations from the literature, followed by experiments that could test them. These are our synthesis and proposed experiments, not new experimental results.','以下是文献综合与可验证的实验建议，不是我们新运行的实验结果。')}</p>${(db.insights || []).map((note,i)=>`<section class="insight"><h3>${i+1}. ${esc(note.title)}</h3><p><strong>${tr('Evidence','证据')}.</strong> ${esc(note.evidence)}</p><p>${esc(note.interpretation)}</p><p class="experiment"><strong>${tr('Experiment to try','可尝试的实验')}.</strong> ${esc(note.experiment)}</p><div class="insight-sources">${note.works.map(slug=>{const w=works.find(w=>w.slug===slug);return w?`<button data-insight-work="${esc(slug)}">${esc(w.short_title || w.title)} ↗</button>`:''}).join('')}</div></section>`).join('')}<section class="insight"><h3>${tr('Coverage and companion collections','覆盖范围与相关列表')}</h3><p>${esc(context.window)}</p><p>${esc(context.method)}</p><p>${esc(context.coverage)}</p><p>${sources}</p></section>`;
 $('taxonomy-dialog').showModal();
 $('taxonomy-dialog').scrollTop=0;
});
// Landscape: cross-tabulate the loop-profile axes over the whole catalog; every non-empty cell filters the list.
const keysOf = axis => axis==='category' ? Object.keys(categories) : Object.keys(db.taxonomy[axis].values);
const nameOf = (axis,key) => axis==='category' ? cat(key) : facetLabel(axis,key);
const has = (w,axis,key) => axis==='category' ? w.category===key : facetValues(w,axis).includes(key);
const pct = (n,d) => d ? Math.round(100*n/d) : 0;
function matrix(rowAxis,colAxis,share) {
 const rows=keysOf(rowAxis).filter(r=>works.some(w=>has(w,rowAxis,r))), cols=keysOf(colAxis).filter(c=>works.some(w=>has(w,colAxis,c)));
 const cell=(r,c)=>{const total=works.filter(w=>has(w,rowAxis,r)).length,n=works.filter(w=>has(w,rowAxis,r)&&has(w,colAxis,c)).length;return {n,total,value:share?n/total:n};};
 const max=Math.max(...rows.flatMap(r=>cols.map(c=>cell(r,c).value)));
 const body=rows.map(r=>`<tr><th scope="row">${esc(nameOf(rowAxis,r))} <span class="count">${works.filter(w=>has(w,rowAxis,r)).length}</span></th>${cols.map(c=>{const {n,total,value}=cell(r,c);const label=share?`${pct(n,total)}%`:String(n);return `<td>${n?`<button data-filter="${esc(JSON.stringify({[rowAxis]:r,[colAxis]:c}))}" style="--heat:${Math.round(6+44*value/max)}%" aria-label="${esc(`${nameOf(rowAxis,r)}, ${nameOf(colAxis,c)}: ${n} of ${total} works`)}">${label}</button>`:'<span>·</span>'}</td>`;}).join('')}</tr>`).join('');
 return `<div class="table-wrap"><table class="landscape-table"><thead><tr><th scope="col"></th>${cols.map(c=>`<th scope="col" title="${esc(db.taxonomy[colAxis]?.values[c]?.description||'')}">${esc(nameOf(colAxis,c))}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>`;
}
$('landscape').addEventListener('click',()=>{
 if(!db) return;
 const closed=works.filter(w=>['self-harness','self-weights','meta'].includes(w.loop)), loops=works.filter(w=>w.loop!=='framework');
 const count=(list,axis,key)=>list.filter(w=>has(w,axis,key)).length;
 const stats=[[`${closed.length}`,tr(`of ${works.length} works change the system that does the improving`,`${works.length} 项工作中改变改进者自身的数量`)],[`${pct(count(closed,'evidence','multi-round'),closed.length)}%`,tr('of those report a multi-round curve','其中报告多轮曲线的比例')],[`${pct(count(loops,'evidence','transfer'),loops.length)}%`,tr('of loop studies test held-out transfer','循环研究中测试留出迁移的比例')],[`${pct(count(loops,'evidence','cost'),loops.length)}%`,tr('of loop studies report what the loop cost','循环研究中报告循环成本的比例')]];
 const section=(title,question,table)=>`<section class="landscape-section"><h3>${esc(title)}</h3><p>${esc(question)}</p>${table}</section>`;
 $('taxonomy-dialog').classList.add('wide');
 $('taxonomy-content').innerHTML=`<div class="eyebrow">${tr('THE LOOP, CROSS-TABULATED','循环的交叉统计')}</div><h2 id="taxonomy-title">${tr('Research landscape','研究全景')}</h2><p>${tr('Every work carries a six-part loop profile. These tables count profiles across the whole catalog; select any cell to list its works. Counts describe what papers report, not how well they work.','每项工作都有六维循环画像。下表统计全部条目；点击单元格即可列出对应工作。计数描述论文报告了什么，而非效果好坏。')}</p><div class="landscape-stats">${stats.map(([n,t])=>`<div><strong>${esc(n)}</strong><span>${esc(t)}</span></div>`).join('')}</div>${section(tr('Where the loop closes','循环在哪里闭合'),tr('Research direction × loop closure, in works.','研究方向 × 循环闭合方式（条目数）。'),matrix('category','loop'))}${section(tr('What each kind of loop shows','各类循环给出的证据'),tr('Loop closure × evidence reported, as a share of each row. Self-referential claims are only as strong as their multi-round and transfer columns.','循环闭合方式 × 报告的证据（行内占比）。自指式改进的说服力取决于多轮与迁移两列。'),matrix('loop','evidence',true))}${section(tr('What decides a change','由什么决定保留'),tr('Research direction × feedback signal, in works.','研究方向 × 反馈信号（条目数）。'),matrix('category','feedback'))}${section(tr('What persists after the run','运行结束后留下什么'),tr('Loop closure × persistence, as a share of each row.','循环闭合方式 × 留存内容（行内占比）。'),matrix('loop','persistence',true))}${section(tr('How candidates are searched','候选如何搜索'),tr('Research direction × search method, in works.','研究方向 × 搜索方法（条目数）。'),matrix('category','search'))}${section(tr('Where humans sit','人在何处'),tr('Loop closure × human role, in works.','循环闭合方式 × 人的角色（条目数）。'),matrix('loop','autonomy'))}`;
 $('taxonomy-dialog').showModal();
 $('taxonomy-dialog').scrollTop=0;
});
$('taxonomy-content').addEventListener('click',e=>{
 const cellButton=e.target.closest('[data-filter]');
 if(cellButton){$('taxonomy-dialog').close();applyFilters(JSON.parse(cellButton.dataset.filter));document.body.classList.remove('detail-open');document.querySelector('.paper-title')?.focus({preventScroll:true});return;}
 const button=e.target.closest('[data-insight-work]');if(!button)return;
 $('taxonomy-dialog').close();reset();selected=button.dataset.insightWork;render();
 document.body.classList.add('detail-open');$('detail').scrollTop=0;
 if(matchMedia('(max-width:900px)').matches)$('close-detail')?.focus();
 else document.querySelector(`[data-work="${CSS.escape(selected)}"]`)?.focus();
});
