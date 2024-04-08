import typescript from '@rollup/plugin-typescript';

export default {
  input: './微内核架构/main.ts',
  output: {
    file: './微内核架构/dist/index.js',
    format: 'cjs',
  },
  plugins: [typescript()],
};
