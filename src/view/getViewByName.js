const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const view = await base.getViewByName('常规测试1', 'arc');
  console.log(view);
})();
