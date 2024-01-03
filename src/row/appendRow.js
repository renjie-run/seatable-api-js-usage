const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.appendRow('常规测试1', {'num': 1000});
  console.log(res);
})();
