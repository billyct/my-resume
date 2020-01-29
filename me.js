const me = {
  contacts: [
    {
      key: '电话',
      value: '[15990096056](tel:15990096056)',
    },
    {
      key: '邮箱',
      value: '[billy_allen@126.com](mailto:billy_allen@126.com)',
    },
    {
      key: '微信 / QQ',
      value: '630356696',
    },
  ],
  hello: `
我是卢仡，一个喜欢编程的人，从读大学开始写代码一直到现在，

各种编程语言都有所尝试，现在常用 \`PHP（Laravel）\`、\`JavaScript（Node.js，React，Vue）\` 以及 \`Go\` 写程序，

崇尚 UNIX 思想，大道至简。
  `,
  links: {
    github: '//github.com/billyct',
  },
  resumes: [
    {
      title: '杭州智化科技有限公司',
      date: '2016 - 2020',
      content: `
      
负责公司所有项目开发相关的事情（因为公司只有一个开发人员 😂），开发了一些项目：

<br/>

* [REACHLinked](//reachlinked.com)
* [XiXisys](//xixisys.com)
* [XiXisys 企业版](//qiye.xixisys.com)
* [China-REACH](//china-reach.cn)
* [K-REACH](//k-reach.com)

<br/>

在产品沟通方面，最开始是使用 [Mockplus](//www.mockplus.com/)，但是因为也没有真正的产品经理，
所以很多时候，所谓的产品原型其实跟没有产品原型差不多，产品做到一半，很多功能细节做了又得推倒重来，
于是后面我的有效办法就是：我先问要做什么样的东西，然后帮他们梳理思路，接着把每一个点的细节都帮他们确认下来，
然后就开始编码，先跳过具体业务逻辑，把样子都设计好，然后再问要调整哪里，该调整的地方就调整，最后写业务代码。

<br/>

在设计上，因为没有设计师，所以基本上都是参考其他网站是怎么设计，然后再提取过来，
UI 框架也使用过 [Bootstrap](//getbootstrap.com/)、[Bulma](//bulma.io/)、
[Ant Design](//ant.design/)、[tailwindcss](//tailwindcss.com/)、
[Material-UI](//material-ui.com/)、[Blueprint](//blueprintjs.com/) 这些，
最后都将设计尽量保持「简单」。

<br/>

做项目的过程中，最麻烦的事情是处理数据，因为很多数据都是写爬虫脚本从各国网站抓下来，
常常会遇到奇怪的符号，接着还要在项目中常常更新，然后很多数据是需要跨项目使用的，
刚开始的时候会每个项目会各自都写一份，但随着时间那些「数据源网站」会更新他们自己的网站，原本正确的正则就不正确了，
那时候就需要把多个项目都更新，重复工作很多，于是后来就把这些服务都用 Go 重写，变成一个个小包，然后使用 AWS 的 Lambda 配合 API Gateway 来解决，
至于为什么是 Go，因为简单，容易写测试，也容易打包成二进制文件放到服务器和同事电脑上运行，当然自己喜欢也是一方面，
于是之后也将项目大部分比较常用的事情都进行这样的处理（比如生成 Word/Pdf，混合物的逻辑运算，给合作方的接口等等），
最终的效果是自己在项目的维护上轻松了许多，Bug 似乎也少了一些 🍺。

<br/>

如果总结一下的话，在此过程中学到的最重要的东西就是解决问题的时候要「简单」并且「合适」
      `,
    },
    {
      title: '成都彩程软件设计有限公司',
      date: '2015 - 2016',
      content: `
负责 [知人](//zhiren.com/) 产品的开发和维护。

<br/>

那时候有独立开发一个安卓 APP，用于拍照签到，对接「知人」系统，
用的是 [Cordova](//cordova.apache.org/) + [React](//reactjs.org/)，
他们说动画和原生开发的差不多，当时也很欣慰。

<br/>
      
最后离开那个公司是因为我被辞退了，原因是我的沟通能力不行，毕竟「远程办公」是很需要沟通的，
那时候我写的「文档」和「Issue」都是很烂的。
      `,
    },
    {
      title: '杭州随笔记网络技术有限公司',
      date: '2014 - 2015',
      content: `

负责 [滴答清单](//dida365.com) Web 端的开发和维护。

<br/>

在那里有独立开发「滴答清单」的论坛，是用 [Question2Answer](//www.question2answer.org/) 改的论坛，
换上设计师给的设计，托设计师的福，大家觉得还挺漂亮。

<br/>

在对网页端的优化上，因为当时 Boss 觉得整个 JS 加载有点慢，所以就对 JS 的一些模块异步加载，
那时候用的 [RequireJS](//requirejs.org/) 来模块化开发的，不能做到异步，
于是为了异步就换上 [Sea.js](//seajs.github.io/seajs/docs/)，因为 AMD 和 CMD 的规范不同，书写的代码格式也不同，
便写了一个 Gulp 脚本来先替换再打包，也算是把那些 JS 模块异步加载了。

<br/>

后来我辞职之后，有一次在那上班的设计师朋友问我 Mac 端有没有可能半透明一点，
因为那时候的 Mac 端是套了一个浏览器壳来做的，然后问了苹果开发说不行，
然后刚好那时候在研究 Swift 以及 [电脑屏幕弹幕](//github.com/happy-barrage) 的事情，
于是彻夜未眠写了一个 [Mac 版本](//github.com/billyct/dida-osx-test)，让左边栏半透明了一点，
然后白天的时候，他们 QQ 上来膜拜我，倒是让我觉得挺有自豪感的
      `,
    },

    {
      title: '其他',
      date: '其他时间都在「伪创业」和玩游戏',
      content: `
<h3 class="text-lg font-semibold">宝宝日志</h3>

第一次当爸爸的时候，写的记录宝宝拉屎拉尿的小程序，因为那时候找了一圈，都没有适合自己记录的 APP 或者小程序，
那些要么太复杂要么太简陋，于是便自己写了一个用来和老婆一起记录宝宝拉屎拉尿和喝奶 🐤🐤🐤

![宝宝日志](/img/bb-log.jpg)
      `,
    },
    {
      title: '浙江中医药大学',
      date: '2011 - 2013',
    },
    {
      title: '浙江越秀外国语学院',
      date: '2008 - 2011',
      content: 'Hello World!'
    }
  ],
}

export default me
