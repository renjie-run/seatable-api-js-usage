const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const row = await base.getRow('常规测试1', 'SCnWobLjQL6WTPM0UHKxpw');
  console.log(row);
})();
