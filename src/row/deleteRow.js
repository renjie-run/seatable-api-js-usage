const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.deleteRow('常规测试1', 'dCjc5GKoR7KZwPPvRThRbg');
  console.log(res);
})();
