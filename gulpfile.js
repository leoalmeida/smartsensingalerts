var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./config/gulp/tasks'),
    dashboard = require('./config/gulp/utils/dashboard');
    // config = require('./config/gulp/config')(),
    // envConfig = require('./config/gulp/env');


dashboard.show();

/* Default task */
/* gulp.task('default', ['serve-dev']);*/
gulp.task('default', ['heroku:production']);
