const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.resizeColumn('常规测试1', 'Hwkw', 500);
  console.log(res);
})();
