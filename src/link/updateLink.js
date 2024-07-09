const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const linkId = await base.getColumnLinkId('link1', 'link2');
  const res = await base.updateLink(linkId, 'link1', 'link2', 'BqE6JlfwSVKIAiyd879cwQ', ['BwP74JPNSSO9qRZ2cjAe8Q']);
  console.log(res);
})();
