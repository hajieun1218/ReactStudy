const path=require("path")
module.exports={
    entry: path.join(__dirname,'src/index.js'), // 제일 먼저 실행
    output: {
        path:path.join(__dirname,'public'),
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test:/.js$/, // 조건 : .js파일 전부를 모아달라
                loader: 'babel-loader',  // ES6 버전
                options: {
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        ]
    }
}
