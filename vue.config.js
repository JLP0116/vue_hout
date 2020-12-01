
module.exports = {
    // 基本路径  
    publicPath: '',
    // 输出路径   
    outputDir: 'dist',
    // 静态资源    
    assetsDir: './',
    // eslint-loader是否在保存时候检查  
    lintOnSave: true,
    // 服务项配置    
    devServer: {
        host: 'localhost',
        port: 8080,
        https: false,
        open: true,
　　 // 设置代理proxy
        proxy : {
            // http://localhost:8888/dev-api/login
            '/dev-api':{
                'target':' http://ceshi7.dishait.cn/admin',//localhost:3000',
                changeOrigin:true,    //表示是否跨域，
                pathRewrite:{           //表示需要rewrite重写的
                    '^/dev-api':' ',
                }
              }
        }   
    },
    //关闭esLint
    lintOnSave : false,
    // 打包时不会生成 .map 文件，加快打包速度
    productionSourceMap: false
}