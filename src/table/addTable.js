const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.addTable('test-new-table-2');
  console.log(res);
})();
