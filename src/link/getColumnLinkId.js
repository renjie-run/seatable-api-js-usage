const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const linkId = await base.getColumnLinkId('link1', 'link2');
  console.log(linkId);
})();
