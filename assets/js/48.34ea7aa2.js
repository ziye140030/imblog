(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{395:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"安装的dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装的dockerfile"}},[s._v("#")]),s._v(" 安装的dockerfile")]),s._v(" "),n("div",{staticClass:"language-dockerfile line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" jenkins/jenkins:2.332.3")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" > /etc/apt/sources.list "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& echo "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free"')]),s._v(" > /etc/apt/sources.list "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& echo "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free"')]),s._v(" >> /etc/apt/sources.list "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& echo "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free"')]),s._v(" >> /etc/apt/sources.list "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& echo "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free"')]),s._v(" >> /etc/apt/sources.list "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& apt update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& apt install sudo -y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& apt install vim -y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& apt install sshpass -y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& apt install python -y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n&& sed -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'27a\\jenkins ALL=(ALL)       NOPASSWD:ALL'")]),s._v(" /etc/sudoers")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" LANG C.UTF-8")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h1",{attrs:{id:"docker-compose文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose文件"}},[s._v("#")]),s._v(" docker-compose文件")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[s._v("version: '3'\nservices:\n  jenkins:\n    image: di.zzppjj.top/library/jenkins:v6\n    container_name: jenkins\n    restart: always\n    ports:\n      - '8000:8080'\n      - '50000:50000'\n    environment:\n      JAVA_OPTS: -Duser.timezone=Asia/Shanghai\n    extra_hosts:\n      - \"di.zzppjj.top:172.16.30.215\"\n    volumes:\n      - /data/jenkins/jenkins_home:/var/jenkins_home\n      - /etc/localtime:/etc/localtime:ro\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /usr/bin/docker:/usr/bin/docker  \n      - /data:/data\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);