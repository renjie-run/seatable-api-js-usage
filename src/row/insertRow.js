const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.insertRow('常规测试1', {'num': -1000}, 'GqJ5FiojQW6qqu1tRroeIA');
  console.log(res);
})();
