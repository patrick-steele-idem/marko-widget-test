var path = require('path');

// isProduction variable
var isProduction = (process.env.NODE_ENV === 'production');

//export default {
module.exports = {
  "plugins": [
    "lasso-autoprefixer",
    "lasso-marko",
    {
      plugin: 'lasso-stylus',
      config: {
        imports: [
          require.resolve('site/configure/css/vars.styl'),
          require.resolve('site/configure/css/functions.styl')
        ]
      }
    }
  ],
  "outputDir": "public/static",
  "fingerprintsEnabled": isProduction,
  "minify": isProduction,
  "resolveCssUrls": isProduction,
  "bundlingEnabled": true,
  "bundles": [
    {
      name: 'jquery',
      dependencies: [
        'require: jquery'
      ]
    },
    {
      name: 'base',
      dependencies: [
        'site/configure/css/'
      ]
    }
  ]
};
