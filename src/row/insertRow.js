const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.insertRow('常规测试1', {'num': -2000}, 'UhCRlNRCSZu-GCfFkvEwgA');
  console.log(res);
})();
