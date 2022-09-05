(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{185:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("For CentOS6/CloudLinux6, run the following command:")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("For all other operating systems, run the following command:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("To uninstall Imunify360, run:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("and proceed to the directory with the script.")]),t._v(" "),s("p",[t._v("For CloudLinux OS, please run the following commands:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("Starting from Imunify360 v.4.10, if you need to disable Imunify360 then you need to disable updates as well by editing cron file and comment out the update command.")]),t._v(" "),s("p",[t._v("CloudLinux OS/CentOS")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Ubuntu")]),t._v(" "),t._m(12),t._v(" "),s("Disqus")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"uninstall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uninstall","aria-hidden":"true"}},[this._v("#")]),this._v(" Uninstall")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"how-to-stop-imunify360"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-stop-imunify360","aria-hidden":"true"}},[this._v("#")]),this._v(" How to stop Imunify360")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("service imunify360 stop\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("systemctl stop imunify360\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"how-to-uninstall-imunify360"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-uninstall-imunify360","aria-hidden":"true"}},[this._v("#")]),this._v(" How to uninstall Imunify360")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("bash i360deploy.sh --uninstall\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you have already deleted "),e("span",{staticClass:"notranslate"},[e("code",[this._v("i360deploy.sh")])]),this._v(" then download it by running:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("wget http://repo.imunify360.cloudlinux.com/defence360/i360deploy.sh\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/usr/sbin/cagefsctl  --force-update\n/usr/sbin/cagefsctl  --remount-all\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("to remount "),e("span",{staticClass:"notranslate"},[this._v("CageFS")]),this._v(" and remove files from user's local directories as after uninstalling these files are not removed automatically and can generate errors to Apache log.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"how-to-disable-updates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-disable-updates","aria-hidden":"true"}},[this._v("#")]),this._v(" How to disable updates")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/etc/cron.daily/imunify360.cron\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/etc/cron.daily/imunify360-firewall\n")])])])])}],!1,null,null,null);e.default=n.exports}}]);