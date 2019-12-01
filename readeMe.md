### webpack4 学习

#### 目标：配置一个完整的 react 单页应用
- 配置打包 html、css、js、img、icon-font 能力
- 引入 react ， 使具备打包react的能力
- 配置开发环境， webpack-dev-server
- 开发环境mock数据的方法
- 引入 react-router，学习 react-router 的配置
- 引入 redux、react-redux
- react-ssr

#### 一、初始化git、安装webpack、webpack-cli

1. git init
2. 添加 .gitignore 文件， 忽略 node_modules 文件夹及 .vscode、.idea 等编辑器生成的隐藏文件、文件夹等。忽略不需要push到远程的文件。
3. 安装 webpack 和 webpack-cli
```javascript
// 默认本地安装即可
npm i webpack webpack-cli
```

**注意**
本地安装webpack和webpack-cli后直接运行 webpack -v 若本机没有全局安装webpack和webpack-cli则会报错 ：command not found: webpack 。可以使用以下方法查看webpack和webpack-cli是否成功安装：
```javascript
./node_modules/.bin/webpack -v // 4.41.2
// 或者在 package.json 文件的 script 字段中配置 version： webpack -v
npm run version  // 4.41.2 
```
#### 二、熟悉 webpack-cli 基本命令

> 命令行接口（command line Interface）。为了更合适且方便地使用配置，可以在 webpack.config.js 中对 webpack 进行配置。CLI 中传入的任何参数会在配置文件中映射为对应的参数。
[webpack-cli 文档](https://www.webpackjs.com/api/cli/)
1. webpack 使用配置文件打包应用
```
webpack --config [webpack.config.js]
```

#### 三、使用 html

#### 三、配置 loader，打包 css、js、img、icon-font
1. css loader
