import { join, dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const nodeModulesPath = resolve(__dirname, '../node_modules');

export const angularPackages = [
  // ########################################################################
  // tslib
  {
    name: 'tslib',
    input: join(nodeModulesPath, `tslib/tslib.es6.js`),
    outputFile: 'tslib',
    packageJson: require('tslib/package.json'),
    external: [],
  },
  // ########################################################################

  // ########################################################################
  // @angular/animations
  {
    name: '@angular/animations',
    input: join(nodeModulesPath, `@angular/animations/fesm2022/animations.mjs`),
    outputFile: 'angular-animations',
    packageJson: require('@angular/animations/package.json'),
    external: ['@angular/core', '@angular/common'],
  },
  {
    name: '@angular/animations/browser',
    input: join(nodeModulesPath, `@angular/animations/fesm2022/browser.mjs`),
    outputFile: 'angular-animations-browser',
    packageJson: require('@angular/animations/package.json'),
    external: ['@angular/core', '@angular/animations'],
  },
  // ########################################################################

  // ########################################################################
  // @angular/common
  {
    name: '@angular/common',
    input: join(nodeModulesPath, `@angular/common/fesm2022/common.mjs`),
    outputFile: 'angular-common',
    packageJson: require('@angular/common/package.json'),
    external: ['@angular/core'],
  },
  {
    name: '@angular/common/http',
    input: join(nodeModulesPath, `@angular/common/fesm2022/http.mjs`),
    outputFile: 'angular-common-http',
    packageJson: require('@angular/common/package.json'),
    external: ['rxjs', 'rxjs/operators', '@angular/core', '@angular/common'],
  },
  {
    name: '@angular/common/upgrade',
    input: join(nodeModulesPath, `@angular/common/fesm2022/upgrade.mjs`),
    outputFile: 'angular-common-upgrade',
    packageJson: require('@angular/common/package.json'),
    external: [
      'rxjs',
      '@angular/core',
      '@angular/common',
      '@angular/upgrade/static',
    ],
  },
  // ########################################################################

  // ########################################################################
  // @angular/compiler
  {
    name: '@angular/compiler',
    input: join(nodeModulesPath, `@angular/compiler/fesm2022/compiler.mjs`),
    outputFile: 'angular-compiler',
    packageJson: require('@angular/compiler/package.json'),
    external: ['rxjs', 'rxjs/operators'],
  },
  // ########################################################################

  // ########################################################################
  // @angular/core
  {
    name: '@angular/core/primitives/signals',
    input: join(
      nodeModulesPath,
      `@angular/core/fesm2022/primitives/signals.mjs`,
    ),
    outputFile: 'angular-core-primitives-signals',
    packageJson: require('@angular/core/package.json'),
    external: ['rxjs', 'rxjs/operators'],
  },
  {
    name: '@angular/core',
    input: join(nodeModulesPath, `@angular/core/fesm2022/core.mjs`),
    outputFile: 'angular-core',
    packageJson: require('@angular/core/package.json'),
    external: ['rxjs', 'rxjs/operators', '@angular/core/primitives/signals'],
  },
  {
    name: '@angular/core/rxjs-interop',
    input: join(nodeModulesPath, `@angular/core/fesm2022/rxjs-interop.mjs`),
    outputFile: 'angular-core-rxjs-interop',
    packageJson: require('@angular/core/package.json'),
    external: ['rxjs', 'rxjs/operators', '@angular/core'],
  },
  // ########################################################################

  // ########################################################################
  // @angular/elements
  {
    name: '@angular/elements',
    input: join(nodeModulesPath, `@angular/elements/fesm2022/elements.mjs`),
    outputFile: 'angular-elements',
    packageJson: require('@angular/elements/package.json'),
    external: ['rxjs', 'rxjs/operators', '@angular/core'],
  },
  // ########################################################################

  // ########################################################################
  // @angular/forms
  {
    name: '@angular/forms',
    input: join(nodeModulesPath, `@angular/forms/fesm2022/forms.mjs`),
    outputFile: 'angular-forms',
    packageJson: require('@angular/forms/package.json'),
    external: ['rxjs', 'rxjs/operators', '@angular/core', '@angular/common'],
  },
  // ########################################################################

  // ########################################################################
  // @angular/localize
  {
    name: '@angular/localize',
    input: join(nodeModulesPath, `@angular/localize/fesm2022/localize.mjs`),
    outputFile: 'angular-localize',
    packageJson: require('@angular/localize/package.json'),
    external: [],
  },
  {
    name: '@angular/localize/init',
    input: join(nodeModulesPath, `@angular/localize/fesm2022/init.mjs`),
    outputFile: 'angular-localize-init',
    packageJson: require('@angular/localize/package.json'),
    external: ['@angular/localize'],
  },
  // ########################################################################

  // ########################################################################
  // @angular/platform-browser
  {
    name: '@angular/platform-browser',
    input: join(
      nodeModulesPath,
      `@angular/platform-browser/fesm2022/platform-browser.mjs`,
    ),
    outputFile: 'angular-platform-browser',
    packageJson: require('@angular/platform-browser/package.json'),
    external: ['@angular/core', '@angular/common', '@angular/common/http'],
  },
  {
    name: '@angular/platform-browser/animations',
    input: join(
      nodeModulesPath,
      `@angular/platform-browser/fesm2022/animations.mjs`,
    ),
    outputFile: 'angular-platform-browser-animations',
    packageJson: require('@angular/platform-browser/package.json'),
    external: [
      '@angular/core',
      '@angular/common',
      '@angular/animations/browser',
      '@angular/platform-browser',
    ],
  },
  {
    name: '@angular/platform-browser/animations/async',
    input: join(
      nodeModulesPath,
      `@angular/platform-browser/fesm2022/animations/async.mjs`,
    ),
    outputFile: 'angular-platform-browser-animations-async',
    packageJson: require('@angular/platform-browser/package.json'),
    external: ['@angular/core', '@angular/common', '@angular/platform-browser'],
  },
  // ########################################################################

  // ########################################################################
  // @angular/platform-browser-dynamic
  {
    name: '@angular/platform-browser-dynamic',
    input: join(
      nodeModulesPath,
      `@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs`,
    ),
    outputFile: 'angular-platform-browser-dynamic',
    packageJson: require('@angular/platform-browser-dynamic/package.json'),
    external: [
      '@angular/compiler',
      '@angular/core',
      '@angular/common',
      '@angular/platform-browser',
    ],
  },
  // ########################################################################

  // ########################################################################
  // @angular/router
  {
    name: '@angular/router',
    input: join(nodeModulesPath, `@angular/router/fesm2022/router.mjs`),
    outputFile: 'angular-router',
    packageJson: require('@angular/router/package.json'),
    external: [
      'rxjs',
      'rxjs/operators',
      '@angular/core',
      '@angular/common',
      '@angular/platform-browser',
    ],
  },
  {
    name: '@angular/router/upgrade',
    input: join(nodeModulesPath, `@angular/router/fesm2022/upgrade.mjs`),
    outputFile: 'angular-router-upgrade',
    packageJson: require('@angular/router/package.json'),
    external: [
      '@angular/core',
      '@angular/common',
      '@angular/router',
      '@angular/upgrade/static',
    ],
  },
  // ########################################################################

  // ########################################################################
  // @angular/service-worker
  {
    name: '@angular/service-worker',
    input: join(
      nodeModulesPath,
      `@angular/service-worker/fesm2022/service-worker.mjs`,
    ),
    outputFile: 'angular-service-worker',
    packageJson: require('@angular/service-worker/package.json'),
    external: ['rxjs', 'rxjs/operators', '@angular/core', '@angular/common'],
  },
  {
    name: '@angular/service-worker/config',
    input: join(nodeModulesPath, `@angular/service-worker/fesm2022/config.mjs`),
    outputFile: 'angular-service-worker-config',
    packageJson: require('@angular/service-worker/package.json'),
    external: [],
  },
  // ########################################################################

  // ########################################################################
  // @angular/upgrade
  {
    name: '@angular/upgrade',
    input: join(nodeModulesPath, `@angular/upgrade/fesm2022/upgrade.mjs`),
    outputFile: 'angular-upgrade',
    packageJson: require('@angular/upgrade/package.json'),
    external: ['@angular/core', '@angular/platform-browser-dynamic'],
  },
  {
    name: '@angular/upgrade/static',
    input: join(nodeModulesPath, `@angular/upgrade/fesm2022/static.mjs`),
    outputFile: 'angular-upgrade-static',
    packageJson: require('@angular/upgrade/package.json'),
    external: ['@angular/core', '@angular/platform-browser'],
  },
  // ########################################################################
];
