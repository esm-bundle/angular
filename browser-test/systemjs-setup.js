document.head.appendChild(
  Object.assign(document.createElement('script'), {
    type: 'systemjs-importmap',
    textContent: `
      {
        "imports": {
          "tslib": "/base/system/es2022/tslib.min.js",

          "rxjs": "//cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/rxjs.min.js",
          "rxjs/operators": "//cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/rxjs-operators.min.js",

          "@angular/animations": "/base/system/es2022/angular-animations.min.js",
          "@angular/animations/browser": "/base/system/es2022/angular-animations-browser.min.js",

          "@angular/common": "/base/system/es2022/angular-common.min.js",
          "@angular/common/http": "/base/system/es2022/angular-common-http.min.js",
          "@angular/common/upgrade": "/base/system/es2022/angular-common-upgrade.min.js",

          "@angular/compiler": "/base/system/es2022/angular-compiler.min.js",

          "@angular/core/primitives/event-dispatch": "/base/system/es2022/angular-core-primitives-event-dispatch.min.js",
          "@angular/core/primitives/signals": "/base/system/es2022/angular-core-primitives-signals.min.js",
          "@angular/core": "/base/system/es2022/angular-core.js",
          "@angular/core/rxjs-interop": "/base/system/es2022/angular-core-rxjs-interop.min.js",

          "@angular/elements": "/base/system/es2022/angular-elements.min.js",

          "@angular/forms": "/base/system/es2022/angular-forms.min.js",

          "@angular/localize": "/base/system/es2022/angular-localize.min.js",

          "@angular/platform-browser": "/base/system/es2022/angular-platform-browser.min.js",
          "@angular/platform-browser/animations": "/base/system/es2022/angular-platform-browser-animations.min.js",
          "@angular/platform-browser/animations/async": "/base/system/es2022/angular-platform-browser-animations-async.min.js",

          "@angular/platform-browser-dynamic": "/base/system/es2022/angular-platform-browser-dynamic.min.js",

          "@angular/router": "/base/system/es2022/angular-router.min.js",
          "@angular/router/upgrade": "/base/system/es2022/angular-router-upgrade.min.js",

          "@angular/service-worker": "/base/system/es2022/angular-service-worker.min.js",

          "@angular/upgrade": "/base/system/es2022/angular-upgrade.min.js",
          "@angular/upgrade/static": "/base/system/es2022/angular-upgrade-static.min.js"
        }
      }`,
  }),
);
