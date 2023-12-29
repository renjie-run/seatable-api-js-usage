const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const table = await base.getTableByName('常规测试1');
  console.log(table);
})();
