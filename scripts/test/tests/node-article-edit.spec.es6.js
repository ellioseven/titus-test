const test = require('../test.es6');
it('/node/article/edit', async () => {
  await test.test('node-article-edit', '/node/24/edit', async function (page) {
    await page.$$eval('.layout-region-node-secondary details:not([open]) summary', els => {
      for (el of els) {
        el.click();
      }
    });
  });
});
