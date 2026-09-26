// Browser extensions may insert ordinary elements before or after the app.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const base=process.env.BROWSER_URL||'http://localhost:8125/';
(async()=>{
 const browser=await chromium.launch();
 try{
  for(const [width,height] of [[1920,1080],[1366,768],[1024,500],[800,700],[844,390],[390,844]]){
   const page=await browser.newPage({viewport:{width,height}});
   await page.goto(base+'?work=vibeserve');await page.waitForSelector('.paper');
   if(width<=900)await page.locator('#close-detail').click();
   const measure=()=>page.locator('.sidebar,#catalog,#detail').evaluateAll(es=>es.map(e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height}}));
   const original=await measure();
   await page.evaluate(()=>{
    const before=document.createElement('div');before.dataset.testExtension='before';document.body.prepend(before);
    const after=document.createElement('div');after.dataset.testExtension='after';document.body.append(after);
   });
   assert.deepEqual(await measure(),original,`${width}: extra body children must not rearrange panes`);
   if(width>900){
    const [sidebar,catalog,detail]=await measure();
    assert.ok(sidebar.x===0&&catalog.x>=sidebar.width&&detail.x>catalog.x,`${width}: column order`);
    assert.ok(detail.width>=340&&catalog.height===height&&detail.height===height,`${width}: full reading panes`);
   }
   await page.locator('#about-taxonomy').click();await page.locator('.dialog-close').click();
   assert.deepEqual(await measure(),original,`${width}: closing dialog must preserve panes`);
   await page.locator('[data-work="vibeserve"]').click();
   await page.locator('.detail-footer').scrollIntoViewIfNeeded();
   assert.ok(await page.locator('.detail-footer').evaluate(e=>e.getBoundingClientRect().bottom<=innerHeight+1),`${width}: detail end reachable`);
   if(width===1920){await page.locator('#detail').evaluate(e=>e.scrollTop=0);await page.screenshot({path:'/tmp/rsi-injected-after.png'});}
   await page.close();
  }
  console.log('PASS: injected body elements preserve pane positions, dimensions, dialogs and scrolling at six viewport sizes.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
