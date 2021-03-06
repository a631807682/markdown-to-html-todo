IProcess API Document
==================
![jwi-logo](http://www.jwis.cn/web_file/images/logo2.png "jwi-logo")  
> Version: v0.0.1  
ModifyTime: 2016-10-09 10:50:17  
Host:
https://market.cynomys.jwis.cn:3000/  

## 目录
* [接口访问说明](#接口访问说明)
* [错误处理](#错误处理)
* [维修单模块](#维修单模块)
  * [获取维修方案](#获取维修方案)
  * [保存维修方案指导书](#保存维修方案指导书)

[接口访问说明](#)
-----------------------
* 所有的请求，全部带上 `device-type` 请求头，值可为: `browser`, 或者 `mobile`
* 除`/api/public/common` 该控制器，其他所有的请求，都必须带上 `token`, 如果是浏览器，浏览器会自动把`token` 上传回服务器， 如果是手机，需要手动添加 一个 名为 `token` 的 `header`

[错误处理](#)
------------------------
* HTTP 协议定义的错误 (500-530)  
  500-530 : 通用服务器错误，Eg: 501， 502  
  500:服务器异常,ServerError  
* 自定义公共的错误(530-550)  
  530-550:自定义常规错误，Eg: ActionNotFound,ParameterError  
  531:ParameterError, 参数错误  
  532:ActionNotFound,为找到对应的Action  
  533:缺少token,TokenMissing  
  534:未找到控制器,ControllerNotFound  
  535:请求的URL不合法,RequestUrlNotMatch  
  536:请求的 content-type 类型不合法,ContentTypeNotCorrect  
* 自定义错误，只要同一接口中不重复即可(550-600)  
  550-600:自定义错误, 用户名或密码不正确，特定的业务错误  

[维修单模块](#)
-----------------

## 获取维修方案


### 路径
 - path：`/api/repairList/plan/getPlan`
 - method：GET

### 参数

#### propertyIds
 - 类型：string
 - 描述：（必填项）所选的维修属性编号集合
 - 参数示例：  
```
'24,27,30,32,34'
```
#### deviceNumber
 - 类型：int
 - 描述：（必填项）维修的数量

### 返回值
 - 类型：object
 - 示例：
```
{
  "_id": 72,
  "updatedAt": "2016-09-20T03:42:41.321Z",
  "createdAt": "2016-09-20T03:42:41.321Z",
  "taskTime": 9,
  "images": [
    27
  ],
  "properties": [
    24,
    27,
    30,
    32,
    34
  ],
  "content": [
    {
      "key": "人员资质要求",
      "value": "初级"
    },
    {
      "key": "设备",
      "value": "无"
    },
    {
      "key": "工装",
      "value": "无"
    },
    {
      "key": "工具",
      "value": "钳子"
    },
    {
      "key": "返修次数",
      "value": "同一位置返修1次，不同位置不累计"
    },
    {
      "key": "清洁要求",
      "value": "清楚返修位置的残留物，包括但并不仅限于焊锡丝、钳子"
    }
  ],
  "totleTime": 18
}
```

## 保存维修方案指导书

### 路径
 - path：`/api/repairList/plan/saveInstructionBook`
 - method：GET

### 参数

#### taskId
 - 类型：int
 - 描述：（必填项）任务编号

#### content 
 - 类型：arrary
 - 描述：（必填项）填写指导书内容
```
[
    {
      "key": "人员资质要求",
      "value": "初级"
    },
    {
      "key": "设备",
      "value": "无"
    },
    {
      "key": "工装",
      "value": "无"
    },
    {
      "key": "工具",
      "value": "钳子"
    },
    {
      "key": "返修次数",
      "value": "同一位置返修1次，不同位置不累计"
    },
    {
      "key": "清洁要求",
      "value": "清楚返修位置的残留物，包括但并不仅限于焊锡丝、钳子"
    }
  ]
```

#### taskTime
 - 类型：int
 - 描述：（必填项）任务耗时

#### deviceNumber
 - 类型：int
 - 描述：（必填项）维修数量
 
#### images
 - 类型：array
 - 描述：（必填项）示例图片编号
```
[1,4,7]
```

### 返回值
 - 类型：object
 - 示例：
```
{
  "_id": 72,
  "updatedAt": "2016-09-20T03:42:41.321Z",
  "createdAt": "2016-09-20T03:42:41.321Z",
  "state":0
}
```
 - state字段说明：
| 状态 | 含义 |
|------|:----:|
| 0    | 待处理|
| 1    | 通过|
| 2    | 不通过|

