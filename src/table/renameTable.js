const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.renameTable('test-new-table-2', 'test-new-table');
  console.log(res);
})();
