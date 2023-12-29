const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const view = await base.getColumnByName('常规测试1', 'dep');
  console.log(view);
})();
