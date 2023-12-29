const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.deleteTable('lalala');
  console.log(res);
})();
