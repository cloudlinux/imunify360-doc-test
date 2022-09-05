(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{267:function(e,t,i){"use strict";i.r(t);var s=i(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("There are following tabs in the Imunify360 end user interface:")]),e._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"/user_interface/#files"}},[e._v("Files")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/user_interface/#history"}},[e._v("History")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/user_interface/#ignore-list"}},[e._v("Ignore List")])],1)]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("Go to Imunify360 → Files tab. Here, there is a table with a list of infected files.")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("The table has the following columns:")]),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("To perform a bulk action, tick required users and click the corresponding button above the table.")]),e._v(" "),i("p",[e._v("The following filters are available:")]),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("The table can be sorted by detection date (Detected), file path (File), Reason, and Status.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("History tab contains data of all actions for all files. Go to Imunify360 → History tab. Here, there is a table with a list of files.")]),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("The table has the following columns:")]),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("The table can be sorted by Date, Path to File, Cause, and Owner.")]),e._v(" "),e._m(10),e._v(" "),i("p",[e._v("Ignore List tab contains the list of files that are excluded from Malware Scanner scanning. Go to Imunify360 → Ignore List tab. Here, there is a table with a list of files.")]),e._v(" "),e._m(11),e._v(" "),i("p",[e._v("The table has the following columns:")]),e._v(" "),e._m(12),e._v(" "),i("p",[e._v("The following filters are available:")]),e._v(" "),e._m(13),e._v(" "),i("p",[e._v("The table can be sorted by Added and Path. By default, it is sorted from newest to oldest.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"imunify360-user-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#imunify360-user-interface","aria-hidden":"true"}},[this._v("#")]),this._v(" Imunify360 User Interface")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#files","aria-hidden":"true"}},[this._v("#")]),this._v(" Files")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/user_files.png",alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("Detected")]),e._v(" — displays the exact time when a file was detected as malicious")]),e._v(" "),i("li",[i("strong",[e._v("File")]),e._v(" — the path where the file is located starting with root")]),e._v(" "),i("li",[i("strong",[e._v("Reason")]),e._v(" — describes the signature which was detected during the scanning process. Names in this column depend on the signature vendor. You can derive some information from the signature ID itself. "),i("code",[e._v("SMW-SA-05155-wshll")]),e._v(" – in this Signature ID:\n"),i("ul",[i("li",[e._v("The first section can be either "),i("code",[e._v("SMW")]),e._v(" or "),i("code",[e._v("CMW")]),e._v(". "),i("code",[e._v("SMW")]),e._v(" stands for Server Malware and "),i("code",[e._v("CMW")]),e._v(" stands for Client Malware")]),e._v(" "),i("li",[e._v("The second section of ID can be either "),i("code",[e._v("INJ")]),e._v(" or "),i("code",[e._v("SA")]),e._v(". "),i("code",[e._v("INJ")]),e._v(" stands for Injection (means Malware is Injected to some legitimate file) and "),i("code",[e._v("SA")]),e._v(" stands for StandAlone (means File is Completely Malicious)")]),e._v(" "),i("li",[e._v("The third section is "),i("code",[e._v("05155")]),e._v(". This is simply an identification number for the signature.")]),e._v(" "),i("li",[e._v("The fourth section "),i("code",[e._v("wshll/mlw.wp/etc")]),e._v(" explains the category and class of malware identified. Here, "),i("code",[e._v("wshll")]),e._v(" stands for web shell ("),i("code",[e._v("mlw")]),e._v(" stands for malware).")]),e._v(" "),i("li",[e._v("The fifth section is "),i("code",[e._v("0")]),e._v(", which provides the version number of the signature.")])])]),e._v(" "),i("li",[i("strong",[e._v("Status")]),e._v(" — displays the file status:\n"),i("ul",[i("li",[i("strong",[e._v("Infected")]),e._v(" — threat was detected after scanning. If a file was not cleaned after cleanup, the info icon is displayed. Hover mouse over info icon to display the reason")]),e._v(" "),i("li",[i("strong",[e._v("Cleaned")]),e._v(" — infected file is cleaned up")]),e._v(" "),i("li",[i("strong",[e._v("Content removed")]),e._v(" — a file content was removed after cleanup")]),e._v(" "),i("li",[i("strong",[e._v("Cleanup queued")]),e._v(" — infected file is queued for cleanup.\nActions:")])])]),e._v(" "),i("li",[i("strong",[e._v("Add to Ignore List")]),e._v(" — add file to Ignore List and remove it from the Malicious files list. Note that if a file is added to Ignore List, Imunify360 will no longer scan this file")]),e._v(" "),i("li",[i("strong",[e._v("View file")]),e._v(" — click "),i("em",[e._v("eye")]),e._v(" icon in the file line and the file content will be displayed in the popup. Only the first 100Kb of the file content will be shown in case if a file has bigger size")]),e._v(" "),i("li",[i("strong",[e._v("Cleanup")]),e._v(" — click to cleanup the file.")]),e._v(" "),i("li",[i("strong",[e._v("Delete")]),e._v(" — remove the file from the server and from the list of Malicious files.")]),e._v(" "),i("li",[i("strong",[e._v("Restore original")]),e._v(" — click "),i("em",[e._v("Restore original")]),e._v(" to restore original file after cleaning up if backup is available.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("Timeframe")]),e._v(" — displays the results filtered by chosen period or date.")]),e._v(" "),i("li",[i("strong",[e._v("Status")]),e._v(" — displays the results filtered by chosen status.")]),e._v(" "),i("li",[i("strong",[e._v("Items per page displayed")]),e._v(" — click the number at the table bottom.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If a user is allowed by an administrator to scan his files, he can see the "),t("em",[this._v("Start scanning")]),this._v(" button.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/user_files_scanning.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"history"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#history","aria-hidden":"true"}},[this._v("#")]),this._v(" History")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/history_user.png",alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("Date")]),e._v(" — action timestamp.")]),e._v(" "),i("li",[i("strong",[e._v("Path to File")]),e._v(" — path to the file starting from the root.")]),e._v(" "),i("li",[i("strong",[e._v("Cause")]),e._v(" — displays the way malicious file was found:\n"),i("ul",[i("li",[i("strong",[e._v("Manual")]),e._v(" — scanning or cleaning was manually processed by a user.")]),e._v(" "),i("li",[i("strong",[e._v("On-demand")]),e._v(" — scanning or cleaning was initiated/made by a user;")]),e._v(" "),i("li",[i("strong",[e._v("Real time")]),e._v(" — scanning or cleaning was automatically processed by the system.")])])]),e._v(" "),i("li",[i("strong",[e._v("Owner")]),e._v(" — displays a user name of file owner.")]),e._v(" "),i("li",[i("strong",[e._v("Initiator")]),e._v(" — displays the name of a user who was initiated the action. For system actions the name is System.")]),e._v(" "),i("li",[i("strong",[e._v("Event")]),e._v(" — displays the action with the file:\n"),i("ul",[i("li",[i("strong",[e._v("Detected as malicious")]),e._v(" — after scanning the file was detected as infected;")]),e._v(" "),i("li",[i("strong",[e._v("Cleaned")]),e._v(" — the file is cleaned up.")]),e._v(" "),i("li",[i("strong",[e._v("Failed to clean up")]),e._v(" — there was a problem during cleanup. Hover mouse over the info icon to read more.")]),e._v(" "),i("li",[i("strong",[e._v("Added to Ignore List")]),e._v(" — the file was added to Ignore List. Imunify360 will not scan it.")]),e._v(" "),i("li",[i("strong",[e._v("Restored original")]),e._v(" — file content was restored as not malicious.")]),e._v(" "),i("li",[i("strong",[e._v("Cleanup removed content")]),e._v(" — file contend was removed after cleanup.")]),e._v(" "),i("li",[i("strong",[e._v("Deleted from Ignore List")]),e._v(" — the file was removed from Ignore List. Imunify360 will scan it.")]),e._v(" "),i("li",[i("strong",[e._v("Deleted")]),e._v(" — the file was deleted.")]),e._v(" "),i("li",[i("strong",[e._v("Submitted for analysis")]),e._v(" — the file was submitted to Imunify team for analysis.")]),e._v(" "),i("li",[i("strong",[e._v("Failed to delete")]),e._v(" — there was a problem during removal. Hover mouse over the info icon to read more.")]),e._v(" "),i("li",[i("strong",[e._v("Failed to ignore")]),e._v(" — there was a problem during adding to Ignore List. Hover mouse over the info icon to read more.")]),e._v(" "),i("li",[i("strong",[e._v("Failed to delete from ignore")]),e._v(" — there was a problem during removal from Ignore List. Hover mouse over the info icon to read more.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ignore-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ignore-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Ignore List")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/ignore_list_user.png",alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("Added")]),e._v(" — the date when the file was added to Ignore List.")]),e._v(" "),i("li",[i("strong",[e._v("Path")]),e._v(" — path to the file starting from the root.")]),e._v(" "),i("li",[i("strong",[e._v("Actions")]),e._v(":\n"),i("ul",[i("li",[i("strong",[e._v("Remove from Ignore List")]),e._v(" — click "),i("em",[e._v("Bin")]),e._v(" icon to remove the file from the Ignore List and start scanning.")]),e._v(" "),i("li",[i("strong",[e._v("Add new file or directory")]),e._v(" — click "),i("em",[e._v("Plus")]),e._v(" icon to add a new file or directory to Ignore List.\nTo perform a bulk action, tick required files and click the corresponding button above the table.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("Timeframe")]),this._v(" — displays the results filtered by chosen period or date.")]),this._v(" "),t("li",[t("strong",[this._v("Items per page displayed")]),this._v(" — click the number at the table bottom.")])])}],!1,null,null,null);t.default=n.exports}}]);