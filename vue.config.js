const path = require('path');
const os = require('os');
const webpack = require('webpack');

// const CleanWebpackPlugin = require('clean-webpack-plugin');


const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'


// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');


// const HappyPack = require('happypack');
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function resolve(dir) {
    return path.join(__dirname, dir);
}

const vuxLoader = require('vux-loader');

/*,
"postcss-px2rem": {
    "rootValue": 37.5,
        "propList":["*"]
}*/


/*const webpackConfig = {
    lintOnSave: true,
    configureWebpack: {
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm.js',
                '@': resolve('../src')
            },
            extensions: ['.js', '.vue']
        },
        entry: {
            main: '@/main',
            'vender-base': '@/vendors/vendors.base.js',
            'vender-exten': '@/vendors/vendors.exten.js'
        },
        output: {
            path: path.resolve(__dirname, '../dist/dist')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: 'vue-style-loader!css-loader',
                            less: 'vue-style-loader!css-loader!less-loader'
                        },
                        postLoaders: {
                            html: 'babel-loader'
                        }
                    }
                },
                {
                    test: /iview\/.*?js$/,
                    loader: 'happypack/loader?id=happybabel',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loader: 'happypack/loader?id=happybabel',
                    exclude: /node_modules/
                },
                {
                    test: /\.js[x]?$/,
                    include: [resolve('src')],
                    exclude: /node_modules/,
                    loader: 'happypack/loader?id=happybabel'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader'],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=1024'
                },
                {
                    test: /\.(html|tpl)$/,
                    loader: 'html-loader'
                }
            ]
        }
    }
}
const webpackConfig = originalConfig;*/

/**/
/*chainWebpack: config => {
    config.module
        .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
        .loader('px2rem-loader')
        .options({
            remUnit: 37.5
        })
},*/

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.module
        .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
        .loader('px2rem-loader')
        .options({
            remUnit: 75
        });

        //  代码分割
        config.optimization.
        runtimeChunk({
            name: "manifest"
        });
        // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
        config.optimization
            .splitChunks({
                chunks: 'all',
                cacheGroups: {
                    common: {
                        minChunks: 2,
                        name: 'commons',
                        chunks: 'async',
                        priority: 10,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            });

    },
    configureWebpack: config => {
        // gzip压缩
        if (isProduction) {
            config.plugins.push(new CompressionWebpackPlugin({
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
        }

        require('vux-loader').merge(config, {
            options: {},
            externals: {
                "vue": "Vue",
                "vuex": "Vuex",
                "vue-router": "VueRouter",
                "axios": "axios"
            },
            resolve: {
                alias: {
                    'vue': 'vue/dist/vue.esm.js',
                    '@': resolve('../src')
                },
                extensions: ['.js', '.vue']
            },
            entry: '@/main',
            /*entry: {
                main: '@/main',
                'vender-base': '@/vendors/vendors.base.js',
                'vender-exten': '@/vendors/vendors.exten.js'
            },*/
            output: {
                path: path.resolve(__dirname, '../dist/dist')
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                css: 'vue-style-loader!css-loader',
                                less: 'vue-style-loader!css-loader!less-loader'
                            },
                            postLoaders: {
                                html: 'babel-loader'
                            }
                        }
                    },
                    {
                        test: /vux\/.*?js$/,
                        loader: 'happypack/loader?id=happybabel',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.js$/,
                        loader: 'happypack/loader?id=happybabel',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.js[x]?$/,
                        include: [resolve('src')],
                        exclude: /node_modules/,
                        loader: 'happypack/loader?id=happybabel'
                    },
                    {
                        test: /\.css$/,
                        use: [
                            miniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader?minimize&autoprefixer-loader',
                            }
                        ]
                        /*use: ExtractTextPlugin.extract({
                            use: ['css-loader?minimize', 'autoprefixer-loader'],
                            fallback: 'style-loader'
                        })*/
                    },
                    {
                        test: /\.less$/,
                        use: [
                            miniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader?minimize&autoprefixer-loader&less-loader',
                            }
                        ]
                        /*use: ExtractTextPlugin.extract({
                            use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
                            fallback: 'style-loader'
                        })*/
                    },
                    {
                        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                        loader: 'url-loader?limit=1024'
                    },
                    {
                        test: /\.(html|tpl)$/,
                        loader: 'html-loader'
                    }
                ]
            },
            plugins: [
                // new CleanWebpackPlugin(['../dist/dist']),
                new webpack.HashedModuleIdsPlugin(),
            {
                name: 'vux-ui'
            },{
                name: 'after-less-parser',
                fn: function (source) {
                    if (this.resourcePath.replace(/\\/g, '/').indexOf('/vux/src/components') > -1) {
                        source = source.replace(/px/g, 'PX')
                        //资源中有引入1px.less文件的，上面也会将文件名替换成1PX.less，所以要替换回来避免构建报错
                        source = source.replace(/1PX.less/g,'1px.less');
                    }
                    // 自定义的全局样式大部分不需要转换
                    return source
                }
            },{
                name: 'style-parser',
                fn: function (source) {
                    if (this.resourcePath.replace(/\\/g, '/').indexOf('/vux/src/components') > -1) {
                        source = source.replace(/px/g, 'PX')
                        source = source.replace(/1PX.less/g,'1px.less');
                    }
                    return source
                }
            },{
                name: 'less-theme',
                path:'./src/assets/styles/vux_theme.less'
            }]
        })
    }
}


/*module.exports = {
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    }
}*/
