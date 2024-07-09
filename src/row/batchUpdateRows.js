const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.batchUpdateRows('常规测试1', [
    {'row_id': 'T86Dk9QHTPWtfhvO4pJiCw', row: {'num': 3000}},
    {'row_id': 'U24-G3grQl27kSWLRgYQSQ', row: {'num': 4000}}
  ]);
  console.log(res);
})();
