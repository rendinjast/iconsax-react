import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import external from 'rollup-plugin-peer-deps-external';
import multiInput from 'rollup-plugin-multi-input';

const input = ['src/**/*.js'];
const output = [
  {
    dir: 'dist/cjs',
    format: 'cjs',
    exports: 'auto',
    sourcemap: false,
  },
  {
    dir: 'dist/esm',
    format: 'es',
    exports: 'auto',
    sourcemap: false,
  },
];

const plugins = [];
plugins.push(
  babel({
    exclude: 'node_modules/**',
  }),
);
plugins.push(multiInput());
plugins.push(external());
plugins.push(resolve());
plugins.push(commonjs());
plugins.push(
  copy({
    targets: [
      { src: 'src/index.d.ts', dest: 'dist' },
      { src: '../../meta-data.json', dest: 'dist' },
    ],
  }),
);
export default {
  input,
  output,
  external: ['react', 'prop-types'],
  plugins,
};
