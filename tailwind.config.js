module.exports = {
  content: [
    //搜索public所有html文件，以及src文件中的js。。。vue文件
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  whilelistPatterns: [/el-.+$/], //匹配element的
  whilelistPatternsChildren: [/el-.+$/],
  theme: {
    extend: {}
  }, //提升设计用的
  variants: {
    extend: {}
  },
  plugins: [],
  prefix: 'tw-', //在使用核心插件时，将使用前缀“tw-”，并且不使用“preflight”插件。
  corePlugins: {
    preflight: false
  }
};
