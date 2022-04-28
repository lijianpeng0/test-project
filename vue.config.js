/**
 * @Author lijianpeng10
 * @Date 2022-04-19 16:42:02
 * @LastEditors lijianpeng10
 * @LastEditTime 2022-04-27 16:54:57
 * @Desc 
 */

const SentryWebpackPlugin = require('@sentry/webpack-plugin');

// const { defineConfig } = require('@vue/cli-service')
module.exports = {
    // devServer: {
    //     proxy: {
    //         '/sentry': {
    //             target: 'http://192.168.157.128:9000',
    //             changeOrigin: true,
    //         }
    //     }
    // },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.devtool = 'source-map'
            config.plugins.push(new SentryWebpackPlugin({
                release: 'common@1.0.0', // 唯一标识，可以用其他的比如 hash
                include: './dist/js', // 要上传的文件夹 有的叫 dist
                // ignoreFile: '.sentrycliignore', // 可不要
                ignore: ['node_modules', 'config-overrides.js'],
                configFile: '.sentryclirc' // 默认同级，如果不一样需要用node path模块处理一下
            }))
        }
    }
}