const test = require('../test.es6');
it('/admin/structure/views/view/content', async () => {
  await test.test('structure-views-view-content', '/admin/structure/views/view/content', async function (page) {
    await page.$$eval('#edit-displays-settings-settings-content-tab-content-details-columns-third summary', els => {
      for (el of els) {
        el.click();
      }
    });
  });
});
