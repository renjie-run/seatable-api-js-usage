const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.updateRow('常规测试1', 'SCnWobLjQL6WTPM0UHKxpw', {'num': -1000});
  console.log(res);
})();
