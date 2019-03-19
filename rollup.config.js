import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
]

export default {
  input: './src/server.ts',
  output: {
    file: './build/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ extensions, exclude: 'node_modules/**', include: ['src/**/*'] }),
  ],
  external: [
    'apollo-server',
    'graphql',
    'prisma-client-lib'
  ]
}