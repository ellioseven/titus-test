const test = require('../test.es6');
it('/admin/config/search-pages', async () => {
  await test.test('config-search-pages', '/admin/config/search/pages');
});
