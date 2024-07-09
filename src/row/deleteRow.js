const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.deleteRow('常规测试1', 'dC-Y6fIQTFKIc5FVL9c44Q');
  console.log(res);
})();
