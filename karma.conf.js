module.exports = function(config) {
  config.set({
      frameworks: ["jasmine", "karma-typescript"],
      files: [
        { pattern: "src/*.ts" },
        { pattern: "test/*.ts" },
      ],
      preprocessors: {
          "**/*.ts": ["karma-typescript"],
      },
      karmaTypescriptConfig: {
        compilerOptions: {
          lib: [
            "es2015",
            "dom"
          ]
        }
      },
      reporters: ["progress", "karma-typescript"],
      browsers: ["ChromeHeadless"]
  });
};