import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { createEs2015LinkerPlugin } from '@angular/compiler-cli/linker/babel';
import {
  ConsoleLogger,
  NodeJSFileSystem,
  LogLevel,
} from '@angular/compiler-cli';

import { angularPackages } from './rollup/angular-packages.js';

/** File system used by the Angular linker plugin. */
const fileSystem = new NodeJSFileSystem();
/** Logger used by the Angular linker plugin. */
const logger = new ConsoleLogger(LogLevel.info);
/**
 * The linker plugin is used to make output files AOT compatible, so they don't
 * require the `@angular/compiler` at runtime.
 */
const linkerPlugin = createEs2015LinkerPlugin({
  fileSystem,
  logger,
  linkerJitMode: false,
});

const configs = angularPackages.map(
  ({ name, input, outputFile, packageJson, external }) => {
    return [
      [false, 'system'],
      [true, 'system'],
      [false, 'es'],
      [true, 'es'],
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
  const dir = (format === 'es' ? '.' : format) + `/es2022`;

  return {
    input,
    output: {
      file: `${dir}/${outputFile}.${prod ? 'min.' : ''}js`,
      format,
      sourcemap: true,
      banner: `/* esm-bundle - ${name}@${packageJson.version} - ${format} format - Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license */`,
    },
    plugins: [
      babel({ plugins: [linkerPlugin] }),

      !prod &&
        replace({
          ngDevMode: true,
          ngJitMode: false,
          ngI18nClosureMode: false,
        }),

      prod &&
        terser({
          format: {
            ecma: '2022',
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
