var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./config/gulp/tasks'),
    dashboard = require('./config/gulp/utils/dashboard');
    // config = require('./config/gulp/config')(),
    // envConfig = require('./config/gulp/env');


dashboard.show();

/* Default task */
/* gulp.task('default', ['serve-dev']);*/

function buildApp(var env) {
  return gulp.task('default', ['heroku:'+ env]);
}

module.exports = buildApp;
