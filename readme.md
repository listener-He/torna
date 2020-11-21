# TODO 

## 空间页面

- 空间信息 1
- 空间成员.查询。登录名，姓名，加入时间 1
- 空间成员.添加 1
- 空间成员.移除 1
- 空间.删除 1



## 项目页面

- 项目信息.查询 1
- 项目信息.修改 1
- 项目.删除 1

- 项目成员.查询 1
- 项目成员.添加 1
- 项目成员.移除 1


- 接口管理.接口预览，错误码 1
- 接口管理.导入swagger文档 1
- 接口管理.导入swagger文档,（记录导入url，方便刷新；标记是否swagger导入字段，可以刷新，doc_config表？）1
- 接口管理.新建模块+模块配置 1
- 接口管理.swagger模块刷新 1
- 接口管理.添加分类 1
- 接口管理.添加接口
- 接口管理.文档页展示，改为表格，且支持拖动排序 
- 接口管理.修改历史，文件对比
- 枚举字典

- 文档导出PDF（优先级低）


---

- 开放接口
- appKey/secret管理
- 模块token管理


## 权限管理



# 工程架构

- Web 层

主要是对访问控制进行转发，各类基本参数校验，或者不复用的业务简单处理等。

- Service 层

相对具体的业务逻辑服务层。

- Manager 层

通用业务处理层，它有如下特征： 1） 对第三方平台封装的层，预处理返回结果及转化异常信息； 2） 对 Service 层通用能力的下沉，如缓存方案、中间件通用处理； 3） 与 DAO 层交互，对多个 DAO 的组合复用。

- DAO 层

数据访问层，与底层 MySQL、Oracle、Hbase 等进行数据交互。

外部接口或第三方平台

包括其它部门 RPC 开放接口，基础平台，其它公司的 HTTP 接口。
