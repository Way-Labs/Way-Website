import { defineConfig } from 'umi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
const path = require('path');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');
const chainWebpack = (config, { webpack }) => {
  config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
    {
      languages: ['javascript'],
    },
  ]);
  // config.module
  //   .rule('style')
  //   .test(/\.css$/)
  //   .include
  //   .add(MONACO_DIR)
  //   .end()
  //   .use()
  //   .loader("style-loader", "css-loader")
  //   .end();
};
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/Home' }],
  fastRefresh: {},
  title: 'Way',
  // chainWebpack: chainWebpack
});
