
module.exports = {
  name: 'container',
  remotes: {
    app1: `app1@//localhost:4001/remoteEntry.js`,
  },
  shared: { react: {singleton: true}}
};




