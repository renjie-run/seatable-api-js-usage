const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.insertColumn('常规测试1', 'number2', 'number', '0000');
  console.log(res);
})();
