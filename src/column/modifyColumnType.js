const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.modifyColumnType('常规测试1', 'Z5BJ', 'number');
  console.log(res);
})();
