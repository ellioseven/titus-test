const test = require('../test.es6');
it('/admin/reports/status', async () => {
  await test.test('reports-status', '/admin/reports/status');
});
