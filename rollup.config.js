import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import { version } from './package.json'

const banner =
  `/**
 * kill-null v${version}
 * (c) ${new Date().getFullYear()} Ryan Liu
 * @license MIT
 */`

const inputDir = './index.js'
export default [{
  input: inputDir,
  output: {
    file: './dist/kill-null.js',
    format: 'umd',
    name: 'kn',
    globals: 'kn',
    banner,
    exports: 'named'
  },
  plugins: [babel()]
}, {
  input: inputDir,
  output: {
    file: './dist/kill-null.min.js',
    format: 'umd',
    name: 'kn',
    globals: 'kn',
    banner,
    exports: 'named'
  },
  plugins: [babel(), uglify()]
}, {
  input: inputDir,
  output: {
    file: './dist/kill-null.esm.js',
    format: 'es',
    banner
  },
  plugins: [babel()]
}, {
  input: inputDir,
  output: {
    file: './dist/kill-null.esm.min.js',
    format: 'es',
    banner
  },
  plugins: [babel(), uglify()]
}]
