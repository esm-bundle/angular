describe('@esm-bundle/angular', () => {
  describe('@angular/animations', () => {
    [
      ['angular-animations', 'AnimationBuilder'],
      ['angular-animations-browser', 'AnimationDriver'],
    ].forEach(([filename, exportName]) => {
      it(`can load the System.register bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.js`);
        expect(m[exportName]).toBeDefined();
      });

      it(`can load the System.register prod bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.min.js`);
        expect(m[exportName]).toBeDefined();
      });
    });
  });

  describe('@angular/common', () => {
    [
      ['angular-common', 'NgClass'],
      ['angular-common-http', 'HttpClient'],
      ['angular-common-upgrade', 'AngularJSUrlCodec'],
    ].forEach(([filename, exportName]) => {
      it(`can load the System.register bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.js`);
        expect(m[exportName]).toBeDefined();
      });

      it(`can load the System.register prod bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.min.js`);
        expect(m[exportName]).toBeDefined();
      });
    });
  });

  describe('@angular/compiler', () => {
    [['angular-compiler', 'compileComponentClassMetadata']].forEach(
      ([filename, exportName]) => {
        it(`can load the System.register bundle`, async () => {
          const m = await System.import(`/base/system/es2022/${filename}.js`);
          expect(m[exportName]).toBeDefined();
        });

        it(`can load the System.register prod bundle`, async () => {
          const m = await System.import(
            `/base/system/es2022/${filename}.min.js`,
          );
          expect(m[exportName]).toBeDefined();
        });
      },
    );
  });

  describe('@angular/core', () => {
    [
      ['angular-core', 'Injectable'],
      ['angular-core-primitives-signals', 'consumerMarkDirty'],
      ['angular-core-rxjs-interop', 'takeUntilDestroyed'],
    ].forEach(([filename, exportName]) => {
      it(`can load the System.register bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.js`);
        expect(m[exportName]).toBeDefined();
      });

      it(`can load the System.register prod bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.min.js`);
        expect(m[exportName]).toBeDefined();
      });
    });
  });

  describe('@angular/elements', () => {
    [['angular-elements', 'createCustomElement']].forEach(
      ([filename, exportName]) => {
        it(`can load the System.register bundle`, async () => {
          const m = await System.import(`/base/system/es2022/${filename}.js`);
          expect(m[exportName]).toBeDefined();
        });

        it(`can load the System.register prod bundle`, async () => {
          const m = await System.import(
            `/base/system/es2022/${filename}.min.js`,
          );
          expect(m[exportName]).toBeDefined();
        });
      },
    );
  });

  describe('@angular/forms', () => {
    [['angular-forms', 'ReactiveFormsModule']].forEach(
      ([filename, exportName]) => {
        it(`can load the System.register bundle`, async () => {
          const m = await System.import(`/base/system/es2022/${filename}.js`);
          expect(m[exportName]).toBeDefined();
        });

        it(`can load the System.register prod bundle`, async () => {
          const m = await System.import(
            `/base/system/es2022/${filename}.min.js`,
          );
          expect(m[exportName]).toBeDefined();
        });
      },
    );
  });

  describe('@angular/localize', () => {
    [['angular-localize', 'loadTranslations']].forEach(
      ([filename, exportName]) => {
        it(`can load the System.register bundle`, async () => {
          const m = await System.import(`/base/system/es2022/${filename}.js`);
          expect(m[exportName]).toBeDefined();
        });

        it(`can load the System.register prod bundle`, async () => {
          const m = await System.import(
            `/base/system/es2022/${filename}.min.js`,
          );
          expect(m[exportName]).toBeDefined();
        });
      },
    );
  });

  describe('@angular/platform-browser', () => {
    [
      ['angular-platform-browser', 'bootstrapApplication'],
      ['angular-platform-browser-animations', 'provideAnimations'],
      ['angular-platform-browser-animations-async', 'provideAnimationsAsync'],
    ].forEach(([filename, exportName]) => {
      it(`can load the System.register bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.js`);
        expect(m[exportName]).toBeDefined();
      });

      it(`can load the System.register prod bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.min.js`);
        expect(m[exportName]).toBeDefined();
      });
    });
  });

  describe('@angular/platform-browser-dynamic', () => {
    [['angular-platform-browser-dynamic', 'JitCompilerFactory']].forEach(
      ([filename, exportName]) => {
        it(`can load the System.register bundle`, async () => {
          const m = await System.import(`/base/system/es2022/${filename}.js`);
          expect(m[exportName]).toBeDefined();
        });

        it(`can load the System.register prod bundle`, async () => {
          const m = await System.import(
            `/base/system/es2022/${filename}.min.js`,
          );
          expect(m[exportName]).toBeDefined();
        });
      },
    );
  });

  describe('@angular/router', () => {
    [
      ['angular-router', 'provideRouter'],
      ['angular-router-upgrade', 'locationSyncBootstrapListener'],
    ].forEach(([filename, exportName]) => {
      it(`can load the System.register bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.js`);
        expect(m[exportName]).toBeDefined();
      });

      it(`can load the System.register prod bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.min.js`);
        expect(m[exportName]).toBeDefined();
      });
    });
  });

  describe('@angular/service-worker', () => {
    [['angular-service-worker', 'provideServiceWorker']].forEach(
      ([filename, exportName]) => {
        it(`can load the System.register bundle`, async () => {
          const m = await System.import(`/base/system/es2022/${filename}.js`);
          expect(m[exportName]).toBeDefined();
        });

        it(`can load the System.register prod bundle`, async () => {
          const m = await System.import(
            `/base/system/es2022/${filename}.min.js`,
          );
          expect(m[exportName]).toBeDefined();
        });
      },
    );
  });

  describe('@angular/upgrade', () => {
    [
      ['angular-upgrade', 'UpgradeAdapter'],
      ['angular-upgrade-static', 'downgradeComponent'],
    ].forEach(([filename, exportName]) => {
      it(`can load the System.register bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.js`);
        expect(m[exportName]).toBeDefined();
      });

      it(`can load the System.register prod bundle`, async () => {
        const m = await System.import(`/base/system/es2022/${filename}.min.js`);
        expect(m[exportName]).toBeDefined();
      });
    });
  });
});
