const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const tables = await base.getTables();
  console.log(tables);
})();
