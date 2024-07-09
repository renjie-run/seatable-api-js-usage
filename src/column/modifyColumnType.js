const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.modifyColumnType('常规测试1', 'Hwkw', 'single-select');
  console.log(res);
})();
