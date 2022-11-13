"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[9091],{4137:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=o(n),N=r,g=k["".concat(d,".").concat(N)]||k[N]||m[N]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8383:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(4137)),i=["components"],p={title:"Dependencies",description:"These are the dependencies currently used by PCOIN Core",sidebar_position:5},d=void 0,o={unversionedId:"Pcoin-Core/Building/dependencies",id:"Pcoin-Core/Building/dependencies",title:"Dependencies",description:"These are the dependencies currently used by PCOIN Core",source:"@site/docs/Pcoin-Core/Building/dependencies.md",sourceDirName:"Pcoin-Core/Building",slug:"/Pcoin-Core/Building/dependencies",permalink:"/docs/Pcoin-Core/Building/dependencies",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Building/dependencies.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Dependencies",description:"These are the dependencies currently used by PCOIN Core",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Setting Up Gitian on Fedora and CentOS",permalink:"/docs/Pcoin-Core/Building/gitian-building/gitian-setup-fedora"},next:{title:"Depend",permalink:"/docs/Pcoin-Core/Building/depends"}},u={},m=[{value:"Controlling dependencies",id:"controlling-dependencies",level:2},{value:"Options passed to <code>./configure</code>",id:"options-passed-to-configure",level:3},{value:"Other",id:"other",level:3}],k={toc:m};function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"These are the dependencies currently used by PCOIN Core. You can find instructions for installing them in the ",(0,l.kt)("inlineCode",{parentName:"p"},"build-*.md")," file for your platform."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Dependency"),(0,l.kt)("th",{parentName:"tr",align:null},"Version used"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum required"),(0,l.kt)("th",{parentName:"tr",align:null},"CVEs"),(0,l.kt)("th",{parentName:"tr",align:null},"Shared"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://doc.qt.io/qt-5/configure-options.html#third-party-libraries"},"Bundled Qt library")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Berkeley DB"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.oracle.com/technetwork/database/database-technologies/berkeleydb/downloads/index.html"},"4.8.30")),(0,l.kt)("td",{parentName:"tr",align:null},"4.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boost"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.boost.org/users/download/"},"1.71.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pcoinproject/pcoin/pull/1703"},"1.57.0")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Clang"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://llvm.org/releases/download.html"},"3.3+")," (C++11 support)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D-Bus"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://cgit.freedesktop.org/dbus/dbus/tree/NEWS?h=dbus-1.10"},"1.10.18")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Expat"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://libexpat.github.io/"},"2.2.6")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontconfig"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.freedesktop.org/software/fontconfig/release/"},"2.12.1")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FreeType"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://download.savannah.gnu.org/releases/freetype"},"2.7.1")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GCC"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gcc.gnu.org/"},"4.8+")," (C++11 support)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HarfBuzz-NG"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"libevent"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/libevent/libevent/releases"},"2.1.8-stable")),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.22"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"libnatpmp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://miniupnp.tuxfamily.org/files"},"20150609")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"libjpeg"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pcoinproject/pcoin/blob/master/depends/packages/qt.mk#L65"},"Yes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"libpng"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pcoinproject/pcoin/blob/master/depends/packages/qt.mk#L64"},"Yes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"librsvg"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MiniUPnPc"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://miniupnp.tuxfamily.org/files"},"2.2.2")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GMP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gmplib.org/"},"6.1.2")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PCRE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pcoinproject/pcoin/blob/master/depends/packages/qt.mk#L66"},"Yes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python (tests)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.python.org/downloads"},"3.5")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qrencode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://fukuchi.org/works/qrencode"},"3.4.4")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Qt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://download.qt.io/official_releases/qt/"},"5.9.7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bitcoin/bitcoin/issues/13478"},"5.5.1")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XCB"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pcoinproject/pcoin/blob/master/depends/packages/qt.mk#L87"},"Yes")," (Linux only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xkbcommon"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pcoinproject/pcoin/blob/master/depends/packages/qt.mk#L86"},"Yes")," (Linux only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZeroMQ"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/zeromq/libzmq/releases"},"4.3.1")),(0,l.kt)("td",{parentName:"tr",align:null},"4.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zlib"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://zlib.net/"},"1.2.11")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sodium"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/jedisct1/libsodium"},"1.0.15")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rust"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.rust-lang.org/"},"1.42.0")),(0,l.kt)("td",{parentName:"tr",align:null},"1.42.0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"controlling-dependencies"},"Controlling dependencies"),(0,l.kt)("p",null,"Some dependencies are not needed in all configurations. The following are some factors that affect the dependency list."),(0,l.kt)("h3",{id:"options-passed-to-configure"},"Options passed to ",(0,l.kt)("inlineCode",{parentName:"h3"},"./configure")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MiniUPnPc is not needed with ",(0,l.kt)("inlineCode",{parentName:"li"},"--without-miniupnpc"),"."),(0,l.kt)("li",{parentName:"ul"},"libnatpmp is not needed with ",(0,l.kt)("inlineCode",{parentName:"li"},"--without-natpmp"),"."),(0,l.kt)("li",{parentName:"ul"},"Berkeley DB is not needed with ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-wallet"),"."),(0,l.kt)("li",{parentName:"ul"},"Qt is not needed with ",(0,l.kt)("inlineCode",{parentName:"li"},"--without-gui"),"."),(0,l.kt)("li",{parentName:"ul"},"If the qrencode dependency is absent, QR support won't be added. To force an error when that happens, pass ",(0,l.kt)("inlineCode",{parentName:"li"},"--with-qrencode"),"."),(0,l.kt)("li",{parentName:"ul"},"ZeroMQ is needed only with the ",(0,l.kt)("inlineCode",{parentName:"li"},"--with-zmq")," option.")),(0,l.kt)("h3",{id:"other"},"Other"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"librsvg is only needed if you need to run ",(0,l.kt)("inlineCode",{parentName:"li"},"make deploy")," on (cross-compilation to) macOS.")))}N.isMDXComponent=!0}}]);