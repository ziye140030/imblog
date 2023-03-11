(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{435:function(e,t,v){"use strict";v.r(t);var r=v(0),_=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("目前测试的windows server2016可以实现")]),e._v(" "),t("p",[e._v("配置如下")]),e._v(" "),t("p",[e._v("微软Server版操作系统默认是支持多用户登陆的，例如"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Fwww.zhulincat.com%2Ftags-18.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),t("OutboundLink")],1),e._v(" Server 2012，而Win10操作系统正常情况下是不允许用户同时远程的，即一个用户远程进来会把另一个用户踢掉，因此需要破解才能使得多个用户同时登陆远程桌面。Win10系统实现多用户远程需要以下两个步骤：")]),e._v(" "),t("p",[e._v("一、主机修改远程登录相关配置")]),e._v(" "),t("p",[e._v("1、新建用户")]),e._v(" "),t("p",[e._v("右键[此电脑] --\x3e [管理] --\x3e [计算机管理] --\x3e [本地用户和组]，右键单击[用户] --\x3e [新用户]，添加用户名和设置密码，勾选密码永不过期，然后点击[创建]；")]),e._v(" "),t("p",[e._v("2、添加远程桌面用户")]),e._v(" "),t("p",[e._v("右键[此电脑] --\x3e [属性] --\x3e [远程]，勾选“允许远程协助连接这台计算机”和“允许远程连接到此电脑”，然后点击[选择用户]，添加刚刚创建的用户，点击确定；")]),e._v(" "),t("p",[e._v("3、配置本地组策略")]),e._v(" "),t("p",[e._v("运行gpedit.msc，打开本地组策略编辑器，依次选择[计算机配置] --\x3e [管理模板] --\x3e [Windows组件] --\x3e [远程桌面服务] --\x3e [连接]展开，然后分别进行以下3项配置：")]),e._v(" "),t("p",[e._v("①配置“允许用户通过使用远程桌面服务进行远程连接”，选择：已启用；")]),e._v(" "),t("p",[e._v("②配置“限制连接的数量”，点击“已启用”，其中“允许的RD最大连接数”可以自己视情况而定；")]),e._v(" "),t("p",[e._v("③配置“将远程桌面服务用户限制到单独的远程桌面服务会话”，选择：已启用；")]),e._v(" "),t("p",[e._v("【温馨提示】：“将远程桌面服务用户限制到单独的远程桌面服务会话”这个配置比较重要，如果没启用，会导致断开一个远程登录连接后，再重新连接，会重新打开一个新的桌面。但是打开新的应用程序时，系统提示系统后台正在运行，之前断开前的应用程序却一个也找不到。因为同一个用户先后登陆远程系统，系统会分配不同的会话，从而导致你在一个远程桌面的操作都不见了，虽然你运行的一些程序并没有被系统关闭，但是你无法对他们进行管理。")]),e._v(" "),t("p",[e._v("二、破解远程登录用户限制")]),e._v(" "),t("p",[e._v("1、下载解除远程桌面多用户连接限制补丁，下载地址见最后附件；")]),e._v(" "),t("p",[e._v("2、解压下载好的RDPWrap压缩包后，进行以下操作：")]),e._v(" "),t("p",[e._v("①以管理员身份运行install.bat安装；")]),e._v(" "),t("p",[e._v("②拷贝rdpwrap.ini到C:\\Program Files\\RDP Wrapper目录下，并覆盖；")]),e._v(" "),t("p",[e._v("③重启电脑；")]),e._v(" "),t("p",[e._v("④运行RDPConf.exe，查看各个组件运行状态，状态全部为绿色就可以使用多用户远程桌面了。如果端口监听为Nothing listening, 或者出现Listening [not supported], 则需要运行一下update.bat；")]),e._v(" "),t("p",[e._v("⑤运行RDPCheck.exe，测试远程是否正常；")]),e._v(" "),t("p",[e._v("三、使用说明")]),e._v(" "),t("p",[e._v("1、以上方法对于Win10系统版本号是1803以下的大部分计算机是完全可行的，若操作系统版是1809及以上版本号，则行不通；")]),e._v(" "),t("p",[e._v("2、如果操作系统版本号是1809，该怎么操作呢？根据RDPWrap补丁的原理是：修改termsrv.dll和termsrv.dll.mui这两个远程服务文件，达到多用户远程登陆的目的。可以把其它操作系统上的termsrv.dll和termsrv.dll.mui这两个文件提取出来，然后替换本机上的文件，再运行RDPConf.exe查看各个组件运行状态。")]),e._v(" "),t("p",[e._v("● termsrv.dll文件路径：C:\\Windows\\System32")]),e._v(" "),t("p",[e._v("● termsrv.dll.mui文件路径：C:\\Windows\\System32\\zh-CN")]),e._v(" "),t("p",[e._v("原文章链接："),t("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Fwww.zhulincat.com%2Fpost%2F265.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.zhulincat.com/post/265.html"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("windows server 2019多用户")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.51cto.com/u_15127588/4319508",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Server 2019远程桌面服务配置和授权激活_51CTO博客_windows server 2019 远程桌面"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=_.exports}}]);