import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'js', dest: 'js' },
        { src: 'css', dest: 'css' },
        { src: '../config', dest: 'config' }
      ]
    }
  ]
};
