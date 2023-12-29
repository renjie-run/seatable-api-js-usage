const { Base } = require('seatable-api');
const { config } = require('./setting.local');

const auth = async () => {
  const base = new Base(config);
  await base.auth()

  return base;
};

module.exports = {
  auth,
};
