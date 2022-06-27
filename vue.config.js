const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/styles/vars.scss";
                    @import "@/assets/styles/mixins.scss";
                `
            }
        }
    },
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 引入一个全局sass文件
                    resources: './src/assets/styles/vars.scss',

                    // 引入多个全局sass文件
                    resources: ['./src/assets/styles/vars.scss', './src/assets/styles/mixins.scss']
                })
                .end()
        })
        config.module
            .rule('js')
            .include.add('/packages/')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => { 
                return options
            })
    },
})