const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.deleteTable('test-new-table');
  console.log(res);
})();
