(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{414:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("脚本如下")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BaseHTTPRequestHandler\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" urllib "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" parse\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" subprocess\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BaseHTTPRequestHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    secret_key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'Hi93d4cfa5863770f9a0c87d8,b85a4ebc7'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#secret_key = r'4AULgSBxBESAt3IaItH6C227ik4,fW5o6xr+1!7CfjJSCTf$5jxV)+w7iImrx@'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#secret_key = r'4AULgSBxBESAt3IaItH6C227ik4,fW5o6xr+1!7CfjJSCTf$5jxV)+w7iImrx@'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#commands = "iptables -A INPUT -s {}/32 -p tcp -m state --state NEW -m tcp --dport 443 -j ACCEPT && service iptables save"')]),s._v("\n    commands "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('r"""firewall-cmd --add-rich-rule="rule family="ipv4" source address="{}" port port="3306" protocol="tcp" accept" --zone=public --permanent && firew\nall-cmd --reload """')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("client_ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        commands "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("commands"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client_ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            process_result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("commands"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("stdout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("subprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PIPE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" shell"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" check"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            re_stdout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n            re_stderr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" process_result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stdout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                re_stdout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process_result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stdout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" process_result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stderr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                re_stderr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process_result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stderr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("re_stdout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" re_stderr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" subprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CalledProcessError "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Process Command Error."')]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#return subprocess.run(self.commands)")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("do_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parsed_path = parse.urlparse(self.path)")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#parsed_header = parse.urlparse(self.headers)")]),s._v("\n        client_ip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("address_string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#client_ip = self.headers['X-Real-IP']")]),s._v("\n        client_request_path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" client_request_path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("secret_key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send_error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        r_result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("process_command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client_ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r_result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send_response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send_header"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/plain; charset=utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("end_headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" HTTPServer\n    server "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" HTTPServer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0.0.0.0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29999")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" GetHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Starting server, use <Ctrl-C> to stop'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serve_forever"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);