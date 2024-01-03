const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const linkId = await base.getColumnLinkId('link1', 'link2');
  const res = await base.removeLink(linkId, 'link1', 'link2', 'EEX-jTfMT9Omput3lwS22g', 'W0O0Q6GSTrSUHeSelBmFGQ');
  console.log(res);
})();
