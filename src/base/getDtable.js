const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const dtable = await base.getDTable();
  console.log(base.getResponseHeaders());
  console.log('------------------------------------------');
  console.log(base.getResponseHeaders('x-ratelimit-limit'));
  console.log(base.getResponseHeaders('x-ratelimit-remaining'));
  console.log(base.getResponseHeaders('x-ratelimit-reset'));
  console.log('------------------------------------------');
  console.log(dtable);
})();
