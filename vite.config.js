import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' // 开启jsx配置
import postCssPxToRem from 'postcss-pxtorem';
import viteCompression from 'vite-plugin-compression' // 开启gizp 压缩
import viteImagemin from 'vite-plugin-imagemin' // 图片压缩
import AutoImport from 'unplugin-auto-import/vite'; // 自动引入
import autoprefixer from 'autoprefixer' // css 添加内核前缀
import removeConsole from 'vite-plugin-remove-console'; // 删除console
// https://vitejs.dev/config/
export default defineConfig({
  // 插件
  plugins: [
    vue(),
    vueJsx(),
    removeConsole(),
    AutoImport({
      // 自动引入的api从这里找
      imports: ['vue', 'vue-router', 'pinia'],
      // 根据项目情况配置eslintrc，默认是不开启的
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    viteCompression({
      verbose: true, // 是否在控制台输出压缩结果，默认为 true
      disable: false, // 压缩后是否删除原文件，默认为 false
      threshold: 1024 * 1000, // 对大于 1MB 的文件进行压缩
      algorithm: 'gzip', // 采用的压缩算法，默认是 gzip
      ext: '.gz', // 生成的压缩包后缀
      deleteOriginFile: false //是否禁用压缩，默认为 false
    }),
    viteImagemin({
      // gif图片压缩
      gifsicle: {
        optimizationLevel: 3, // 选择1到3之间的优化级别
        interlaced: false // 隔行扫描gif进行渐进式渲染
        // colors: 2 // 将每个输出GIF中不同颜色的数量减少到num或更少。数字必须介于2和256之间。
      },
      // png
      optipng: {
        optimizationLevel: 7 // 选择0到7之间的优化级别
      },
      // jpeg
      mozjpeg: {
        quality: 20 // 压缩质量，范围从0(最差)到100(最佳)。
      },
      // png
      pngquant: {
        quality: [0.8, 0.9], // Min和max是介于0(最差)到1(最佳)之间的数字，类似于JPEG。达到或超过最高质量所需的最少量的颜色。如果转换导致质量低于最低质量，图像将不会被保存。
        speed: 4 // 压缩速度，1(强力)到11(最快)
      },
      // svg压缩
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
  // mode: 'development', // 模式
  base: './', // 开发或生产环境服务的公共基础路径
  publicDir: false, //静态资源服务的文件夹
  // cacheDir: 'node_modules/.vite', //存储缓存文件的目录
  resolve: {
    // 文件系统路径别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    },
    //导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  // css
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // （设计稿/10）1rem的大小
          propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
        }),
        autoprefixer({ // 自动添加前缀
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8'
            //'last 2 versions', // 所有主流浏览器最近2个版本
          ],
          grid: true
        })
      ]
    },
    preprocessorOptions: { //less 地址
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/assets/less/default.less')}";`
        },
        javascriptEnabled: true
      }
    }
  },
  // 静态服务器 用于代理等
  server: {
    // usePolling 当需要再 Windows Subsystem for Linux (WSL) 2 上运行 Vite 时，如果项目文件夹位于 Windows 文件系统中，你需要将此选项设置为 { usePolling: true }。这是由于 Windows 文件系统的 WSL2 限制 造成的。
    // usePolling 会导致高 CPU 占用率
    usePolling: true,
    host: '0.0.0.0', // 启用本地IP
    port: 5000, // 端口号
    open: true, // 自动在浏览器打开
    https: false, // 是否开启 https
    cors: true, // 允许跨域
    hmr: true, //开启热更新
    strictPort: false, // 若端口已被占用则会直接退出
    proxy: {
      // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://192.168.2.199:9090',
        changeOrigin: true,
        rewrite: (url) => url.replace(/^\/api/, '')
      },
      // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      '/socket.io': {
        target: 'ws://localhost:5174',
        ws: true
      }
    }
  },
  // 构建选项
  build: {
    outDir: 'dist', //指定输出路径（相对于 项目根目录).
    target: ['chrome80'], // 浏览器兼容性 默认： 'modules' 自定义目标也可以是一个 ES 版本（例如：es2015）、一个浏览器版本（例如：chrome58）
    cssTarget: ['chrome80'], // 与 build.target 一致
    assetsDir: 'assets', // 指定生成静态资源的存放路径（相对于 build.outDir）
    assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    cssCodeSplit: true, //启用/禁用 CSS 代码拆分 如果指定了 build.lib，build.cssCodeSplit 会默认为 false
    // build.minify 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。
    // build.minify 当设置为 'terser' 时必须先安装 Terser。
    minify: 'esbuild',
    reportCompressedSize: true, // 启用/禁用 gzip 压缩大小报告 禁用提示速度
    chunkSizeWarningLimit: 500, // 规定触发警告的 chunk 大小。
    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks: id => {
          // 使用函数形式时，每个解析的模块 id 都会传递给函数。
          // 如果返回字符串，则模块及其所有依赖项将添加到具有给定名称的手动块中。
          // 例如，这将创建一个vendor包含所有依赖项的块node_modules：
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  //预览选项
  preview: {
    host: '0.0.0.0', //为开发服务器指定 ip 地址
    port: '4173', // 指定开发服务器端口
    strictPort: true, // 如果端口已被使用，则直接退出
    https: false, // 是否开启 https
    open: true, // 开发服务器启动时，自动在浏览器中打开应用程序
    // proxy 代理
    cors: true // 允许跨域
    // headers 指明服务器返回的响应头。
  }
})
