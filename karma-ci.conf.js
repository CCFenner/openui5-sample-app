module.exports = function(config) {
	"use strict";

  require("./karma.conf.js")(config)
	config.set({
    reporters: ["junit", "coverage"],
    preprocessors: {
      "{webapp,webapp/!(test)}/*.js": ["coverage"]
    },
    coverageReporter: {
      dir: "coverage",
      includeAllSources: true,
      reporters: [{
        type: "cobertura"
      },{
        type: "text"
      }]
    },
    junitReporter: {
      outputDir: "reports",
      outputFile: "TEST-karma.xml",
      suite: "",
      useBrowserName: true
    },
    browsers: ["ChromeRemote"],
    hostname: "karma",
    customLaunchers: {
      "ChromeRemote": {
        base: "WebDriver",
        config: {
          hostname: "selenium",
          port: 4444
        },
        browserName: "chrome",
        name: "Karma",
        pseudoActivityInterval: 30000
      }
    },
    singleRun: true
	});
};
