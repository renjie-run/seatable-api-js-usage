const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.freezeColumn('常规测试1', 'Z5BJ', false);
  console.log(res);
})();
