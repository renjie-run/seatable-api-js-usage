const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.renameTable('常规测试', '常规测试1');
  console.log(res);
})();
