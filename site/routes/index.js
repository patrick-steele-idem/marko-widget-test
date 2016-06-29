var express = require('express');

module.exports = function () {
  var routes = express.Router();

  routes.get('/', require('site/pages/home'));

  return routes;
};
