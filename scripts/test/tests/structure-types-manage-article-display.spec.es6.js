const test = require('../test.es6');
it('/admin/structure/types/manage/article/display', async () => {
  await test.test('structure-types-manage-article-display', '/admin/structure/types/manage/article/display', async function (page) {
    await page.$$eval('#edit-modes summary', els => {
      for (el of els) {
        el.click();
      }
    });
  });
});
