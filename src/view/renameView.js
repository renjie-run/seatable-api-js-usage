const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.renameView('常规测试1', 'view3', 'view33');
  console.log(res);
})();
