const wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {
  const webpackConfiguration = require('./webpack-test.config');

  return {
    files: [
      { pattern: 'src/*.ts', load: false },
    ],
    tests: [
      { pattern: 'test/*.spec.ts', load: false }
    ],
    env: {
      kind: 'chrome'
    },
    postprocessor: wallabyWebpack(webpackConfiguration),
    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
