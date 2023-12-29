const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const dtable = await base.getDTable();
  console.log(dtable);
})();
