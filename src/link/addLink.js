const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const linkId = await base.getColumnLinkId('link1', 'link2');
  const res = await base.addLink(linkId, 'link1', 'link2', 'BqE6JlfwSVKIAiyd879cwQ', 'W0O0Q6GSTrSUHeSelBmFGQ');
  console.log(res);
})();
