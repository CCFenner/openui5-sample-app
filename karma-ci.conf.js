module.exports = function(config) {
    "use strict";

	require("./karma.conf")(config);
	config.set({

		preprocessors: {
			"{webapp,webapp/!(test)}/*.js": ["coverage"]
		},

		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: "html",
					dir: "coverage"
				},
				{
					type: "text"
				}
			],
			check: {
				each: {
					statements: 100,
					branches: 100,
					functions: 100,
					lines: 100
				}
			}
		},
		// https://github.com/karma-runner/karma-junit-reporter#configuration
		junitReporter: {
			outputDir: "reports",
			outputFile: "TEST-qunit.xml",
			suite: "",
			useBrowserName: true
        },
		customLaunchers: {
			"ChromeRemote": {
				base: "WebDriver",
				config: {
                    hostname: "localhost",
					port: 4444
				},
				browserName: "chrome",
				name: "Karma",
				pseudoActivityInterval: 30000
			}
		},

		reporters: ["progress", "coverage", "junit"],

		browsers: ["ChromeRemote"],

		singleRun: true

    });
        
    console.log(process.env);

    if (process.env.ON_K8S == true){
        console.log("Running with Kubernetes setup.")
    } else {
        console.log("Running with Docker setup.")
        config.hostname = 'karma'
        config.customLaunchers.ChromeRemote.config.hostname = 'selenium'
    }
};
