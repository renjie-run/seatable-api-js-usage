const { auth } = require('../auth');

(async () => {
  const base = await auth();
  const metadata = await base.getMetadata();
  console.log(metadata);
})();
