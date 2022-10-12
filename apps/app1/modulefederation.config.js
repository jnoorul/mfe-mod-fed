
module.exports = {
    name: 'app1',
    library: { type: 'var', name: 'app1' },
    filename: 'remoteEntry.js',
    exposes: {
      './injectApp': './src/injectApp',
    },
    shared: ['react']
  };




