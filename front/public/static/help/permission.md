# 权限介绍

Torna的页面结构主要分为三大块，空间、项目、模块，如下图所示：

![结构](static/help/images/arc.png "arc.png")


## 空间

空间是用户的活动区域，所有用户行为必须在某个空间下进行，用户要访问某个空间必须加入到这个空间中来。

一个空间可以理解为是一个部门，比如`研发一部`、`研发二部`为两个独立的空间

新用户注册后会为其创建一个默认空间。

在空间下，存在三种角色：空间管理员、开发者、访客，外加一个特殊角色超级管理员，每个角色权限关系如下表所示：

|  角色   | 访问公开项目 | 访问私有项目 | 创建项目   | 编辑空间  | 管理空间成员 |
|  ----  | ----  | ----  | ----  | ----  | ---- |
| 超级管理员  | √  | √ | √ | √ | √ | 
| 空间管理员  | √ | √ | √ |√ | √ | 
| 开发者  | √ | 加入后查看 | √ |  |   |
| 访客  | √ | 加入后查看|  |  |   |

一般来说，空间管理员相当于部门经理，当有新人入职后，部门经理把新人加到空间当中，然后由项目管理员负责把新人拉入到对应的项目中。

## 项目

进入到空间之后，展示的是空间下的项目，点击项目进入到具体的项目当中。

在项目中也分为三种角色：项目管理员、开发者、访客，外加一个特殊角色超级管理员，每个角色权限关系如下表所示：

|  角色   | 浏览文档 | 编辑项目信息 |  管理模块  | 管理接口 | 管理项目成员   |
|  ----  | ----  | ----  | ----  | ----  | ---- |
| 超级管理员  | √  | √ | √ | √ | √ | 
| 空间管理员 | √ | √  | √ | √ | √ | 
| 开发者 | √ | √  |  √ |   |
| 访客 | √ |    |  |  |   | 

