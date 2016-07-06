# Smart Sensing Alerts (using Angular 2 Starter)

> Angular 2 is still in **Release Candidate** stage, please **don't** use this in production

> Follow Angular 2 Changelog [here](https://github.com/angular/angular/blob/master/CHANGELOG.md)


## Table of Content
* [Introduction](#introduction)
* [Installation](#installation)
* [Start](#start)
* [Testing](#testing)
* [Production](#production)
* [Extension](#extension)
* [Contributing](#contributing)
* [Special thanks](#special-thanks)
* [License](#license)

## Introduction
As this code was bootstraped using Angular 2 Starter, it is using the following modules:
* [NPM](https://www.npmjs.com/) for package manager
* [TypeScript](http://www.typescriptlang.org/) for the base language
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Gulp](http://gulpjs.com/) for workflow (from *serve*, *watch*, *compile*, *test* to *build*)
* [Browsersync](https://www.browsersync.io/) for development server & reload capability
* [SystemJS](https://github.com/systemjs/systemjs) for module loader
* [Codelyzer](https://github.com/mgechev/codelyzer) for static code analyzer
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* [SystemJS Builder](https://github.com/systemjs/builder) or [Webpack](https://webpack.github.io/) for module bundling in production

## Installation
Firstly, you need to have [Node.js](https://nodejs.org/en/)
- For v4, please use v4.3.x (LTS) or higher (**highly** recommended)
- For v5, please use v5.6.x or higher, here is [why](https://nodejs.org/en/blog/vulnerability/february-2016-security-releases/)
- Ready for v6

> You need v4.x or higher for [Protractor](https://angular.github.io/protractor/#/)

Then, install these packages globally:
```bash
npm install -g gulp
```

After that, just run:
```bash
npm install
```

## Start
Let's start up the server, run:
`gulp` or `gulp serve-dev`

and done! The browser will popup and you can start trying Angular 2!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Special thanks
* Antony Budianto for his awesome Angular starter project (https://github.com/antonybudianto/angular2-starter)
