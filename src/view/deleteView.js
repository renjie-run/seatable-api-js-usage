const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.deleteView('常规测试1', 'view33');
  console.log(res);
})();
