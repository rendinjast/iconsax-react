import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const input = 'src/index.js';

// const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, '.min.js');

// const plugins = [
//   babel({
//     exclude: 'node_modules/**',
//   }),
//   external(),
//   resolve(),
//   commonjs(),
//   filesize(),
// ];

const minCjsPlugins = [
  babel({
    exclude: 'node_modules/**',
  }),
  external(),
  resolve(),
  commonjs(),
  uglify(),
  filesize(),
];

const minUmdEsmPlugins = [
  babel({
    exclude: 'node_modules/**',
  }),
  external(),
  resolve(),
  commonjs(),
  terser(),
  copy({
    targets: [
      { src: 'src/index.d.ts', dest: 'dist' },
      { src: '../../meta-data.json', dest: 'dist' },
    ],
  }),
  filesize(),
];

export default [
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: false,
    },
    plugins: minCjsPlugins,
  },

  {
    input,
    output: {
      file: pkg.module,
      format: 'es',
      sourcemap: false,
      exports: 'named',
    },
    plugins: minUmdEsmPlugins,
  },
];
