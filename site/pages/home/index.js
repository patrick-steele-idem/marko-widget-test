// Interesting tidbit: If I have the below require only for CSS, and not in the browser.json
// it does not get loaded.
require('./style.styl');

var template = require('./template.marko');

module.exports = function(req, res) {
  // Set Headers
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Render Template
  template.render({
    liveRefresh: process.env.NODE_ENV === 'local'
  }, res);
};
