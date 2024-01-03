const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.renameColumn('常规测试1', 'Z5BJ', 'number3');
  console.log(res);
})();
