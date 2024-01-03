const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const textColumns = await base.getColumnsByType('常规测试1', 'text');
  console.log(textColumns);
})();
