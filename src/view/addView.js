const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.addView('常规测试1', 'view2');
  console.log(res);
})();
