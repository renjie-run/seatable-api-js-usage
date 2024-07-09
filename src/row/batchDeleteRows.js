const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.batchDeleteRows('常规测试1', [
    'T86Dk9QHTPWtfhvO4pJiCw',
    'U24-G3grQl27kSWLRgYQSQ'
  ]);
  console.log(res);
})();
