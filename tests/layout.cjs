// Regression: viewport height, phone rotation, and access to the ends of all panes.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch();
 try {
  for(const [width,height] of [[1440,900],[1366,600],[1024,500],[844,390],[667,375],[390,844]]){
   const page=await browser.newPage({viewport:{width,height}});
   await page.goto(process.env.BROWSER_URL || 'http://localhost:8125/');
   await page.waitForSelector('.paper');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}: page width`);
   if(width>1200) assert.ok(await page.locator('.catalog-header').evaluate(e=>e.offsetHeight)<180);
   if(width>600 && width<=900){
    assert.ok(await page.locator('.paper').first().evaluate(e=>e.getBoundingClientRect().top)<height,`${width}: first paper visible`);
    assert.equal(await page.locator('body').evaluate(e=>getComputedStyle(e).overflow),'auto');
   }
   await page.locator('#filter-toggle').click();
   await page.locator('#target').selectOption('Memory & skills');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}: expanded filters fit`);
   await page.locator('#reset').click();
   await page.locator('#filter-toggle').click();
   await page.locator('#theme').scrollIntoViewIfNeeded();
   assert.ok(await page.locator('#theme').evaluate(e=>e.getBoundingClientRect().bottom<=innerHeight));
   await page.locator('.paper-title').last().click();
   await page.locator('.detail-footer').scrollIntoViewIfNeeded();
   assert.ok(await page.locator('.detail-footer').evaluate(e=>e.getBoundingClientRect().bottom<=innerHeight+1),`${width}: detail end reachable`);
   if(width<=900) await page.locator('#close-detail').click();
   await page.locator('.paper').last().scrollIntoViewIfNeeded();
   assert.ok(await page.locator('.paper').last().evaluate(e=>e.getBoundingClientRect().bottom<=innerHeight+1),`${width}: list end reachable`);
   if(width>900 && height<=650) assert.ok(await page.locator('.catalog-header').evaluate(e=>e.getBoundingClientRect().bottom)<0);
   await page.close();
  }
  console.log('PASS: six desktop, short-window, portrait and landscape layouts; all pane ends reachable.');
 } finally {await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
