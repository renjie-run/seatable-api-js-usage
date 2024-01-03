const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.addColumnOptions('常规测试1', 'yI7z', [{name: 'API1', color: 'gold', text_color: '#fff'}]);
  console.log(res);
})();
