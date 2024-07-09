const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.renameColumn('常规测试1', 'Hwkw', 'test-new-column-22');
  console.log(res);
})();
