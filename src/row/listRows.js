const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const rows = await base.listRows('常规测试1', '默认视图', 'num', false, 0, 3);
  console.log(rows);
})();
