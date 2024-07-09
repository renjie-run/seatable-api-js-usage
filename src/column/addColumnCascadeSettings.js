const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.addColumnCascadeSettings('常规测试1', 'test-new-column-22', 'test-new-column-11', {
    'API1': ['API1-1'],
    'API2': ['API2-1']
  });
  console.log(res);
})();
