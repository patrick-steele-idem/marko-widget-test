require('app-module-path').addPath(__dirname);

require('marko/node-require').install();
/*
 * The following line allows us to require *.css and *.styl
 * files in code that runs on the server, but nothing
 * actually happens on the server
 */
require('lasso/node-require-no-op').enable('.styl', '.css');

/*
 * If the process was started using browser-refresh then enable
 * hot reloading for certain types of files to short-circuit
 * a full process restart. You *should* use browser-refresh
 * in development: https://www.npmjs.com/package/browser-refresh
 */
require('marko/browser-refresh').enable();
require('lasso/browser-refresh').enable();

/*
 * Includes
 */
var path = require('path');
var fs   = require('fs');

/*
 * Client Configurations
 */
var clientConfiguration = require('site/configure/settings');
var lassoConfiguration  = require('site/configure/lasso-configure');
var clientRoutes        = require('site/routes');

/*
 * Start up our Base Server
 */
var rankuBase = require('server')(clientConfiguration, lassoConfiguration, clientRoutes);

/*
 * BAM!
 */
