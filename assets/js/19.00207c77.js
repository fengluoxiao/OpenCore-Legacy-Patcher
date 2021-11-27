(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{412:function(t,e,a){"use strict";a.r(e);var l=a(25),r=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"benefits-and-drawbacks-between-opencore-legacy-patcher-and-other-patchers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits-and-drawbacks-between-opencore-legacy-patcher-and-other-patchers"}},[t._v("#")]),t._v(" Benefits and Drawbacks between OpenCore Legacy Patcher and other patchers")]),t._v(" "),a("p",[t._v("With OpenCore Legacy Patcher we recommend users go through the below table to understand what the benefits and drawbacks are compared to other patchers. There are positive and negatives to each and we feel transparency is most important when patching another users machine. There should be no grey areas where users may be mislead.")]),t._v(" "),a("ul",[a("li",[t._v("Note: "),a("a",{attrs:{href:"https://github.com/BenSova/Patched-Sur",target:"_blank",rel:"noopener noreferrer"}},[t._v("Patched Sur"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/moosethegoose2213/automator-for-barrykn-micropatcher",target:"_blank",rel:"noopener noreferrer"}},[t._v("MicropatcherAutomator"),a("OutboundLink")],1),t._v(" are iterations of "),a("a",{attrs:{href:"https://github.com/barrykn/big-sur-micropatcher",target:"_blank",rel:"noopener noreferrer"}},[t._v("BarryKN's micropatcher"),a("OutboundLink")],1),t._v(" and therefore share many of the same benefits and limitations. Patched Sur is used for this comparison as it's the most common form of BarryKN's patcher users will find.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Features")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCore Legacy Patcher"),a("OutboundLink")],1)]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/BenSova/Patched-Sur",target:"_blank",rel:"noopener noreferrer"}},[t._v("Patched Sur"),a("OutboundLink")],1)])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Over The Air Updates")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Native System Preferences, additionally supports Deltas (~2GB) for Metal GPUs")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Inside Patcher Sur app (~12GB), only available when InstallAssistants release.")]),t._v(" InstallAssistants generally available same day as System Preference updates, however developer betas will lag behind by 1 day compared to OTAs")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("FileVault")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Fully supported on all machines")]),t._v(". Note unsupported on APFS ROM Patched Macs, revert to stock firmware to resolve")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Not supported")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("System Integrity Protection")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Fully enabled on Metal GPUs")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Disabled for early 2013 and older during the patching process and first boot afterwards, otherwise enabled")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("APFS Snapshots")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Fully enabled")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Disabled")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("User facing")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("TUI interface")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("SwiftUI interface, more user friendly")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Supported OSes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("10.7-12")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("10.15-11")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Firmware Patching")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("None required")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Required for models without native APFS support")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BootCamp Switching")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Requires EFI Conversion for Start Disk support, otherwise still supported")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Native")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Non-Metal GPU Acceleration")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("In active development")]),t._v(", see Acceleration Progress Tracker: "),a("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/108",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Currently not researching")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("El Capitan-era Wifi cards")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Supported")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{}},[t._v("Not supported")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("WPA Wireless Support")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Supported")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Minority may experience issues on early 2013 and older Models")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Personal Hotspot Support")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Native")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Often requires extra steps to achieve on early 2013 and older Models")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("HEVC/H.265 Support for Mac Pros and iMacs with Polaris+ GPUs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Supported")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Not supported")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Big Sur-styled Boot Picker")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Available")]),t._v(", though as a shim to the original boot picker")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Not available")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Hibernation Support")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Supports 3rd party SATA SSDs on 2011 and older models in addition to stock drives")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Only supports stock drives on 2011 and older models")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Sidecar Support")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"#30BCD5"}},[t._v("Supports any Mac with Metal Intel iGPU")]),t._v(", artifacting way exhibited on high movement screen content")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{color:"red"}},[t._v("Not supported at all")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);