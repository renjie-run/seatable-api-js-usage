const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const columns = await base.listColumns('常规测试1', '部分列');
  console.log(columns);
})();
