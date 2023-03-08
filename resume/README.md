# web 前端个人简历

#### 介绍

web 前端个人简历：一个追梦在前端路上的小白

#### 相关技术

- particles.js 粒子插件
- Handlebars.js 模板引擎

#### 在线预览

[web 前端个人简历：一个追梦在前端路上的小白](https://coderwy1024.github.io/resume/)

#### 使用说明

1.  修改 src/config.js 内容作为配置文件

```
export default {
  // 首页部分
  page1: {
    titleEn:'Hello,I`m WeiYi', //英文标题
    title: '一个追梦在前端路上的小白',//中文标题
  },
  // About Me部分
  page2:{
    authorImg:'xxx.jpg',// 作者头像
    xinhui:'...',// 幸会
    qiuzhi:'...',// 求职意向
    guanyuwo:'...'// 关于我
  },
  // My Services部分
  page3:[{
    icon:'icon-xxx', // 图标
    title:'...', // 标题
    msg:['...']//介绍
  },
 ...],
  // My Mastering部分
  page4:{
    // 我的历程
    course:[{
      date:'2020/6——毕业',// 时间
      desc:{// 经历
        title:'...',
        list:['...']
      }
    },
 ...],
    // 我的拓展技能掌握
    singlelist:[{title:'...',text:'...'}],
    // 我的基本技能掌握
    proresslist:[{
      title:'..',//例：HTML
      value:'..'//例：85%
    },
 ...]
  },
  // My Production部分
  page5:[{
    title:'...',//作品名称
    content:'...',//作品名称
    image:'...',//作品图片
    href:'...'//作品地址
  },
 ...],
  // 结尾页部分
  page6:{
    github:'...',//github链接
    bili:'...',//B站链接
    email:'Mailto:xxx@qq.com?Subject=邮箱标题&Body=邮箱内容！',//email
    zhihu:'...',//知乎链接
    weixin:"<img style='width:120px' src='...' alt='加载失败'>",//微信弹窗
    qq:"<img style='width:120px' src='...' alt='加载失败'>"//QQ弹窗
  }
}
```

2.  运行 index.html 文件访问本地服务 (！！注意：因为 file 跨域问题，本地运行必须以服务器方式启动项目！)
