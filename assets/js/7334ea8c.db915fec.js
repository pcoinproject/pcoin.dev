"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[3981],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=l,b=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2668:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(3117),l=n(102),i=(n(7294),n(4137)),r=["components"],o={title:"UNIX Build guide",description:"Some notes on how to build PCOIN Core in UNIX.",sidebar_position:2},p=void 0,d={unversionedId:"Pcoin-Core/Building/build-unix",id:"Pcoin-Core/Building/build-unix",title:"UNIX Build guide",description:"Some notes on how to build PCOIN Core in UNIX.",source:"@site/docs/Pcoin-Core/Building/build-unix.md",sourceDirName:"Pcoin-Core/Building",slug:"/Pcoin-Core/Building/build-unix",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/build-unix",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Building/build-unix.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"UNIX Build guide",description:"Some notes on how to build PCOIN Core in UNIX.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"macOS Build guide",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/build-osx"},next:{title:"Windows Build guide",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/build-windows"}},u={},s=[{value:"To Build",id:"to-build",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Memory Requirements",id:"memory-requirements",level:2},{value:"Linux Distribution Specific Instructions",id:"linux-distribution-specific-instructions",level:2},{value:"Ubuntu &amp; Debian",id:"ubuntu--debian",level:3},{value:"Dependency Build Instructions",id:"dependency-build-instructions",level:4},{value:"Fedora",id:"fedora",level:3},{value:"Dependency Build Instructions",id:"dependency-build-instructions-1",level:4},{value:"miniupnpc",id:"miniupnpc",level:2},{value:"libnatpmp",id:"libnatpmp",level:2},{value:"Berkeley DB",id:"berkeley-db",level:2},{value:"Boost",id:"boost",level:2},{value:"Security",id:"security",level:2},{value:"Disable-wallet mode",id:"disable-wallet-mode",level:2},{value:"Additional Configure Flags",id:"additional-configure-flags",level:2},{value:"ARM Cross-compilation",id:"arm-cross-compilation",level:2}],c={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Always use absolute paths to configure and compile PCOIN Core and the dependencies,\nFor example, when specifying the path of the dependency:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"../dist/configure --enable-cxx --disable-shared --with-pic --prefix=$BDB_PREFIX\n")),(0,i.kt)("p",{parentName:"admonition"},"Here BDB_PREFIX must be an absolute path - it is defined using $(pwd) which ensures\nthe usage of the absolute path.")),(0,i.kt)("h2",{id:"to-build"},"To Build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./autogen.sh\n./configure\nmake\nmake install # optional\n")),(0,i.kt)("p",null,"This will build pcoin-qt as well, if the dependencies are met."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"These dependencies are required:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Library"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libboost"),(0,i.kt)("td",{parentName:"tr",align:null},"Utility"),(0,i.kt)("td",{parentName:"tr",align:null},"Library for threading, data structures, etc")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libevent"),(0,i.kt)("td",{parentName:"tr",align:null},"Networking"),(0,i.kt)("td",{parentName:"tr",align:null},"OS independent asynchronous networking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libgmp"),(0,i.kt)("td",{parentName:"tr",align:null},"Bignum Arithmetic"),(0,i.kt)("td",{parentName:"tr",align:null},"Precision arithmetic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libsodium"),(0,i.kt)("td",{parentName:"tr",align:null},"Sapling Crypto"),(0,i.kt)("td",{parentName:"tr",align:null},"A modern, portable, easy to use crypto library")))),(0,i.kt)("p",null,"Optional dependencies:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Library"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"miniupnpc"),(0,i.kt)("td",{parentName:"tr",align:null},"UPnP Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Firewall-jumping support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libnatpmp"),(0,i.kt)("td",{parentName:"tr",align:null},"NAT-PMP Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Firewall-jumping support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libdb4.8"),(0,i.kt)("td",{parentName:"tr",align:null},"Berkeley DB"),(0,i.kt)("td",{parentName:"tr",align:null},"Wallet storage (only needed when wallet enabled)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"qt"),(0,i.kt)("td",{parentName:"tr",align:null},"GUI"),(0,i.kt)("td",{parentName:"tr",align:null},"GUI toolkit (only needed when GUI enabled)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"univalue"),(0,i.kt)("td",{parentName:"tr",align:null},"Utility"),(0,i.kt)("td",{parentName:"tr",align:null},"JSON parsing and encoding (bundled version will be used unless --with-system-univalue passed to configure)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libzmq3"),(0,i.kt)("td",{parentName:"tr",align:null},"ZMQ notification"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, allows generating ZMQ notifications (requires ZMQ version >= 4.0.0)")))),(0,i.kt)("p",null,"For the versions used, see ",(0,i.kt)("a",{parentName:"p",href:"dependencies"},"dependencies")),(0,i.kt)("h2",{id:"memory-requirements"},"Memory Requirements"),(0,i.kt)("p",null,"C++ compilers are memory-hungry. It is recommended to have at least 1.5 GB of\nmemory available when compiling PCOIN Core. On systems with less, gcc can be\ntuned to conserve memory with additional CXXFLAGS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'./configure CXXFLAGS="--param ggc-min-expand=1 --param ggc-min-heapsize=32768"\n')),(0,i.kt)("h2",{id:"linux-distribution-specific-instructions"},"Linux Distribution Specific Instructions"),(0,i.kt)("h3",{id:"ubuntu--debian"},"Ubuntu & Debian"),(0,i.kt)("h4",{id:"dependency-build-instructions"},"Dependency Build Instructions"),(0,i.kt)("p",null,"Build requirements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install build-essential libtool bsdmainutils autotools-dev autoconf pkg-config automake python3\n")),(0,i.kt)("p",null,"Now, you can either build from self-compiled ",(0,i.kt)("a",{parentName:"p",href:"depends"},"depends")," or install the required dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install libgmp-dev libevent-dev libboost-all-dev libsodium-dev cargo\n")),(0,i.kt)("p",null,"BerkeleyDB is required for the wallet."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"For Ubuntu only:")," db4.8 packages are available ",(0,i.kt)("a",{parentName:"p",href:"https://launchpad.net/~pcoin-dev/+archive/ubuntu/ppa"},"here"),".\nYou can add the repository using the following command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install software-properties-common\nsudo add-apt-repository ppa:pcoin-dev/ppa\nsudo apt-get update\nsudo apt-get install libdb4.8-dev libdb4.8++-dev\n")),(0,i.kt)("p",{parentName:"admonition"},"Ubuntu and Debian have their own libdb-dev and libdb++-dev packages, but these will install\nBerkeleyDB 5.1 or later. This will break binary wallet compatibility with the distributed executables, which\nare based on BerkeleyDB 4.8. If you do not care about wallet compatibility,\npass ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-incompatible-bdb")," to configure."),(0,i.kt)("p",{parentName:"admonition"},"Otherwise, you can build from self-compiled ",(0,i.kt)("inlineCode",{parentName:"p"},"depends")," (see above).")),(0,i.kt)("p",null,"To build PCOIN Core without wallet, see ",(0,i.kt)("a",{parentName:"p",href:"#disable-wallet-mode"},(0,i.kt)("em",{parentName:"a"},"Disable-wallet mode"))),(0,i.kt)("p",null,"Optional port mapping libraries (see: ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-miniupnpc"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-upnp-default"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-natpmp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-natpmp-default"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install libminiupnpc-dev libnatpmp-dev\n")),(0,i.kt)("p",null,"ZMQ dependencies (provides ZMQ API):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install libzmq3-dev\n")),(0,i.kt)("p",null,"GUI dependencies:"),(0,i.kt)("p",null,"If you want to build pcoin-qt, make sure that the required packages for Qt development\nare installed. Qt 5 is necessary to build the GUI.\nTo build without GUI pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--without-gui"),"."),(0,i.kt)("p",null,"To build with Qt 5 you need the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install libqt5gui5 libqt5core5a libqt5dbus5 libqt5svg5-dev libqt5charts5-dev qttools5-dev qttools5-dev-tools libqrencode-dev\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Ubuntu versions prior to Bionic (18.04), and Debian version prior to Buster, do not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"libqt5charts5-dev")," package. If you are compiling on one of these older versions, you will need to omit ",(0,i.kt)("inlineCode",{parentName:"p"},"libqt5charts5-dev")," from the above command.")),(0,i.kt)("p",null,"Once these are installed, they will be found by configure and a pcoin-qt executable will be\nbuilt by default."),(0,i.kt)("h3",{id:"fedora"},"Fedora"),(0,i.kt)("h4",{id:"dependency-build-instructions-1"},"Dependency Build Instructions"),(0,i.kt)("p",null,"Build requirements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf install which gcc-c++ libtool make autoconf automake libevent-devel boost-devel libdb4-devel libdb4-cxx-devel gmp-devel libsodium-devel cargo python3\n")),(0,i.kt)("p",null,"Optional:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf install miniupnpc-devel libnatpmp-devel zeromq-devel\n")),(0,i.kt)("p",null,"To build with Qt 5 you need the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf install qt5-qttools-devel qt5-qtbase-devel qt5-qtsvg-devel qt5-qtcharts-devel qrencode-devel\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'The release is built with GCC and then "strip pcoind" to strip the debug\nsymbols, which reduces the executable size by about 90%.')),(0,i.kt)("h2",{id:"miniupnpc"},"miniupnpc"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://miniupnp.free.fr/"},"miniupnpc")," may be used for UPnP port mapping. It can be downloaded from ",(0,i.kt)("a",{parentName:"p",href:"http://miniupnp.tuxfamily.org/files/"},"here"),". UPnP support is compiled in and\nturned off by default. See the configure options for UPnp behavior desired:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"    --without-miniupnpc      No UPnP support, miniupnp not required\n    --disable-upnp-default   (the default) UPnP support turned off by default at runtime\n    --enable-upnp-default    UPnP support turned on by default at runtime\n")),(0,i.kt)("h2",{id:"libnatpmp"},"libnatpmp"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://miniupnp.tuxfamily.org/libnatpmp.html"},"libnatpmp")," may be used for NAT-PMP port mapping. It can be downloaded\nfrom ",(0,i.kt)("a",{parentName:"p",href:"https://miniupnp.tuxfamily.org/files/"},"here"),". NAT-PMP support is compiled in and\nturned off by default. See the configure options for NAT-PMP behavior desired:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"    --without-natpmp          No NAT-PMP support, libnatpmp not required\n    --disable-natpmp-default  (the default) NAT-PMP support turned off by default at runtime\n    --enable-natpmp-default   NAT-PMP support turned on by default at runtime\n")),(0,i.kt)("p",null,"To build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tar -xzvf miniupnpc-1.6.tar.gz\ncd miniupnpc-1.6\nmake\nsudo su\nmake install\n")),(0,i.kt)("h2",{id:"berkeley-db"},"Berkeley DB"),(0,i.kt)("p",null,"It is recommended to use Berkeley DB 4.8. If you have to build it yourself,\nyou can use the installation script included in contrib ",(0,i.kt)("inlineCode",{parentName:"p"},"/contrib/install_db4.sh"),"\nlike so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./contrib/install_db4.sh `pwd`\n")),(0,i.kt)("p",null,"from the root of the repository."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You only need Berkeley DB if the wallet is enabled (see ",(0,i.kt)("a",{parentName:"p",href:"#disable-wallet-mode"},(0,i.kt)("em",{parentName:"a"},"Disable-wallet mode")),").")),(0,i.kt)("h2",{id:"boost"},"Boost"),(0,i.kt)("p",null,"If you need to build Boost yourself:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo su\n./bootstrap.sh\n./bjam install\n")),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("p",null,"To help make your PCOIN Core installation more secure by making certain attacks impossible to\nexploit even if a vulnerability is found, binaries are hardened by default.\nThis can be disabled with:"),(0,i.kt)("p",null,"Hardening Flags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./configure --enable-hardening\n./configure --disable-hardening\n")),(0,i.kt)("p",null,"Hardening enables the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Position Independent Executable"),": Build position independent code to take advantage of Address Space Layout Randomization\noffered by some kernels. Attackers who can cause execution of code at an arbitrary memory\nlocation are thwarted if they don't know where anything useful is located.\nThe stack and heap are randomly located by default, but this allows the code section to be\nrandomly located as well."),(0,i.kt)("p",{parentName:"li"},'On an AMD64 processor where a library was not compiled with -fPIC, this will cause an error\nsuch as: "relocation R_X86_64_32 against `......\' can not be used when making a shared object;"'),(0,i.kt)("p",{parentName:"li"},"To test that you have built PIE executable, install scanelf, part of paxutils, and use:"),(0,i.kt)("p",{parentName:"li"},"scanelf -e ./pcoind"),(0,i.kt)("p",{parentName:"li"},"The output should contain:"),(0,i.kt)("p",{parentName:"li"},"TYPE\nET_DYN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Non-executable Stack"),": If the stack is executable then trivial stack-based buffer overflow exploits are possible if\nvulnerable buffers are found. By default, PCOIN Core should be built with a non-executable stack\nbut if one of the libraries it uses asks for an executable stack or someone makes a mistake\nand uses a compiler extension which requires an executable stack, it will silently build an\nexecutable without the non-executable stack protection."),(0,i.kt)("p",{parentName:"li"},"To verify that the stack is non-executable after compiling use:\n",(0,i.kt)("inlineCode",{parentName:"p"},"scanelf -e ./pcoind")),(0,i.kt)("p",{parentName:"li"},"The output should contain:\nSTK/REL/PTL\nRW- R-- RW-"),(0,i.kt)("p",{parentName:"li"},"The STK RW- means that the stack is readable and writeable but not executable."))),(0,i.kt)("h2",{id:"disable-wallet-mode"},"Disable-wallet mode"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This functionality is not yet completely implemented, and compilation using the below option will currently fail.")),(0,i.kt)("p",null,"When the intention is to run only a P2P node without a wallet, PCOIN Core may be compiled in\ndisable-wallet mode with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./configure --disable-wallet\n")),(0,i.kt)("p",null,"In this case there is no dependency on Berkeley DB 4.8."),(0,i.kt)("h2",{id:"additional-configure-flags"},"Additional Configure Flags"),(0,i.kt)("p",null,"A list of additional configure flags can be displayed with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./configure --help\n")),(0,i.kt)("h2",{id:"arm-cross-compilation"},"ARM Cross-compilation"),(0,i.kt)("p",null,"These steps can be performed on, for example, an Ubuntu VM. The depends system\nwill also work on other Linux distributions, however the commands for\ninstalling the toolchain will be different."),(0,i.kt)("p",null,"Make sure you install the build requirements mentioned above.\nThen, install the toolchain and curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install g++-arm-linux-gnueabihf curl\n")),(0,i.kt)("p",null,"To build executables for ARM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd depends\nmake HOST=arm-linux-gnueabihf NO_QT=1\ncd ..\n./autogen.sh\n./configure --prefix=$PWD/depends/arm-linux-gnueabihf --enable-glibc-back-compat --enable-reduce-exports LDFLAGS=-static-libstdc++\nmake\n")),(0,i.kt)("p",null,"For further documentation on the depends system check ",(0,i.kt)("a",{parentName:"p",href:"depends"},"depends"),"."))}m.isMDXComponent=!0}}]);