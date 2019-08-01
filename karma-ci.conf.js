module.exports = function(config) {
	"use strict";

  require("./karma.conf.js")(config)
  require("piper-karma-config")(config)
	config.set({});
};
