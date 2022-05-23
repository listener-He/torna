import { BaseTranslator } from '../base'

// Mapping
const MAPPING = {
  'ok': '确定',
  'cancel': '取消',
  'home': '首页',
  'adminManage': '后台管理',
  'previewModel': '浏览模式',
  'helpCenter': '帮助中心',
  'userMsgReadAll': '全部标记已读',
  'userMsgCenter': '消息中心',
  'userMsgNoMsg': '暂没有新消息',
  'viewDoc': '查看文档',
  'setRead': '标记已读',
  'userCenter': '个人中心',
  'logout': '注销',
  'spaceList': '空间列表',
  'createSpace': '创建空间',
  'isComposeSpace': '是否聚合空间',
  'composeSpaceTip': '将其它空间中的接口聚合进来，统一展示',
  'creator': '创建人',
  'createTime': '创建时间',
  'spaceName': '空间名称',
  'spaceAdmin': '空间管理员',
  'dlgCancel': '取 消',
  'dlgSave': '保 存',
  'notEmpty': '不能为空',
  'createSuccess': '创建成功',
  'filterWithUsername': '可根据昵称/邮箱筛选',
  'selectUser': '请选择用户',
  'projectList': '项目列表',
  'spaceInfo': '空间信息',
  'spaceMember': '空间成员',
  'openUser': '开放用户',
  'apiDoc': '接口文档',
  'projectInfo': '项目信息',
  'projectMember': '项目成员',
  'createProject': '创建项目',
  'noProject': '暂无项目',
  'privateProject': '私有项目',
  'projectDesc': '项目描述',
  'projectName': '项目名称',
  'visitPermission': '访问权限',
  'private': '私有',
  'privateDesc': '私有：只有项目内的成员才能访问',
  'public': '公开',
  'publicDesc': '公开：空间内的用户都能访问',
  'addSuccess': '添加成功',
  'deleteSpace': '删除空间',
  'deleteSpaceConfirm': '确认要删除该空间吗',
  'deleteSuccess': '删除成功',
  'tip': '提示',
  'loginAccount': '登录账号',
  'password': '密码',
  'passwordConfirm': '确认密码',
  'loginSubmit': '登 录',
  'search': '查询',
  'addMember': '添加成员',
  'member': '成员',
  'me': '我',
  'role': '角色',
  'joinTime': '加入时间',
  'operation': '操作',
  'removeConfirm': '确定要移除 {0} 吗？',
  'remove': '移除',
  'addUser': '添加用户',
  'user': '用户',
  'pleaseSelect': '请选择',
  'removeSuccess': '移除成功',
  'updateSuccess': '修改成功',
  'visitor': '访客',
  'developer': '开发者',
  'createAccount': '新建账号',
  'applicant': '申请人',
  'status': '状态',
  'enable': '启用',
  'disable': '禁用',
  'addTime': '添加时间',
  'enableAccountConfirm': '确定要启用此账号吗？',
  'disableAccountConfirm': '确定要禁用此账号吗？',
  'resetSecretConfirm': '确定要重置secret吗？',
  'resetSecret': '重置secret',
  'operateSuccess': '操作成功',
  'notEmptyLengthLimit': '不能为空且长度在{0}以内',
  'apiList': '接口列表',
  'dictionaryManagement': '字典管理',
  'moduleSetting': '模块配置',
  'shareManagement': '分享管理',
  'createApi': '新建接口',
  'createFolder': '新建分类',
  'apiFilter': '过滤: 支持ID、名称、路径',
  'refreshTable': '刷新表格',
  'export': '导出',
  'docName': '文档名称',
  'hidden': '隐藏',
  'modifierName': '最后修改人',
  'updateTime': '修改时间',
  'createDoc': '添加文档',
  'preview': '预览',
  'update': '修改',
  'more': '更多',
  'copy': '复制',
  'delete': '删除',
  'refreshSuccess': '刷新成功',
  'inputFolderMsg': '请输入分类名称',
  'updateFolderTitle': '修改分类',
  'newFolderTitle': '新建分类',
  'deleteConfirm': '确定要删除 {0} 吗？',
  'exportDoc': '导出文档',
  'exportAs': '导出形式',
  'singlePage': '单页',
  'multiPage': '多页',
  'fileType': '格式',
  'selectDoc': '选择文档',
  'allDocs': '全部文档',
  'partDocs': '部分文档',
  'dlgExport': '导 出',
  'pleaseCheckDoc': '请勾选文档',
  'filterNameUrl': '输入名称或URL进行过滤',
  'appendShare': '追加分享',
  'appendShareTip': '勾选：此分类后续添加新文档也可以访问',
  'newDict': '添加字典',
  'newItem': '添加项',
  'name': '名称',
  'type': '类型',
  'value': '值',
  'description': '描述',
  'categoryName': '分类名称',
  'lengthLimit': '长度不能超过{0}',
  'updateDictCategory': '修改字典分类',
  'updateDict': '修改字典',
  'moduleList': '模块列表',
  'newModule': '新建模块',
  'importSwaggerDoc': '导入Swagger文档',
  'importPostmanDoc': '导入Postman文档',
  'syncSwaggerDoc': '同步Swagger文档',
  'inputModuleName': '请输入模块名称',
  'moduleName': '模块名称',
  'syncSuccess': '同步成功',
  'importSwaggerPlaceholder': '输入URL，如：http://xxx:8080/swagger/doc.json',
  'basicAuth': 'Basic认证',
  'optionalUsername': '选填，username',
  'optionalPassword': '选填，password',
  'dlgImport': '导 入',
  'errorUrl': 'URL格式不正确',
  'importSuccess': '导入成功',
  'chooseFile': '选择文件',
  'importPostmanTip': '选择Postman导出文件(Collection v2.1)',
  'pleaseUploadFile': '请上传文件',
  'onlyChooseOneFile': '只能选择一个文件',
  'deleteModule': '删除模块',
  'commonHeader': '公共请求头',
  'commonRequest': '公共请求参数',
  'commonResponse': '公共返回参数',
  'debugEnv': '调试环境',
  'swaggerSetting': 'Swagger设置',
  'deleteModuleConfirm': '确认要删除该模块吗？',
  'add': '添加',
  'errorParam': '格式错误，支持大小写英文、数字、-、下划线',
  'newHeader': '新增Header',
  'updateHeader': '修改Header',
  'paramName': '参数名',
  'example': '示例值',
  'addChildNode': '添加子节点',
  'isDataNode': '是否数据节点',
  'addParam': '新增参数',
  'updateParam': '修改参数',
  'addChildTitle': '新增参数 - {0}子节点',
  'linkDict': '关联字典',
  'helpBook': '帮助手册',
  'addEnv': '新增环境',
  'updateEnv': '修改环境',
  'envName': '环境名称',
  'baseUrl': '基本路径',
  'envNamePlaceholder': '如：测试环境',
  'baseUrlPlaceholder': '如：http://10.0.1.31:8080',
  'whatsOpenApi': 'OpenAPI的作用',
  'whatsOpenApiText': '可通过接口调用方式操作文档，第三方App以此来更新文档内容。',
  'useStep': '使用步骤',
  'useStep1': '1、项目依赖SDK',
  'useStep2': '2、配置请求参数',
  'requestUrl': '请求路径',
  'refreshTokenConfirm': '确定要刷新token吗？老token将不可用',
  'refreshToken': '刷新token',
  'openApiLink': 'OpenAPI接口文档',
  'newShare': '创建分享',
  'shareUrl': '分享链接',
  'shareDoc': '分享文档',
  'shareStyle': '分享形式',
  'encryption': '加密',
  'deleteRowConfirm': '确定要删除此记录吗',
  'remark': '备注',
  'optional': '选填',
  'wholeModule': '（整个模块）',
  'updateShare': '修改分享',
  'look': '查看',
  'pwdShow': '密码',
  'remarkShow': '【备注】',
  'projectAdmin': '项目管理员',
  'updateProject': '修改项目',
  'deleteProject': '删除项目',
  'deleteProjectConfirm': '确认要删除该项目吗？',
  'accountInfo': '账号信息',
  'baseInfo': '基本信息',
  'updatePassword': '修改密码',
  'baseSetting': '基本设置',
  'subscription': '关注列表',
  'subscribeApi': '关注接口',
  'messageCenter': '消息中心',
  'myMessage': '我的消息',
  'nickname': '昵称',
  'email': '邮箱',
  'regTime': '注册时间',
  'saveSuccess': '保存成功',
  'oldPassword': '旧密码',
  'newPassword': '新密码',
  'newPasswordConfirm': '确认新密码',
  'dlgUpdate': '修 改',
  'notSamePassword': '两次密码不一致',
  'updatePasswordSuccess': '修改成功，请重新登录',
  'mySubscribeApi': '我关注的接口',
  'apiName': '接口名称',
  'cancelSubscribeConfirm': '确定要取消关注 {0} 吗？',
  'cancelSubscribe': '取消关注',
  'content': '内容',
  'unread': '未读',
  'read': '已读',
  'pushTime': '推送时间',
  'addNewUser': '创建新用户',
  'superAdmin': '超级管理员',
  'origin': '来源',
  'normal': '正常',
  'inactive': '未激活',
  'resetPasswordConfirm': '确定要重置 {0} 密码？',
  'resetPassword': '重置密码',
  'disableConfirm': '确定要禁用 {0} ？',
  'enableConfirm': '确定要启用 {0} ？',
  'suggestUseEmail': '建议使用邮箱',
  'suggestUseRealName': '建议使用姓名或花名',
  'isSuperAdmin': '是否超级管理员',
  'selfReg': '自主注册',
  'thirdPartyLogin': '第三方登录',
  'backendAdd': '后台创建',
  'unknown': '未知',
  'resetPasswordSuccess': '新密码：{0}',
  'resetSuccess': '重置成功',
  'addUserSuccess': '登录账号：{0}\n密码：{1}',
  'docManagement': '文档管理',
  'userManagement': '用户管理',
  'docTitle': '文档标题',
  'docDesc': '接口描述',
  'pathVariable': 'Path参数',
  'sourceFolder': '所属分类',
  'empty': '无',
  'isShow': '是否显示',
  'requestHeader': '请求头',
  'importHeader': '导入Header',
  'useCommonHeader': '使用公共请求头',
  'requestParams': '请求参数',
  'newQueryParam': '添加Query参数',
  'importQueryParam': '导入Query参数',
  'newBodyParam': '添加Body参数',
  'importBodyParam': '导入Body参数',
  'useCommonParam': '使用公共请求参数',
  'isRootArray': '根数组',
  'responseParam': '响应参数',
  'newResponseParam': '添加响应参数',
  'importResponseParam': '导入响应参数',
  'useCommonResponse': '使用公共返回参数',
  'errorCode': '错误码',
  'newErrorCode': '添加错误码',
  'errorDesc': '错误描述',
  'solution': '解决方案',
  'currentUpdateRemark': '本次修改备注',
  'back': '返回',
  'save': '保存',
  'importJson': '导入json',
  'importByQueryParam': 'Query参数导入',
  'importByBulk': 'Bulk模式导入（Postman Bulk Edit）',
  'importResponseParamTip': '输入完整的响应结果，可填测试数据。【注意敏感信息，请勿导入线上数据】',
  'pleaseInputJson': '请输入JSON',
  'jsonType': 'json格式',
  'require': '必填',
  'required': '必填',
  'maxLength': '最大长度',
  'clickRestore': '点击恢复',
  'noData': '无数据',
  'clickSubscribe': '点击关注',
  'exportMarkdown': '导出markdown',
  'exportHtml': '导出html',
  'createdOn': '创建于',
  'lastModifiedBy': '最后修改于',
  'noHeader': '无Header',
  'requestExample': '请求示例',
  'responseExample': '响应示例',
  'emptyErrorCode': '无错误码',
  'updateRemark': '修改备注',
  'subscribeSuccess': '关注成功',
  'unsubscribeSuccess': '取消关注成功',
  'apiInfo': '接口信息',
  'debugApi': '调试接口',
  'method': '方法',
  'invokeParam': '调用参数',
  'returnResult': '返回结果',
  'proxyForward': '代理转发',
  'proxyForwardOn': '勾选：服务端代理转发请求',
  'proxyForwardOff': '取消勾选：页面使用axios请求，需要处理跨域',
  'debugSend': ' 发 送 ',
  'noDebugEvnTip1': '尚未指定调试环境，请前往',
  'noDebugEvnTip2': '进行添加。',
  'noDebugEvnTip3': '尚未提供调试环境',
  'referenceDoc': '参考文档',
  'uploadMultiFiles': '上传多个文件',
  'text': '文本',
  'file': '文件',
  'sendErrorTip': '发送失败，请按F12查看Console',
  'parseError': '格式转换错误',
  'emptyParam': '无参数',
  'clickSee': '点击查看',
  'checkDict': '查看字典',
  'elType': '元素类型：{0}',
  'no': '否',
  'yes': '是',
  'newConfig': '新建配置',
  'helpDoc': '帮助文档',
  'copyCurrentConfig': '复制当前配置',
  'deleteConfigConfirm': '确定要当前配置删除吗？',
  'mockUrl': 'Mock地址',
  'showAfterSave': '保存后生成',
  'param': '参数',
  'response': '响应',
  'responseDelay': '延迟响应',
  'responseHeader': '响应Header',
  'responseContent': '响应内容',
  'mockScript': 'Mock脚本',
  'run': '运行',
  'baseOnMockjs': '基于mockjs',
  'runResult': '运行结果',
  'runSuccess': '运行成功',
  'runError': '运行错误',
  'noResultTip': '无数据返回，是否缺少return？',
  'mockScriptError': 'Mock脚本错误',
  'pleaseFinishForm': '请完善表单',
  'maintainer': '维护人',
  'managementModel': '管理模式',
  'document': '文档',
  'systemSetting': '系统设置',
  'language': '语言',
  'docTabView': '标签导航',
  'nickEmail': '昵称/邮箱',
  'visitStyle': '访问方式',
  'updateName': '修改名称',
  'visitUrl': '访问链接',
  'composeSpace': '聚合空间',
  'btnOk': ' 确 定 ',
  'visitPassword': '访问密码',
  'elementType': '元素类型',
  'rootArrayTip': 'Body是一个数组对象，如',
  'mustArray': '必须是数组',
  'arrayMustHasElement': '数组必须有元素',
  'objectArrayReqTip': '接收数组对象，元素内容见表格定义',
  'objectArrayRespTip': '返回数组对象，元素内容见表格定义',
  'supportHtml': '支持html',
  'newParam': '添加参数',
  'importParam': '导入参数',
  'isPublic': '是否公开',
  'debugEnvPublicTip': '公开：聚合页面显示公开的调试路径',
  'orderIndex': '排序值',
  'expand': '展开',
  'collapse': '收起',
  'composeProject': '聚合项目',
  'setting': '设置',
  'lockDoc': '锁定文档',
  'lockOn': '锁定',
  'unlock': '解锁',
  'lockDocDesc': '锁定后不被推送修改',
  'nameValue': '字面量(值)',
  'userLogin': '用户登录',
  'signUp': '注册新账号',
  'goLogin': '去登陆',
  'forgetPwd': '忘记密码',
  'plzInputLoginAccount': '请输入登录账号',
  'plzInputPassword': '请输入密码',
  'askSuperAdminRestPwd': '询问超级管理员重置密码',
  'accountLogin': '账号登录',
  'ldapLogin': 'LDAP登录',
  'thirdpartyLogin': '第三方登录',
  'useSmartDoc': '使用smart-doc推送',
  'moreOperation': '更多操作',
  'copySuccess': '复制成功',
  'deprecated': '已废弃',
  'closeOthers': '关闭其他',
  'closeAll': '关闭全部',
  'closeLeft': '关闭左侧',
  'closeRight': '关闭右侧',
  'supportMarkdownAndHtml': '支持markdown和html'

}

export class Translator extends BaseTranslator {
  getMapping() {
    return MAPPING
  }
  addMapping(anotherMapping) {
    Object.assign(this.getMapping(), anotherMapping)
  }
}

