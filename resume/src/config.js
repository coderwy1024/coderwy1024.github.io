export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m WangYi', //英文标题
    title: '一个追梦在前端路上的小白' //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'page1.jpg', // 作者头像
    xinhui: '我叫王漪，是一名应届毕业生。', // 幸会
    qiuzhi: '前端开发', // 求职意向
    guanyuwo: '掌握了前端js、html、css基本技术和Vue框架、UI框架，nodejs等等。希望可以和大家一起学习，共同进步！' // 关于我
  },
  // page3部分
  page3: [
    {
      icon: 'icon-tubiao-',
      title: 'UI设计',
      msg: ['PS切图、界面排版']
    },
    {
      icon: 'icon-diannao', // 图标
      title: '网页制作', // 标题
      msg: ['响应式页面', 'css、scss动画效果'] //介绍
    },
    {
      icon: 'icon-qianbi1',
      title: '前端功能',
      msg: ['JS完成常见的交互功能', '用Axios读取后台数据且渲染']
    },
    {
      icon: 'icon-shouji',
      title: '框架',
      msg: ['vue框架', 'UI框架、express框架、mysql']
    }
  ],
  // page4部分
  page4: {
    // 我的历程
    course: [
      {
        date: '2019/9——至今', // 时间
        desc: {
          // 经历
          title: '黄河科技学院',
          list: ['英语四级证书', '大学生英语竞赛优秀奖', '三等奖学金两次']
        }
      }
    ],
    // 我的拓展技能掌握
    singlelist: [
      {
        title: 'CSS',
        text: '了解'
      },
      {
        title: 'HTML',
        text: '掌握'
      },
      {
        title: 'JavaScript',
        text: '掌握'
      },
      {
        title: 'scss',
        text: '掌握'
      }
    ],
    // 我的基本技能掌握
    proresslist: [
      {
        title: 'CSS',
        value: '60%'
      },
      {
        title: 'HTML',
        value: '90%'
      },
      {
        title: 'JS',
        value: '90%'
      },
      {
        title: 'NodeJs',
        value: '60%'
      },
      {
        title: 'sql',
        value: '80%'
      }
    ]
  },
  // page5部分
  page5: [
    {
      title: '情感分析系统',
      content: 'Vue,NodeJ的PC端项目',
      image: 'box5.jpg',
      href: 'https://way1024.github.io/'
    },
    {
      title: '个人博客',
      content: 'express，node，valine',
      image: 'box2.png',
      href: 'https://junk1024.github.io/'
    },
    {
      title: '个人简历',
      content: 'html,css,jq,bootsrap搭建个人简历网站',
      image: 'box4.png',
      href: ''
    }
  ],
  // page6部分
  page6: {
    github: 'https://github.com/junk1024',
    bili: '',
    email: '',
    zhihu: '',
    weixin: "<img style='width:120px' src='https://coderwy1024.github.io/resume/src/img/weix.jpg' alt='加载失败'>",
    qq: "<img style='width:120px' src='https://coderwy1024.github.io/resume/src/img/qq.jpg' alt='加载失败'>"
  }
}
