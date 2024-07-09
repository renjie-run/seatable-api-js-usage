const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.batchAppendRows('常规测试1', [{'num': -3000}, {'num': -4000}]);
  console.log(res);
})();
