const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const linkId = await base.getColumnLinkId('link1', 'link2');
  const res = await base.batchUpdateLinks(linkId, 'L7ty', 'l3om', ['BqE6JlfwSVKIAiyd879cwQ'], {
    'BqE6JlfwSVKIAiyd879cwQ': ['BwP74JPNSSO9qRZ2cjAe8Q'],
  });
  console.log(res);
})();
