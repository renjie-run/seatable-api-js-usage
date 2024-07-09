const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const table = await base.getTableByName('link1');
  console.log(table);
})();
