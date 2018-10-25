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
    ```npm
    npm init -y
    ```
3. 在项目文件夹内安装Experss，安装完成后会出现一个**node_modules**的文件夹
    ```npm
    npm install express --save
    ```
4. 利用Express应用生成器快速创建一个应用的骨架
    - 全局安装
        ```npm
        npm install express-generator -g
        ```
    - 当前目录安装
        ```npm
        npm install express-generator --save-dev
        ```
5. 用express文件创建骨架
    ```shell
    ./node_modules/express-generator/bin/express-cli.js . -f -e  
    ```
6. 定位到项目文件夹，安装依赖
    ```npm
    npm install
    ```
7. 运行应用程序
    ```npm
    npm start
    ```
8. 然后在浏览器中加载 http://localhost:3000/ ，以访问该应用程序。
