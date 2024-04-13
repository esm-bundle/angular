# angular

[![npm version](https://img.shields.io/npm/v/@esm-bundle/angular.svg?style=flat)](https://www.npmjs.com/package/@esm-bundle/angular) [![build status](https://travis-ci.com/esm-bundle/angular.svg?branch=master)](https://travis-ci.com/esm-bundle/angular) [![](https://data.jsdelivr.com/v1/package/npm/@esm-bundle/angular/badge)](https://www.jsdelivr.com/package/npm/@esm-bundle/angular)

> This repository contains all the Angular packages and their subpackages.

## Packages

- @angular/animations
- @angular/animations/browser
- @angular/common
- @angular/common/http
- @angular/common/upgrade
- @angular/compiler
- @angular/core/primitives/signals
- @angular/core
- @angular/core/rxjs-interop
- @angular/elements
- @angular/forms
- @angular/localize
- @angular/localize/init
- @angular/platform-browser
- @angular/platform-browser/animations
- @angular/platform-browser/animations/async
- @angular/platform-browser-dynamic
- @angular/router
- @angular/router/upgrade
- @angular/service-worker
- @angular/service-worker/config
- @angular/upgrade
- @angular/upgrade/static

Their filenames follow the same structure. For example, `@angular/animations/browser` becomes `angular-animations-browser.js` and `@angular/core/primitives/signals` becomes `angular-core-primitives-signals.js`.

The ESM versions are hosted under `@esm-bundle/angular/es2022/{filename}.js` while the SystemJS versions are located at `@esm-bundle/angular/system/es2022/${filename}.js`.

For example:

https://cdn.jsdelivr.net/npm/@esm-bundle/angular/es2022/angular-core-primitives-signals.js

https://cdn.jsdelivr.net/npm/@esm-bundle/angular/system/es2022/angular-core-primitives-signals.js
