const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.batchAppendRows('常规测试1', [{'num': 1000}, {'number3': -1000}]);
  console.log(res);
})();
