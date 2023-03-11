(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{429:function(n,s,t){"use strict";t.r(s);var a=t(0),e=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("虽然可以修改操作系统下的hosts文件劫持dns解析，但是如果在多台计算机之间测试，就得一行行的复制到多个计算机中。更有甚者，如果测试接口地址是测试域名，在未越狱的iphone中就没办法测试了，未越狱的iphone修改不了hosts。而且hosts只支持A记录，没办法设置MX，PTR，CNAME……搭建一个dns服务器这些问题就解决了。")]),n._v(" "),s("p",[s("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2023/01/c61083c823f2ed94.png",alt:""}})]),n._v(" "),s("p",[n._v("1.安装")]),n._v(" "),s("p",[n._v("yum install bind-chroot")]),n._v(" "),s("p",[n._v("2.设置开机启动")]),n._v(" "),s("p",[n._v("systemctl enable named-chroot")]),n._v(" "),s("p",[n._v("3.配置bind")]),n._v(" "),s("p",[n._v("vim /etc/named.conf")]),n._v(" "),s("div",{staticClass:"language-roboconf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-roboconf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("options")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    listen-on port "),s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("53")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    listen-on-v6 port "),s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("53")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n    directory     "/var/named"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n    dump-file     "/var/named/data/cache_dump'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('db"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n    statistics-file "/var/named/data/named_stats'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('txt"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n    memstatistics-file "/var/named/data/named_mem_stats'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('txt"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("allow-query")]),n._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n    /* \n     - If you are building an AUTHORITATIVE DNS server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" do NOT enable recursion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("\n     - If you are building a RECURSIVE (caching) DNS server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" you need to enable \n       recursion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v(" \n     - If your recursive DNS server has a public IP address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" you MUST enable access \n       control to limit queries to your legitimate users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v(" Failing to do so will\n       cause your server to become part of large scale DNS amplification \n       attacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v(" Implementing BCP38 within your network would greatly\n       reduce such attack surface \n    */\n    recursion yes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("forwarders")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v(" 223"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    dnssec-enable no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    dnssec-validation no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n\n    /* Path to ISC DLV key */\n    bindkeys-file "/etc/named'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("iscdlv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('key"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n\n    managed-keys-directory "/var/named/dynamic"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n\n    pid-file "/run/named/named'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('pid"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n    session-keyfile "/run/named/session'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('key"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("logging")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        channel "),s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("default_debug")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v('\n                file "data/named'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('run"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n                severity dynamic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n\nzone "'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('" '),s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("IN")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    type hint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n    file "named'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('ca"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n\nzone "a'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('com" '),s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("IN")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    type master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n    file "a'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('zone"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n\nzone "0'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("168"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("192"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("in-addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('arpa" '),s("span",{pre:!0,attrs:{class:"token component variable"}},[n._v("IN")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    type master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n    file "192'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("168"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('zone"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\n\ninclude "/etc/named'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("rfc1912"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('zones"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v('\ninclude "/etc/named'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v('key"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br")])]),s("p",[n._v("默认配置修改这两项:")]),n._v(" "),s("p",[n._v("listen-on port 53 { any; }表示监听任何ip对53端口的请求")]),n._v(" "),s("p",[n._v("allow-query { any; }表示接收任何来源查询dns记录")]),n._v(" "),s("p",[n._v('zone "a.com" IN { type master; file "a.com.zone"; };')]),n._v(" "),s("p",[n._v("此段增加一个a.com域名的解析，具体解析规则在/var/named/a.com.zone里。")]),n._v(" "),s("p",[n._v('zone "0.168.192.in-addr.arpa" IN { type master; file "192.168.0.zone"; };')]),n._v(" "),s("p",[n._v("此段增加一个反向解析，即根据ip查域名（不需要的话可以不设置）")]),n._v(" "),s("p",[n._v("/var/named/a.com.zone文件内容，请注意named用户有读的权限")]),n._v(" "),s("p",[n._v("$TTL 1D @ IN SOA @ root.a.com. ( 0 ; serial 1D ; refresh 1H ; retry 1W ; expire 3H ) ; minimum\nNS @ A 192.168.0.111 www A 192.168.0.112 @ MX 10 mx.a.com. AAAA ::1")]),n._v(" "),s("p",[n._v("此段设置了")]),n._v(" "),s("p",[n._v("a.com的ip为192.168.0.111，")]),n._v(" "),s("p",[n._v("www.a.com的ip解析到192.168.0.112,")]),n._v(" "),s("p",[n._v("a.com的mx记录为mx.a.com")]),n._v(" "),s("p",[n._v("/var/named/192.168.0.zone文件内容，请注意named用户需要有读的权限")]),n._v(" "),s("p",[n._v("$TTL 86400 @ IN SOA localhost a.com. ( 2014031101 2H 10M 7D 1D ) IN NS localhost. 111 IN PTR a.com 112 IN PTR www.a.com.")]),n._v(" "),s("p",[n._v("此段设置了反查记录，即")]),n._v(" "),s("p",[n._v("192.168.0.111查询后得到的域名是a.com")]),n._v(" "),s("p",[n._v("192.168.0.222查询后得到的域名是www.a.com")]),n._v(" "),s("p",[n._v("最后，启动bind")]),n._v(" "),s("p",[n._v("systemctl start named-chroot")]),n._v(" "),s("p",[n._v("基本的DNS服务器搭建完成，并已经设置了一个a.com的域名解析，来测试一下。")]),n._v(" "),s("p",[n._v("windows右键网卡图标，打开网络和共享中心，更改适配器设置，右键网卡，属性，Internet 协议版本4(TCP/IPv4)，勾选使用下面的DNS服务器地址，首选DNS服务器填入服务器ip,类nix系统编辑/etc/resolv.conf修改nameserver为服务器ip。115.28.142.187为我的dns服务器IP，下面的结果都是基于115.28.142.187dns服务器返回的结果.")]),n._v(" "),s("p",[n._v("查询a.com的dns记录")]),n._v(" "),s("p",[n._v("a.com A记录")]),n._v(" "),s("p",[n._v("查询www.a.com的dns记录")]),n._v(" "),s("p",[n._v("www.a.com A记录")]),n._v(" "),s("p",[n._v("查询a.com的MX记录")]),n._v(" "),s("p",[n._v("a.com MX记录")]),n._v(" "),s("p",[n._v("查询www.a.com的PTR记录")]),n._v(" "),s("p",[n._v("www.a.com PTR记录")]),n._v(" "),s("p",[n._v("转载请注明："),s("a",{attrs:{href:"https://blog.feehi.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("飞嗨"),s("OutboundLink")],1),n._v(" » "),s("a",{attrs:{href:"https://blog.feehi.com/linux/678.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("CentOS 7搭建DNS服务器，bind安装配置"),s("OutboundLink")],1)]),n._v(" "),s("p",[n._v("例子域名配置：")]),n._v(" "),s("p",[n._v("$TTL 1D")]),n._v(" "),s("p",[n._v("@ IN SOA ns.vcenter.com. root (")]),n._v(" "),s("p",[n._v("0 ; serial")]),n._v(" "),s("p",[n._v("1D ; refresh")]),n._v(" "),s("p",[n._v("1H ; retry")]),n._v(" "),s("p",[n._v("1W ; expire")]),n._v(" "),s("p",[n._v("3H ) ; minimum")]),n._v(" "),s("p",[n._v("NS ns.vcenter.com.")]),n._v(" "),s("p",[n._v("ns A 172.16.30.243")]),n._v(" "),s("p",[n._v("@ A 172.16.30.211")]),n._v(" "),s("p",[n._v("www A 172.16.30.211")])])}),[],!1,null,null,null);s.default=e.exports}}]);