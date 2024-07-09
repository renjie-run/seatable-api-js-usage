const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.moveColumn('常规测试1', 'Hwkw', '0000');
  console.log(res);
})();
