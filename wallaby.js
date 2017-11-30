const wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/*.ts', load: false },
    ],
    tests: [
      { pattern: 'test/*.spec.ts', load: false }
    ],
    postprocessor: wallabyWebpack({}),
    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
