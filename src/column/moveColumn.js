const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.moveColumn('常规测试1', 'Z5BJ', '4CmY');
  console.log(res);
})();
