const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.updateRow('常规测试1', 'dC-Y6fIQTFKIc5FVL9c44Q', {'num': -3000});
  console.log(res);
})();
