(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{265:function(t,e,s){"use strict";s.r(e);var a=s(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v('Sometimes it\'s desired to change the WebShield "Server" header to something that suits certain requirements.')]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The CAPTCHA is a feature intended to distinguish human from machine input and protect websites from the spam and different types of automated abuse. Imunify360 uses "),s("a",{attrs:{href:"https://www.google.com/recaptcha/intro/invisible.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("reCAPTCHA"),s("OutboundLink")],1),t._v(" service.")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("There are two layers in CAPTCHA behavior:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("It is also possible to enable the invisible reCAPTCHA via the Imunify360 "),s("router-link",{attrs:{to:"/dashboard/#settings"}},[s("span",{staticClass:"notranslate"},[t._v("Settings")]),t._v(" page")]),t._v(". With the invisible reCAPTCHA enabled, a human user is not required to go through human confirmation - the process will pass under the hood and a user will be redirected to the website. In case if invisible reCAPTCHA failed to detect if a user is a human or not, then visible reCAPTCHA appears.")],1),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("The CAPTCHA is always on guard of the websites and checks the activity of each IP. With the help of reCAPTCHA it blocks bots and protects websites from spam and abuse. To learn more about reCAPTCHA follow the "),s("a",{attrs:{href:"https://www.google.com/recaptcha/intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("The reCaptcha supports localization. Depending on user’s browser settings, reCaptcha will use the browser default language and allow to change it:")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("There are three files:")]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("To find information on supported browsers follow this link "),s("a",{attrs:{href:"https://support.google.com/recaptcha/answer/6223828",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://support.google.com/recaptcha/answer/6223828"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("A user can change the text of captcha messages for the supported languages. Note that adding custom language is not supported.")]),t._v(" "),s("p",[t._v("To change the text of the Imunify360 Captcha and update the localizations text, please do the following:")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("If a server owner has his own Google reCAPTCHA keys (both private and public), he may use them instead of the default CloudLinux keys.")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("Then reload WebShield.")]),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("See "),s("router-link",{attrs:{to:"/dashboard/#invisible-captcha"}},[t._v("how to setup invisible CAPTCHA")]),t._v(".")],1),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("Imunify360 admin should specify reCAPTCHA keys for the server since we’re planning to completely remove embedded reCAPTCHA keys in the future versions.")]),t._v(" "),s("p",[t._v("In this article, you can find a step by step guide on how to set up a custom site and secret keys for your Imunify360 server.")]),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("Public and secret reCAPTCHA keys are required for integration between Imunify360 and Google reCAPTCHA service.")]),t._v(" "),s("p",[t._v("The site key will be publicly available and shown on pages along with reCAPTCHA widget or Invisible CAPTCHA, whereas the secret key will be stored for intercommunication between the backend of Imunify360 and Google service.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Note: Due to the captcha rate limit we recommend using different reCAPTCHA keys for each server.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/recaptcha/docs/faq#are-there-any-qps-or-daily-limits-on-my-use-of-recaptcha",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google’s quotation"),s("OutboundLink")],1),t._v(":\nIf you wish to make more than 1k calls per second or 1m calls per month, you must use reCAPTCHA Enterprise or fill out this form and wait for an exception approval.")])]),t._v(" "),t._m(27),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open "),s("a",{attrs:{href:"https://www.google.com/recaptcha/admin/create",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.google.com/recaptcha/admin/create"),s("OutboundLink")],1)])]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32)]),t._v(" "),s("p",[t._v("That’s it.")]),t._v(" "),t._m(33),t._v(" "),s("p",[t._v("In order to make sure that you’ve done everything correctly you need to do the following:")]),t._v(" "),s("ol",[t._m(34),t._v(" "),s("li",[s("p",[t._v("Make sure your target domain is not "),s("router-link",{attrs:{to:"/terminology/"}},[t._v("whitelisted")]),t._v(":")],1),t._v(" "),t._m(35)]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38)]),t._v(" "),t._m(39),t._v(" "),s("p",[t._v("You can watch how invisible reCAPTCHA works at "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=GQXmAj5hyDo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.youtube.com/watch?v=GQXmAj5hyDo"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("It is also possible to test Captcha by the server IP. Find more information "),s("router-link",{attrs:{to:"/faq_and_known_issues/#_20-how-to-check-that-captcha-works"}},[t._v("here")])],1)]),t._v(" "),t._m(40),t._v(" "),s("p",[t._v("Imunify360 correctly graylists and blocks IPs behind Cloudflare and other CDNs (see "),s("router-link",{attrs:{to:"/webshield/#supported-cdn-providers"}},[t._v("here")]),t._v(" for the full list).")],1),t._v(" "),t._m(41),t._v(" "),s("p",[t._v("To enable it now, run the command:")]),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),s("p",[t._v("The “trust_ezoic” option for WebShield allows you to trust all IPs that are specified by Ezoic CDN as their own servers. By default the option is switched off, but it can be switched on in a straightforward way. Be aware when using this option, at this moment the list of Ezoic CDN servers is quite big and includes ranges that can be controlled by someone else in Amazon EC2.")]),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),s("p",[t._v("Imunify360 Captcha isn't available in some countries due to certain restrictions, for example, in China. To alleviate this, Chinese customers can use Imunify360 SplashScreen as Captcha.")]),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),s("p",[t._v("Save the file and run the following command:")]),t._v(" "),t._m(57),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),s("p",[t._v("The graylisted visitors will see such screen for 5 seconds before redirecting to their initial destination.")]),t._v(" "),t._m(61),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),s("p",[t._v("Country blocking is available in both "),s("router-link",{attrs:{to:"/dashboard/#black-list"}},[t._v("Admin UI")]),t._v(" and "),s("router-link",{attrs:{to:"/command_line_interface/#blacklist"}},[t._v("CLI")])],1),t._v(" "),t._m(64),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),s("p",[t._v("The “Anti-bot protection” feature will not block legitimate bots (e.g., Google crawler).")]),t._v(" "),s("p",[t._v("You can enable "),s("span",{staticClass:"notranslate"},[t._v("Anti-bot protection")]),t._v(", in the UI. Go to the "),s("span",{staticClass:"notranslate"},[t._v("General")]),t._v(" tab -> "),s("span",{staticClass:"notranslate"},[t._v("Settings")]),t._v(" and check the "),s("span",{staticClass:"notranslate"},[t._v("Anti-bot protection")]),t._v(" checkbox. You can find the details "),s("router-link",{attrs:{to:"/dashboard/#anti-bot-protection"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("p",[t._v("Or via CLI. To do so, run the following command:")]),t._v(" "),t._m(67),t._v(" "),t._m(68),t._v(" "),s("p",[t._v("Starting from Imunify360 v.5.7, users can change WebShield configuration by creating custom configuration files, which will be included in general config once WebShield will start.")]),t._v(" "),t._m(69),t._v(" "),t._m(70),t._v(" "),t._m(71),t._v(" "),s("p",[t._v("Example of the code on Lua:")]),t._v(" "),t._m(72)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"webshield"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webshield","aria-hidden":"true"}},[this._v("#")]),this._v(" WebShield")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#captcha"}},[t._v("Captcha")]),s("ul",[s("li",[s("a",{attrs:{href:"#captcha-page-customization"}},[t._v("Captcha page customization")])]),s("li",[s("a",{attrs:{href:"#update-captcha-localizations"}},[t._v("Update Captcha localizations")])]),s("li",[s("a",{attrs:{href:"#changing-the-default-keys-to-google-recaptcha-keys"}},[t._v("Changing the default keys to Google reCAPTCHA keys")])])])]),s("li",[s("a",{attrs:{href:"#configuring-recaptcha-keys"}},[t._v("Configuring reCAPTCHA keys")]),s("ul",[s("li",[s("a",{attrs:{href:"#how-to-specify-the-keys-for-the-imunify360-captcha"}},[t._v("How to specify the keys for the Imunify360 CAPTCHA")])]),s("li",[s("a",{attrs:{href:"#steps-to-configure"}},[t._v("Steps to configure")])]),s("li",[s("a",{attrs:{href:"#verification"}},[t._v("Verification")])])])]),s("li",[s("a",{attrs:{href:"#cdn-support"}},[t._v("CDN Support")]),s("ul",[s("li",[s("a",{attrs:{href:"#splashscreen-for-chinese-customers"}},[t._v("SplashScreen for Chinese customers")])]),s("li",[s("a",{attrs:{href:"#how-to-block-attacks-from-a-particular-country-in-webshield"}},[t._v("How to block attacks from a particular country in WebShield")])])])]),s("li",[s("a",{attrs:{href:"#anti-bot-protection"}},[t._v("Anti-bot protection")])]),s("li",[s("a",{attrs:{href:"#how-to-write-custom-code-on-webshield"}},[t._v("How to write custom code on WebShield")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Warning")]),this._v(" "),e("p",[this._v("When the interface IP address is added to or deleted from the system, the restart of the webshield is required for the latter to recognize the new IP.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("service imunify360-webshield restart\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"setting-the-webshield-server-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-webshield-server-header","aria-hidden":"true"}},[this._v("#")]),this._v(' Setting the WebShield "Server" header')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To do so, locate the "),e("span",{staticClass:"notranslate"},[e("code",[this._v("more_set_headers")])]),this._v(" directive in the "),e("span",{staticClass:"notrabslate"},[e("code",[this._v("/etc/imunify360-webshield/webshield.conf")])]),this._v(" file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default, the directive contains the "),e("span",{staticClass:"notranslate"},[e("code",[this._v('"Server: imunify360-webshield/1.8";')])]),this._v(" value. You can set string after the colon to whatever suits your needs.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"captcha"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#captcha","aria-hidden":"true"}},[this._v("#")]),this._v(" Captcha")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Warning")]),this._v(" "),e("p",[this._v("Please note that the WebShield Captcha is not compatible with aggressive CDN caching modes, like Cloudflare 'cache everything' with 'Edge Cache TTL'. If the Сaptcha page is cached by CDN, a visitor will see the Captcha from CDN cache disregarding it has been passed or not. In order to fix that, either disable the aggressive CDN caching or the Captcha functionality in the Imunify360.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("If a user of a website is added to the "),e("span",{staticClass:"notranslate"},[this._v("Grey List")]),this._v(" (the access is blocked), then the CAPTCHA allows him to unblock himself. When he tries to get to the website he is redirected to the Captcha Server by ipset, where he can see the protection page asking to confirm that he is not a robot by ticking a checkbox.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/captcha.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("The IP address on the screenshot above is given as an example.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If successful, a user is redirected to the website, which means that the access is unblocked and the IP address of this user is removed from the "),e("span",{staticClass:"notranslate"},[this._v("Grey List")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/local.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"captcha-page-customization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#captcha-page-customization","aria-hidden":"true"}},[this._v("#")]),this._v(" Captcha page customization")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To modify footer, header or body of the CAPTCHA use the templates in "),e("span",{staticClass:"notranslate"},[e("code",[this._v("/usr/share/imunify360-webshield/captcha/templates/")])]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("code",[t._v("head.tpl")])]),t._v(" – this file goes inside "),s("span",{staticClass:"notranslate"},[s("code",[t._v("<head></head>")])]),t._v(" tags. So you can add JavaScript, CSS styles, etc.")])]),t._v(" "),s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("code",[t._v("body.tpl")])]),t._v(" – the main template file, modify it as you wish. CAPTCHA goes above all the layers.")])]),t._v(" "),s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("code",[t._v("static")])]),t._v(" – here you can place images, CSS, JavaScript, etc. and access these files as "),s("span",{staticClass:"notranslate"},[s("code",[t._v("/static/<filename>")])]),t._v(".")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"update-captcha-localizations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-captcha-localizations","aria-hidden":"true"}},[this._v("#")]),this._v(" Update Captcha localizations")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("p",[t._v("Locate appropriate Captcha localization files by running:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ls /usr/share/imunify360-webshield/captcha/translations/locale/{lang}/LC_MESSAGES/messages.po\n")])])])]),t._v(" "),s("p",[t._v("For example for Polish language the catalog looks like this:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/usr/share/imunify360-webshield/captcha/translations/locale/pl/LC_MESSAGES/messages.po\n")])])])])]),t._v(" "),s("li",[s("p",[t._v("Update Captcha localization files by editing "),s("span",{staticClass:"notranslate"},[s("code",[t._v('msgstr "my customization or translation"')])]),t._v(" for appropriate "),s("span",{staticClass:"notranslate"},[s("code",[t._v('msgid “original plain english text"')])]),t._v(".")]),t._v(" "),s("p",[t._v("Where "),s("span",{staticClass:"notranslate"},[s("code",[t._v("msgstr")])]),t._v(" contains text that is shown to user and "),s("span",{staticClass:"notranslate"},[s("code",[t._v("msgid")])]),t._v(" contains Captcha original English text.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('#: templates/index.html:154\nmsgid ""\n"We have noticed an unusual activity from your '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("IP {client_ip}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(' and "\n"blocked access to this website."\nmsgstr ""\n"Zauważyliśmy nietypową aktywność związaną z twoim adresem '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('IP "\n"{client_ip}'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(' i zablokowaliśmy dostęp do tej strony internetowej"\n')])])])])]),t._v(" "),s("li",[s("p",[t._v("To add Polish translation edit text in the "),s("span",{staticClass:"notranslate"},[s("code",[t._v("msgstr")])]),t._v(" field. To change the text for a default English translation, edit text in the "),s("span",{staticClass:"notranslate"},[s("code",[t._v("msgid")])]),t._v(" field.")])]),t._v(" "),s("li",[s("p",[t._v("Save files.")])]),t._v(" "),s("li",[s("p",[t._v("When translation in "),s("span",{staticClass:"notranslate"},[s("code",[t._v("messages.po")])]),t._v(" files is finished, restart "),s("span",{staticClass:"notranslate"},[t._v("imunify360-webshield")]),t._v(" service:")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("service imunify360-webshield restart\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"6"}},[e("li",[this._v("Block yourself (remove your IP from "),e("span",{staticClass:"notranslate"},[this._v("Imunify360 White List")]),this._v(" and try to log in to the server via ssh with wrong password until it blocks you). Then go to website and log in. Captcha should appear. Set Polish language and assert that new text is displayed.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"changing-the-default-keys-to-google-recaptcha-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-default-keys-to-google-recaptcha-keys","aria-hidden":"true"}},[this._v("#")]),this._v(" Changing the default keys to Google reCAPTCHA keys")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To set Google reCAPTCHA keys, place your keys into the "),e("span",{staticClass:"notranslate"},[e("code",[this._v("/etc/imunify360-webshield/webshield-http.conf.d/captchakeys.conf")])]),this._v(" file as shown in the example below:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("captcha_site_key <YOUR_SITE_KEY>;\ncaptcha_secret_key <YOUR_SECRET_KEY>;\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuring-recaptcha-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-recaptcha-keys","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring reCAPTCHA keys")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"why-do-you-need-to-specify-the-google-recaptcha-keys-in-the-imunify360-product"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-do-you-need-to-specify-the-google-recaptcha-keys-in-the-imunify360-product","aria-hidden":"true"}},[this._v("#")]),this._v(" Why do you need to specify the Google reCAPTCHA keys in the Imunify360 product")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"how-to-specify-the-keys-for-the-imunify360-captcha"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-specify-the-keys-for-the-imunify360-captcha","aria-hidden":"true"}},[this._v("#")]),this._v(" How to specify the keys for the Imunify360 CAPTCHA")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"steps-to-configure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-configure","aria-hidden":"true"}},[this._v("#")]),this._v(" Steps to configure")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",[t._v("Fill in required values")]),t._v(" "),s("ul",[s("li",[t._v("Set any value as a label, e.g. "),s("span",{staticClass:"notranslate"},[s("em",[t._v("my servers cluster #1")])])]),t._v(" "),s("li",[t._v("Select "),s("em",[t._v("reCAPTCHA v2")])]),t._v(" "),s("li",[t._v("Select "),s("span",{staticClass:"notranslate"},[s("em",[t._v("Invisible reCAPTCHA badge")])])]),t._v(" "),s("li",[t._v("Add any dummy domain, e.g. "),s("span",{staticClass:"notranslate"},[s("em",[t._v("example.org")])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("You don’t need to put all your domains here")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/reCaptchaRegister.png",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Accept terms and proceed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Notice keys")]),this._v(" "),e("p",[e("img",{attrs:{src:"/images/reCaptchaNoticeKeys.png",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("You need to put these keys on the Imunify360 settings page")]),this._v(" "),e("p",[e("img",{attrs:{src:"/images/reCaptchaImunifyKeys.png",alt:""}})]),this._v(" "),e("p",[this._v("or use the following CLI commands:")]),this._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# imunify360-agent config update \'{"WEBSHIELD": {"captcha_site_key": "6Ldu4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCN6fJ"}}\'\n\n# imunify360-agent config update \'{"WEBSHIELD": {"captcha_secret_key": "6Ldu4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXQqUuk"}}\'\n')])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",[t._v("The final step is to allow Google to process requests from any of your domains")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Open the "),s("span",{staticClass:"notranslate"},[s("em",[t._v("Settings")])]),t._v(" page")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/reCaptchaVerify.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("And disable the "),s("span",{staticClass:"notranslate"},[s("em",[t._v("Verify the origin of reCAPTCHA solutions")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/reCaptchaVerifyDisable.png",alt:""}})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"verification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verification","aria-hidden":"true"}},[this._v("#")]),this._v(" Verification")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Make sure that your IP is not whitelisted (using the CLI):")]),this._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# imunify360-agent whitelist ip list\nIP          TTL    COUNTRY  IMPORTED_FROM  COMMENT\n1.2.3.4     10256  None     None           Whitelisted for 3 hours due to successful panel login\n\n# imunify360-agent whitelist ip delete 1.2.3.4\nOK\n\n# imunify360-agent whitelist ip list\nIP          TTL    COUNTRY  IMPORTED_FROM  COMMENT\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# imunify360-agent whitelist domain list\nexample.com\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# imunify360-agent whitelist domain delete example.com\nOK\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Send at least two WAF test requests to any domain on the server")]),this._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# curl -v http://example.org/?i360test=88ff0adf94a190b9d1311c8b50fe2891c85af732\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Open your test domain in the browser and let it pass the captcha challenge")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Check the list of whitelisted IPs again")]),this._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# imunify360-agent whitelist ip list\nIP          TTL    COUNTRY  IMPORTED_FROM  COMMENT\n1.2.3.4     86377  None     None           IP auto-whitelisted with expiration date: 2020-05-28 15:29:34\n\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you see that your IP is whitelisted then integration between Imunify360 and reCAPTCHA service was "),e("strong",[this._v("done properly")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cdn-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn-support","aria-hidden":"true"}},[this._v("#")]),this._v(" CDN Support")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Imunify360 passes all requests from CDN through "),e("span",{staticClass:"notranslate"},[this._v("WebShield")]),this._v(", and uses "),e("span",{staticClass:"notranslate"},[this._v("CF-Connecting-IP")]),this._v(" and "),e("span",{staticClass:"notranslate"},[this._v("X-Forwarded-For")]),this._v(" headers to identify real IPs.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('imunify360-agent config update \'{"WEBSHIELD": {"known_proxies_support": true}}\'\n')])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("If you are using cPanel/EasyApache3, Imunify360 will not automatically deploy "),e("em",[this._v("mod_remoteip")]),this._v(", and log files will show local server IP for visitors coming from CDN. EasyApache 3 is EOL since December 2018, and we don't plan to add automated "),e("em",[this._v("mod_remoteip")]),this._v(" setup and configuration for it.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("For cPanel/EasyApache 4, Plesk, DirectAdmin and LiteSpeed "),e("em",[this._v("mod_remoteip")]),this._v(" will be automatically installed and configured.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"supported-cdn-providers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-cdn-providers","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported CDN providers:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Cloudflare")]),t._v(" "),s("li",[t._v("MaxCDN")]),t._v(" "),s("li",[t._v("StackPath CDN")]),t._v(" "),s("li",[t._v("KeyCDN")]),t._v(" "),s("li",[t._v("Dartspeed.com")]),t._v(" "),s("li",[t._v("QUIC.cloud CDN")]),t._v(" "),s("li",[t._v("NuCDN")]),t._v(" "),s("li",[t._v("Google CDN")]),t._v(" "),s("li",[t._v("CloudFront CDN")]),t._v(" "),s("li",[t._v("GoCache CDN")]),t._v(" "),s("li",[t._v("Opera")]),t._v(" "),s("li",[t._v("QUANTIL")]),t._v(" "),s("li",[t._v("QUIC.cloud CDN")]),t._v(" "),s("li",[t._v("BunnyCDN")]),t._v(" "),s("li",[t._v("Sucuri WAF")]),t._v(" "),s("li",[t._v("Ezoic")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"how-to-trust-all-ips-that-are-specified-by-ezoic-cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-trust-all-ips-that-are-specified-by-ezoic-cdn","aria-hidden":"true"}},[this._v("#")]),this._v(" How to trust all IPs that are specified by Ezoic CDN")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To enable it, open the "),e("code",[this._v("/etc/imunify360-webshield/virtserver.conf")]),this._v(" file, find the directive set")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$trust_ezoic 0;\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("replace "),e("code",[this._v("0")]),this._v(" with "),e("code",[this._v("1")]),this._v(", save the file and restart WebShield, using the following command:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# service imunify360-webshield restart\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"splashscreen-for-chinese-customers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#splashscreen-for-chinese-customers","aria-hidden":"true"}},[this._v("#")]),this._v(" SplashScreen for Chinese customers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To enable SplashScreen, open the file "),e("span",{staticClass:"notranslate"},[e("code",[this._v("/etc/imunify360-webshield/wscheck.conf")])]),this._v(", find the following line:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("wscheck_splashscreen_as_captcha off;\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Change "),e("span",{staticClass:"notranslate"},[e("code",[this._v("off")])]),this._v(" to "),e("span",{staticClass:"notranslate"},[e("code",[this._v("on")])]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("wscheck_splashscreen_as_captcha on;\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("For Ubuntu:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("service imunify360-websheld reload\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("For CentOS:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("systemctl reload imunify360-webshield\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/splash_as_captcha.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("You can find WebShield and Captcha related logs in the "),e("span",{staticClass:"notranslate"},[e("code",[this._v("/var/log/imunify360-webshield/")])]),this._v(" file.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"how-to-block-attacks-from-a-particular-country-in-webshield"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-block-attacks-from-a-particular-country-in-webshield","aria-hidden":"true"}},[this._v("#")]),this._v(" How to block attacks from a particular country in WebShield")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"anti-bot-protection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anti-bot-protection","aria-hidden":"true"}},[this._v("#")]),this._v(" Anti-bot protection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Starting from version 5.6, Imunify360 distinguishes bots from real visitors using the JavaScript challenge "),e("span",{staticClass:"notranslate"},[this._v('"Splash Screen')]),this._v('." Most bots don’t solve the challenge, and their requests will not reach web applications such as WordPress, Drupal, and others. This can save the server’s resources and protects websites from scanners, automated attacks, and web-spammers.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Only bad actors will be redirected to the Imunify360 "),e("span",{staticClass:"notranslate"},[this._v("Splash Screen")]),this._v(" challenge page. Legitimate visitors get original content without any verification page nor any delay. The users forced to the "),e("span",{staticClass:"notranslate"},[this._v("Splash Screen")]),this._v(" will not see the challenge or CAPTCHA and be redirected to the page with the original content. Cookies and JavaScript support are required in a browser to successfully pass the challenge of "),e("span",{staticClass:"notranslate"},[this._v("Anti-bot protection")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# imunify360-agent config update \'{"WEBSHIELD": {"splash_screen": true}}\'\n')])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-to-write-custom-code-on-webshield"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-write-custom-code-on-webshield","aria-hidden":"true"}},[this._v("#")]),this._v(" How to write custom code on WebShield")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To enable it, open the "),e("code",[this._v("/etc/imunify360-webshield/virtserver.conf")]),this._v(" file, find the directive "),e("code",[this._v("set $trust_ezoic 0;")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Replace "),e("code",[this._v("0")]),this._v(" with "),e("code",[this._v("1")]),this._v(", save the file and restart WebShield by running the following command:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# service imunify360-webshield restart\n")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("header_filter_by_lua_block")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ngx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query_string\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ngx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" ngx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.default=i.exports}}]);