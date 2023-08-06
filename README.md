# 注意事项：

**必须先运行后端（5000），后运行前端（8080）**

版权：哈山·吾斯曼 

# 前端

my-vue文件

**启动方式**  进入my-vue 文件夹 打开cmd  输入**npm run serve**

技术栈：Vue  elementUI  Vuex 

## 网站功能

| 功能             | 描述                                     |
| ---------------- | ---------------------------------------- |
| 用户注册与登录   | 用户可以注册新账号并登录系统             |
| 用户增删改查内容 | 用户可以创建、删除、编辑和查看内容       |
| 用户点赞与评论   | 用户可以给内容点赞和发表评论【暂不开放】 |
| 展示热榜         | 系统可以展示当前热门的内容               |
| 分类内容         | 内容可以按照分类进行分类和展示           |
| 私密             | 个人不公开【暂不开发】                   |



## 网站页面

| 页面名称         | 描述                                   |
| ---------------- | -------------------------------------- |
| 首页             | 展示热门内容和分类导航                 |
| 注册页面         | 用户注册新账号的页面                   |
| 登录页面         | 用户登录系统的页面                     |
| 用户主页         | 展示用户个人信息和已发布的内容列表     |
| 内容详情页面     | 展示单篇内容的详细信息、评论和点赞功能 |
| 内容编辑页面     | 用户编辑已发布内容的页面               |
| 内容发布页面     | 用户创建新内容的页面                   |
| 分类页面         | 展示不同分类下的内容列表               |
| 用户设置页面     | 用户可以修改个人信息和账号设置         |
| 私密想法记录页面 | 用户可以记录和管理私密想法的页面       |

## 网站功能展示

首页

![image-20230624124121518](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124121518.png)

注册：

![image-20230624124153166](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124153166.png)

![image-20230624124319487](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124319487.png)

登录：

![image-20230624124515638](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124515638.png)

![image-20230624124525578](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124525578.png)

文章：

![image-20230624124548511](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124548511.png)

![image-20230624124556889](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124556889.png)

![image-20230624124626423](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124626423.png)

发布：

![image-20230624124708428](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124708428.png)

![image-20230624124811136](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124811136.png)

修改：

![image-20230624124837937](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124837937.png)

![image-20230624124900164](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124900164.png)

删除：

![image-20230624125220686](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125220686.png)

我的：

![image-20230624124943225](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124943225.png)

![image-20230624124952346](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624124952346.png)

联系（暂不开发）

![image-20230624125017097](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125017097.png)

# 后端

my-node文件

**启动方式**： 进入 my-node 文件夹 打开cmd  输入**npm run test**

技术栈：Koa.js （后端node框架）MySQL

| 功能             | 描述                                         |
| ---------------- | -------------------------------------------- |
| 用户注册与登录   | 用户增 查                                    |
| 用户增删改查内容 | 创建、删除、编辑和查看内容                   |
| 用户点赞与评论   | 内容点赞和发表评论（增，查，删）【暂不开发】 |
| 展示热榜         | 系统可以展示当前热门的内容（查）             |
| 分类内容         | 内容可以按照分类进行分类和展示（查）         |
| 私密             | 个人不公开（增，查）【暂不开发】             |

## 后端API接口

![image-20230624125530339](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125530339.png)

![image-20230624125511167](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125511167.png)

## 后端代码展示

![image-20230624125541672](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125541672.png)

![image-20230624125550615](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125550615.png)

![image-20230624125557498](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125557498.png)

![image-20230624125606947](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125606947.png)





## 数据库设计

| 表名   | 列名             |
| ------ | ---------------- |
| 用户表 | id               |
|        | 账号             |
|        | 密码             |
| 内容表 | 文章id           |
|        | 文章内容         |
|        | 所属分类         |
|        | 文章时间         |
|        | 文章作者id       |
|        | 点赞数           |
| 评论表 | 评论id           |
|        | 评论所属的文章id |
|        | 评论者id         |
|        | 内容             |
|        | 时间             |
| 热榜表 | 文章id           |
| 分类表 | 分类id           |
|        | 内容             |



## 数据库展示

![image-20230624130841113](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624130841113.png)



![image-20230624125830247](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125830247.png)



![image-20230624125851618](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125851618.png)





![image-20230624125909419](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230624125909419.png)

​	