//defineConfig 方法可以帮助开发者定义应用程序的配置，而 loadEnv 方法则可以加载环境变量。
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
//自动导入组件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
//将相对路径解析为绝对路径
import { resolve } from 'path';
//减少压缩大小
import viteCompression from 'vite-plugin-compression';
//关于SVG图标的
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
//ElementPlusResolver 是一个用于解析 Vue 组件的类，它可以从 unplugin-vue-components 中导入。它可以用来提取组件的属性，检查它们的类型，以及为它们提供默认值
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//性能优化
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';

import eslintPlugin from 'vite-plugin-eslint'; //运行时检查eslint规范

//解析全局ess路径
function resovePath(paths: string) {
  return resolve(__dirname, paths);
}

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  };
  return defineConfig({
    base: '/',
    assetsInclude: resolve(__dirname, 'src/assets'),
    plugins: [
      vue(),

      AutoImport({
        dts: true,
        imports: ['vue', 'vue-router'],
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        dts: true,
        resolvers: [ElementPlusResolver()]
      }),
      viteCompression(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')], //指定缓存图标文件夹
        symbolId: 'icon-[dir]-[name]'
      }),
      PkgConfig(),
      OptimizationPersist()
      // eslintPlugin({
      //   include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      // })
    ],

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    define: {
      'process.env': process.env
    },

    css: {
      preprocessorOptions: {
        less: {
          charset: false,
          javascriptEnabled: true,
          // 这样就能全局使用 src/assets/styles/mixins.less 定义的 变量
          additionalData: `@import "${resovePath('src/assets/styles/mixins.less')}";`
        }
      },
      postcss: {
        plugins: [require('autoprefixer'), require('tailwindcss')] //前面是兼容 后面是维护用
      }
    },

    //服务器设置
    server: {
      port: 2333,
      proxy: {
        '/api': {
          target: 'http://localhost:3309', //后端接口
          changeOrigin: true //允许跨院
          // rewrite:path=>path.replace(/^\/api/,'') //如果路径是“/api/user/123”，那么替换后的路径就是“/user/123”。
        },
        // '/image': {
        //   target: 'https://www.copymanga.site',
        //   changeOrigin: true,
        //   headers: {
        //     referer: 'https://www.copymanga.site'
        //   },
        //   rewrite: (path) => path.replace(/^\/image/, '/comic/jqjshcllmdjjddeep/chapter/84157914-ac52-11ec-b3ba-024352452ce0')
        // },
        '/db': {
          target:
            'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0',
          changeOrigin: true
          // rewrite: path => path.replace(/^\/db/, '')
        }
      }
    }
  });
};
