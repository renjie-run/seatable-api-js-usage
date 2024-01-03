const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.batchUpdateRows('常规测试1', [
    {'row_id': 'XndqkW1JSNqn-L3bEborqw', row: {'num': -1000}},
    {'row_id': 'GPM0yb4ISF6gtsd-WzZtSQ', row: {'number3': 1000}}
  ]);
  console.log(res);
})();
