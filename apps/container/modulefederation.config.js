
module.exports = {
  name: 'container',
  remotes: {
    app1: `app1@//localhost:4001/remoteEntry.js`,
    app2: `app2@//localhost:4002/remoteEntry.js`,
  },
  shared: { react: {requiredVersion: '18.2.0'}}
};




