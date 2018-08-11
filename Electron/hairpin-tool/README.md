# 发卡工具箱

> 一个基于 electron-vue 开发的个人工具


#### 运行

``` bash

npm install

# serve with hot reload at localhost:8090
npm run dev

# build electron application for production
npm run build

```
>注意 修改 `src\renderer\utils\https` 的api接口地址

# 网易云音乐 API

网易云音乐 Node.js API service

## 环境要求

需要 NodeJS 6.0+ 环境

## 安装

```shell
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
$ npm install
```

## 运行

```shell
$ node app.js
```

服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:

```shell
$ set PORT=4000 && node app.js
```

## TODO

- [ ] 去掉不需要的页面
- [ ] 整理项目结构
- [ ] 重构侧边栏
    - [ ] 组件化
    - [ ] 收缩
- [ ] B 站
    - [ ] 
