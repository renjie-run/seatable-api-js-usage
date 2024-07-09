const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.deleteColumn('常规测试1', 'Hwkw');
  console.log(res);
})();
