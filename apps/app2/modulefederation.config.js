
module.exports = {
    name: 'app2',
    library: { type: 'var', name: 'app2' },
    filename: 'remoteEntry.js',
    exposes: {
      './injectApp': './src/injectApp',
    },
    shared: {react: {requiredVersion: '18.2.0'}}
  };




