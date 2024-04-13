import { join, dirname } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import terser from "@rollup/plugin-terser";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

export const packages = [
  // ########################################################################
  // @angular/animations
  {
    name: "@angular/animations",
    input: join(
      __dirname,
      `node_modules/@angular/animations/fesm2022/animations.mjs`,
    ),
    outputFile: "angular-animations",
    packageJson: require("@angular/animations/package.json"),
    external: ["@angular/core", "@angular/common"],
  },
  {
    name: "@angular/animations/browser",
    input: join(
      __dirname,
      `node_modules/@angular/animations/fesm2022/browser.mjs`,
    ),
    outputFile: "angular-animations-browser",
    packageJson: require("@angular/animations/package.json"),
    external: ["@angular/core", "@angular/animations"],
  },
  // ########################################################################

  // ########################################################################
  // @angular/common
  {
    name: "@angular/common",
    input: join(__dirname, `node_modules/@angular/common/fesm2022/common.mjs`),
    outputFile: "angular-common",
    packageJson: require("@angular/common/package.json"),
    external: ["@angular/core"],
  },
  {
    name: "@angular/common/http",
    input: join(__dirname, `node_modules/@angular/common/fesm2022/http.mjs`),
    outputFile: "angular-common-http",
    packageJson: require("@angular/common/package.json"),
    external: ["rxjs", "rxjs/operators", "@angular/core", "@angular/common"],
  },
  {
    name: "@angular/common/upgrade",
    input: join(__dirname, `node_modules/@angular/common/fesm2022/upgrade.mjs`),
    outputFile: "angular-common-upgrade",
    packageJson: require("@angular/common/package.json"),
    external: [
      "rxjs",
      "@angular/core",
      "@angular/common",
      "@angular/upgrade/static",
    ],
  },
  // ########################################################################

  // ########################################################################
  // @angular/compiler
  {
    name: "@angular/compiler",
    input: join(
      __dirname,
      `node_modules/@angular/compiler/fesm2022/compiler.mjs`,
    ),
    outputFile: "angular-compiler",
    packageJson: require("@angular/compiler/package.json"),
    external: ["rxjs", "rxjs/operators"],
  },
  // ########################################################################

  // ########################################################################
  // @angular/core
  {
    name: "@angular/core/primitives/signals",
    input: join(
      __dirname,
      `node_modules/@angular/core/fesm2022/primitives/signals.mjs`,
    ),
    outputFile: "angular-core-primitives-signals",
    packageJson: require("@angular/core/package.json"),
    external: ["rxjs", "rxjs/operators"],
  },
  {
    name: "@angular/core",
    input: join(__dirname, `node_modules/@angular/core/fesm2022/core.mjs`),
    outputFile: "angular-core",
    packageJson: require("@angular/core/package.json"),
    external: ["rxjs", "rxjs/operators", "@angular/core/primitives/signals"],
  },
  {
    name: "@angular/core/rxjs-interop",
    input: join(
      __dirname,
      `node_modules/@angular/core/fesm2022/rxjs-interop.mjs`,
    ),
    outputFile: "angular-core-rxjs-interop",
    packageJson: require("@angular/core/package.json"),
    external: ["rxjs", "rxjs/operators", "@angular/core"],
  },
  // ########################################################################

  // ########################################################################
  // @angular/elements
  {
    name: "@angular/elements",
    input: join(
      __dirname,
      `node_modules/@angular/elements/fesm2022/elements.mjs`,
    ),
    outputFile: "angular-elements",
    packageJson: require("@angular/elements/package.json"),
    external: ["rxjs", "rxjs/operators", "@angular/core"],
  },
  // ########################################################################

  // ########################################################################
  // @angular/forms
  {
    name: "@angular/forms",
    input: join(__dirname, `node_modules/@angular/forms/fesm2022/forms.mjs`),
    outputFile: "angular-forms",
    packageJson: require("@angular/forms/package.json"),
    external: ["rxjs", "rxjs/operators", "@angular/core", "@angular/common"],
  },
  // ########################################################################

  // ########################################################################
  // @angular/localize
  {
    name: "@angular/localize",
    input: join(
      __dirname,
      `node_modules/@angular/localize/fesm2022/localize.mjs`,
    ),
    outputFile: "angular-localize",
    packageJson: require("@angular/localize/package.json"),
    external: [],
  },
  {
    name: "@angular/localize/init",
    input: join(__dirname, `node_modules/@angular/localize/fesm2022/init.mjs`),
    outputFile: "angular-localize-init",
    packageJson: require("@angular/localize/package.json"),
    external: ["@angular/localize"],
  },
  // ########################################################################

  // ########################################################################
  // @angular/platform-browser
  {
    name: "@angular/platform-browser",
    input: join(
      __dirname,
      `node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs`,
    ),
    outputFile: "angular-platform-browser",
    packageJson: require("@angular/platform-browser/package.json"),
    external: ["@angular/core", "@angular/common", "@angular/common/http"],
  },
  {
    name: "@angular/platform-browser/animations",
    input: join(
      __dirname,
      `node_modules/@angular/platform-browser/fesm2022/animations.mjs`,
    ),
    outputFile: "angular-platform-browser-animations",
    packageJson: require("@angular/platform-browser/package.json"),
    external: [
      "@angular/core",
      "@angular/common",
      "@angular/animations/browser",
      "@angular/platform-browser",
    ],
  },
  {
    name: "@angular/platform-browser/animations/async",
    input: join(
      __dirname,
      `node_modules/@angular/platform-browser/fesm2022/animations/async.mjs`,
    ),
    outputFile: "angular-platform-browser-animations-async",
    packageJson: require("@angular/platform-browser/package.json"),
    external: ["@angular/core", "@angular/common", "@angular/platform-browser"],
  },
  // ########################################################################

  // ########################################################################
  // @angular/platform-browser-dynamic
  {
    name: "@angular/platform-browser-dynamic",
    input: join(
      __dirname,
      `node_modules/@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs`,
    ),
    outputFile: "angular-platform-browser-dynamic",
    packageJson: require("@angular/platform-browser-dynamic/package.json"),
    external: [
      "@angular/compiler",
      "@angular/core",
      "@angular/common",
      "@angular/platform-browser",
    ],
  },
  // ########################################################################

  // ########################################################################
  // @angular/router
  {
    name: "@angular/router",
    input: join(__dirname, `node_modules/@angular/router/fesm2022/router.mjs`),
    outputFile: "angular-router",
    packageJson: require("@angular/router/package.json"),
    external: [
      "rxjs",
      "rxjs/operators",
      "@angular/core",
      "@angular/common",
      "@angular/platform-browser",
    ],
  },
  {
    name: "@angular/router/upgrade",
    input: join(__dirname, `node_modules/@angular/router/fesm2022/upgrade.mjs`),
    outputFile: "angular-router-upgrade",
    packageJson: require("@angular/router/package.json"),
    external: [
      "@angular/core",
      "@angular/common",
      "@angular/router",
      "@angular/upgrade/static",
    ],
  },
  // ########################################################################

  // ########################################################################
  // @angular/service-worker
  {
    name: "@angular/service-worker",
    input: join(
      __dirname,
      `node_modules/@angular/service-worker/fesm2022/service-worker.mjs`,
    ),
    outputFile: "angular-service-worker",
    packageJson: require("@angular/service-worker/package.json"),
    external: ["rxjs", "rxjs/operators", "@angular/core", "@angular/common"],
  },
  {
    name: "@angular/service-worker/config",
    input: join(
      __dirname,
      `node_modules/@angular/service-worker/fesm2022/config.mjs`,
    ),
    outputFile: "angular-service-worker-config",
    packageJson: require("@angular/service-worker/package.json"),
    external: [],
  },
  // ########################################################################

  // ########################################################################
  // @angular/upgrade
  {
    name: "@angular/upgrade",
    input: join(
      __dirname,
      `node_modules/@angular/upgrade/fesm2022/upgrade.mjs`,
    ),
    outputFile: "angular-upgrade",
    packageJson: require("@angular/upgrade/package.json"),
    external: ["@angular/core", "@angular/platform-browser-dynamic"],
  },
  {
    name: "@angular/upgrade/static",
    input: join(__dirname, `node_modules/@angular/upgrade/fesm2022/static.mjs`),
    outputFile: "angular-upgrade-static",
    packageJson: require("@angular/upgrade/package.json"),
    external: ["@angular/core", "@angular/platform-browser"],
  },
  // ########################################################################
];

const configs = packages.map(
  ({ name, input, outputFile, packageJson, external }) => {
    return [
      [false, "system"],
      [true, "system"],
      [false, "es"],
      [true, "es"],
    ].map(([prod, format]) =>
      createConfig({
        name,
        input,
        outputFile,
        packageJson,
        external,
        prod,
        format,
      }),
    );
  },
);

function createConfig({
  name,
  input,
  outputFile,
  packageJson,
  external,
  prod,
  format,
}) {
  const dir = (format === "es" ? "." : format) + `/es2022`;

  return {
    input,
    output: {
      file: `${dir}/${outputFile}.${prod ? "min." : ""}js`,
      format,
      sourcemap: true,
      banner: `/* esm-bundle - ${name}@${packageJson.version} - ${format} format - Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license */`,
    },
    plugins: [
      prod &&
        terser({
          format: {
            ecma: "2022",
            comments: /esm-bundle/,
          },
          compress: {
            global_defs: {
              ngJitMode: false,
              ngDevMode: false,
              ngI18nClosureMode: false,
            },
          },
        }),
    ],
    external,
  };
}

export default configs.flat();
