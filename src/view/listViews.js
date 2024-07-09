const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.listViews('常规测试1');
  console.log(res);
})();
