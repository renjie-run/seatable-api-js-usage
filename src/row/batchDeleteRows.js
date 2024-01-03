const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.batchDeleteRows('常规测试1', ['XndqkW1JSNqn-L3bEborqw', 'GPM0yb4ISF6gtsd-WzZtSQ']);
  console.log(res);
})();
