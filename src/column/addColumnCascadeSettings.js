const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.addColumnCascadeSettings('常规测试1', '子单选', '父单选', {
    'P1': ['C1'],
    'P2': ['C2']
  });
  console.log(res);
})();
