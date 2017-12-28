const test = require('../test.es6');
it('/node/page/edit', async () => {
  await test.test('node-page-edit', '/node/29/edit', async function (page) {
    await page.$$eval('.layout-region-node-secondary details:not([open]) summary', els => {
      for (el of els) {
        el.click();
      }
    });
  });
});
