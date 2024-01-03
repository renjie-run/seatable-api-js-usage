const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.deleteColumn('常规测试1', '4CmY');
  console.log(res);
})();
