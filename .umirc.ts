import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/Home' }],
  fastRefresh: {},
  title: 'Way Network',
  // chainWebpack: chainWebpack
});
