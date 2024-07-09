const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const column = await base.getColumnByName('常规测试1', 'dep');
  console.log(column);
})();
