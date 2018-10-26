# stickyNote

## 知识点

webpack模块化加载方式

less编写CSS

nodejs基础

express的使用

登录注册的实现

数据库的操作

数据模型的封装MVC





## 启动项目

### 利用Express搭建网站框架
1. 创建项目文件夹和远程仓库
2. 在项目文件夹内npm初始化生成**package.jason**文件
    ```shell
    npm init -y
    ```
3. 在项目文件夹内安装Experss，安装完成后会出现一个**node_modules**的文件夹
    ```shell
    npm install express --save
    ```
4. 利用Express应用生成器快速创建一个应用的骨架
    - 全局安装
        ```shell
        npm install express-generator -g
        ```
    - 当前目录安装
        ```shell
        npm install express-generator --save-dev
        ```
5. 用express文件创建骨架
    ```shell
    ./node_modules/express-generator/bin/express-cli.js . -f -e  
    ```
6. 定位到项目文件夹，安装依赖
    ```shell
    npm install
    ```
7. 运行应用程序
    ```shell
    npm start
    ```
8. 然后在浏览器中加载 http://localhost:3000/ ，以访问该应用程序。



### 初始化项目文件夹

![项目文件夹][项目文件夹]



### 配置`webpack`（V.4.23.1）

各版本略有差异，实际安装根据官方文档操作

1. 安装webpack（这里依然是局部安装），代码尽量从文档复制，**这里一定要注意，此处是安装了`webpack`和`webpack-cli**`

   ```shell
   npm install webpack webpack-cli --save-dev
   ```

2. 配置webpack文件，设置出入口(一定要注意`webpack.config.js`文件与出入口文件之间的位置关系。我此处的配置文件是放在项目文件的根目录下)

   `webpack.config.js`

   ```javascript
   const path = require('path');
   
   module.exports = {
       entry: path.join(__dirname, "src/js/app/index.js"),
       output: {
           filename: 'javascripts/index.js',
           path: path.resolve(__dirname, 'public')
       },
   };
   ```

3. 进入src文件夹，运行测试

   ```shell
   cd src 
   npx webpack
   ```

   运行结束之后，检查出口位置的`index.js`文件

4. 修改script脚本(修改后，只需执行`npm run build`即可)

   `package.json`

   ```json
     "scripts": {
       "build": "webpack"
     },
   ```

5. 为了监听文件变化，安装``onchange`

   ```shell
   npm install --save-dev onchange	
   ```

6. 配置`onchange`的脚本

   `package.json`

   ```json
     "scripts": {
       "watch":"onchange 'src/**/*.js' 'src/**/*.less' -- npm run build"
     },
   ```

   运行 `npm run watch` 便可以监听文件的变动并且自动编译了

7. 



























[项目文件夹]: http://91jean.oss-cn-hangzhou.aliyuncs.com/18-10-26/58575485.jpg



