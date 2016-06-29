var express      = require('express');
var bodyParser   = require('body-parser');
var compression  = require('compression');
var lasso        = require('lasso');

module.exports = function(clientConfig, lassoConfig, clientRoutes) {
  var isProduction = (process.env.NODE_ENV === 'production');
  var serverConfig = require('./configure/settings');
  /*
   * Configure LassoJS
   */
  lasso.configure(lassoConfig);

  /*
   * Express Server
   */
  var server = express();
  var port   = serverConfig.server.port;

  /*
   * Server Configuration
   */

  server.use(compression()); // Enable gzip compression for all HTTP responses
  server.use(bodyParser.urlencoded({extended: true})); // Setup Body-Parser
  server.use(bodyParser.json()); // Setup Body-Parser - JSON
  server.use(require('lasso/middleware').serveStatic()); // Use Lasso Serve Static

  /*
   * Setup Routes
   * Pass the instance of express to avoid additional dependencies in client builds.
   */
  server.use(clientRoutes());

  /*
   * Start Server
   */
  server.listen(port, function () {
    console.log("(´・ω・`) MARKO WIDGET TEST ᕙ(⇀‸↼‶)ᕗ");

    if (!isProduction) {
        console.log("You are running in a development environment!");
        console.log("Started on port: " + port);
    }

    // The browser-refresh module uses this event to know that the
    // process is ready to serve traffic after the restart
    if (process.send) {
        process.send('online');
    }
  });
};
