const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const res = await base.addColumnOptions('常规测试1', 'Hwkw', [
    {name: 'API1-1', color: 'pink', text_color: '#fff'},
    {name: 'API1-2', color: 'red', text_color: '#fff'},
    {name: 'API2-1', color: 'gold', text_color: '#000'},
  ]);
  console.log(res);
})();
