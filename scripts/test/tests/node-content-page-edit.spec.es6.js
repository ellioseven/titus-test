const test = require('../test.es6');
it('/node/content-page/edit', async () => {
  await test.test('node-content-page-edit', '/node/31/edit', async function (page) {
    await page.$$eval('.layout-region-node-secondary details:not([open]) summary', els => {
      for (el of els) {
        el.click();
      }
    });
  });
});
