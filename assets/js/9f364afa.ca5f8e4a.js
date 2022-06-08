"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[834],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),l=["components"],o={title:"Depend"},d=void 0,p={unversionedId:"Pcoin-Core/Building/depends",id:"Pcoin-Core/Building/depends",title:"Depend",description:"To build dependencies for the current arch+OS:",source:"@site/docs/Pcoin-Core/Building/depends.md",sourceDirName:"Pcoin-Core/Building",slug:"/Pcoin-Core/Building/depends",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/depends",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Building/depends.md",tags:[],version:"current",frontMatter:{title:"Depend"},sidebar:"tutorialSidebar",previous:{title:"Dependencies",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/dependencies"},next:{title:"FAQ",permalink:"/pcoin.dev/docs/Help/faq"}},c={},s=[{value:"Install the required dependencies",id:"install-the-required-dependencies",level:2},{value:"For macOS cross compilation",id:"for-macos-cross-compilation",level:3},{value:"For Win64 cross compilation",id:"for-win64-cross-compilation",level:3},{value:"For linux (including i386, ARM) cross compilation",id:"for-linux-including-i386-arm-cross-compilation",level:3},{value:"Dependency Options",id:"dependency-options",level:3},{value:"Additional targets",id:"additional-targets",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To build dependencies for the current arch+OS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make\n")),(0,i.kt)("p",null,"To build for another arch/OS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make HOST=host-platform-triplet\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make HOST=x86_64-w64-mingw32 -j4\n")),(0,i.kt)("p",null,"A prefix will be generated that's suitable for plugging into Pcoin's\nconfigure. In the above example, a dir named x86_64-w64-mingw32 will be\ncreated. To use it for Pcoin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./configure --prefix=`pwd`/depends/x86_64-w64-mingw32\n")),(0,i.kt)("p",null,"Common ",(0,i.kt)("inlineCode",{parentName:"p"},"host-platform-triplets")," for cross compilation are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Platform"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x86_64-w64-mingw32")),(0,i.kt)("td",{parentName:"tr",align:null},"for Win64")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x86_64-apple-darwin16")),(0,i.kt)("td",{parentName:"tr",align:null},"for macOS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"arm-linux-gnueabihf")),(0,i.kt)("td",{parentName:"tr",align:null},"for Linux ARM 32 bit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aarch64-linux-gnu")),(0,i.kt)("td",{parentName:"tr",align:null},"for Linux ARM 64 bit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"riscv32-linux-gnu")),(0,i.kt)("td",{parentName:"tr",align:null},"for Linux RISC-V 32 bit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"riscv64-linux-gnu")),(0,i.kt)("td",{parentName:"tr",align:null},"for Linux RISC-V 64 bitfor Linux RISC-V 64 bit")))),(0,i.kt)("p",null,"No other options are needed, the paths are automatically configured."),(0,i.kt)("h2",{id:"install-the-required-dependencies"},"Install the required dependencies"),(0,i.kt)("h3",{id:"for-macos-cross-compilation"},"For macOS cross compilation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install curl librsvg2-bin libtiff-tools bsdmainutils cmake imagemagick libcap-dev libz-dev libbz2-dev python3-setuptools\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You must obtain the macOS SDK before proceeding with a cross-compile.\nUnder the depends directory, create a subdirectory named ",(0,i.kt)("inlineCode",{parentName:"p"},"SDKs"),".\nThen, place the extracted SDK under this new directory.\nFor more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pcoinproject/pcoin/tree/master/contrib/macdeploy#sdk-extraction"},"SDK Extraction"),"."))),(0,i.kt)("h3",{id:"for-win64-cross-compilation"},"For Win64 cross compilation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"see ",(0,i.kt)("a",{parentName:"li",href:"/pcoin.dev/docs/Pcoin-Core/Building/build-windows#cross-compilation-for-ubuntu-and-windows-subsystem-for-linux"},"/pcoin.dev/docs/Pcoin-Core/Building/build-windows"))),(0,i.kt)("h3",{id:"for-linux-including-i386-arm-cross-compilation"},"For linux (including i386, ARM) cross compilation"),(0,i.kt)("p",null,"Common linux dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install make automake cmake curl g++-multilib libtool binutils-gold bsdmainutils pkg-config python3 patch\n")),(0,i.kt)("p",null,"For linux ARM cross compilation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install g++-arm-linux-gnueabihf binutils-arm-linux-gnueabihf\n")),(0,i.kt)("p",null,"For linux AARCH64 cross compilation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install g++-aarch64-linux-gnu binutils-aarch64-linux-gnu\n")),(0,i.kt)("p",null,"For linux RISC-V 64-bit cross compilation (there are no packages for 32-bit):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install g++-riscv64-linux-gnu binutils-riscv64-linux-gnu\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RISC-V known issue: gcc-7.3.0 and gcc-7.3.1 result in a broken ",(0,i.kt)("inlineCode",{parentName:"p"},"test_pcoin")," executable (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bitcoin/pull/13543"},"https://github.com/bitcoin/bitcoin/pull/13543"),"),\nthis is apparently fixed in gcc-8.1.0."))),(0,i.kt)("h3",{id:"dependency-options"},"Dependency Options"),(0,i.kt)("p",null,"The following can be set when running make: ",(0,i.kt)("inlineCode",{parentName:"p"},"make FOO=bar")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SOURCES_PATH"),(0,i.kt)("td",{parentName:"tr",align:null},"downloaded sources will be placed here")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BASE_CACHE"),(0,i.kt)("td",{parentName:"tr",align:null},"built packages will be placed here")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDK_PATH"),(0,i.kt)("td",{parentName:"tr",align:null},"Path where sdk's can be found (used by macOS)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FALLBACK_DOWNLOAD_PATH"),(0,i.kt)("td",{parentName:"tr",align:null},"If a source file can't be fetched, try here before giving up")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NO_QT"),(0,i.kt)("td",{parentName:"tr",align:null},"Don't download/build/cache qt and its dependencies")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NO_ZMQ"),(0,i.kt)("td",{parentName:"tr",align:null},"Don't download/build/cache packages needed for enabling zeromq")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NO_WALLET"),(0,i.kt)("td",{parentName:"tr",align:null},"Don't download/build/cache libs needed to enable the wallet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NO_UPNP"),(0,i.kt)("td",{parentName:"tr",align:null},"Don't download/build/cache packages needed for enabling upnp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NO_NATPMP"),(0,i.kt)("td",{parentName:"tr",align:null},"Don't download/build/cache packages needed for enabling NAT-PMP")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NO_RUST"),(0,i.kt)("td",{parentName:"tr",align:null},"Don't download/build/cache rust packages (including librustzcash)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ALLOW_HOST_PACKAGES"),(0,i.kt)("td",{parentName:"tr",align:null},"Packages that are missed in dependencies (due to ",(0,i.kt)("inlineCode",{parentName:"td"},"NO_*")," option or build script logic) are searched for among the host system packages using ",(0,i.kt)("inlineCode",{parentName:"td"},"pkg-config"),". It allows building with packages of other (newer) versions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DEBUG"),(0,i.kt)("td",{parentName:"tr",align:null},"disable some optimizations and enable more runtime checking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HOST_ID_SALT"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional salt to use when generating host package ids")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BUILD_ID_SALT"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional salt to use when generating build package ids")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FORCE_USE_SYSTEM_CLANG"),(0,i.kt)("td",{parentName:"tr",align:null},"(EXPERTS ONLY) When cross-compiling for macOS, use clang found in the system's ",(0,i.kt)("code",null,"$PATH")," rather than the default prebuilt release of clang from llvm.org")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If some packages are not built, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"make NO_WALLET=1"),", the appropriate\noptions will be passed to bitcoin's configure. In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-wallet"),"."))),(0,i.kt)("h3",{id:"additional-targets"},"Additional targets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"download: run 'make download' to fetch all sources without building them\ndownload-osx: run 'make download-osx' to fetch all sources needed for macOS builds\ndownload-win: run 'make download-win' to fetch all sources needed for win builds\ndownload-linux: run 'make download-linux' to fetch all sources needed for linux builds\n")))}m.isMDXComponent=!0}}]);