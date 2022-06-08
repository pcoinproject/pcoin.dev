"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[964],{4137:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6665:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),l=["components"],i={title:"PCOIN Core file system",sidebar_position:1},d=void 0,s={unversionedId:"Pcoin-Core/Miscellaneous/files",id:"Pcoin-Core/Miscellaneous/files",title:"PCOIN Core file system",description:"Data directory location",source:"@site/docs/Pcoin-Core/Miscellaneous/files.md",sourceDirName:"Pcoin-Core/Miscellaneous",slug:"/Pcoin-Core/Miscellaneous/files",permalink:"/pcoin.dev/docs/Pcoin-Core/Miscellaneous/files",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Miscellaneous/files.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"PCOIN Core file system",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Expectations for DNS Seed operators",permalink:"/pcoin.dev/docs/Pcoin-Core/Development/dnsseed-policy"},next:{title:"Fuzzing PCOIN Core using libFuzzer",permalink:"/pcoin.dev/docs/Pcoin-Core/Miscellaneous/fuzzing"}},c={},p=[{value:"Data directory location",id:"data-directory-location",level:2},{value:"Data directory layout",id:"data-directory-layout",level:2}],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"data-directory-location"},"Data directory location"),(0,o.kt)("p",null,"The data directory is the default location where the PCOIN Core files are stored."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The default data directory paths for supported platforms are:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Platform"),(0,o.kt)("th",{parentName:"tr",align:null},"Data directory path"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Linux"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"$HOME/.pcoin/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"macOS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"$HOME/Library/Application Support/PCOIN/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Windows"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%APPDATA%\\PCOIN\\"))))),(0,o.kt)("h2",{id:"data-directory-layout"},"Data directory layout"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Filename"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"banlist.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"stores the IPs/Subnets of banned nodes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pcoin.conf"),(0,o.kt)("td",{parentName:"tr",align:null},"contains configuration settings for pcoind or pcoin-qt")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pcoind.pid"),(0,o.kt)("td",{parentName:"tr",align:null},"stores the process id of pcoind while running")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"blocks/blk000??.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"block data (custom, 128 MiB per file); since 0.8.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"blocks/rev000??.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"block undo data (custom); since 0.8.0 (format changed since pre-0.8)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"blocks/index/","*"),(0,o.kt)("td",{parentName:"tr",align:null},"block index (LevelDB); since 0.8.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chainstate/","*"),(0,o.kt)("td",{parentName:"tr",align:null},"blockchain state database (LevelDB); since 0.8.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"database/","*"),(0,o.kt)("td",{parentName:"tr",align:null},"BDB database environment; only used for wallet since 0.8.0; moved to wallets/ directory on new installs since 0.16.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"db.log"),(0,o.kt)("td",{parentName:"tr",align:null},"wallet database log file; moved to wallets/ directory on new installs since 0.16.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"debug.log"),(0,o.kt)("td",{parentName:"tr",align:null},"contains debug information and general logging generated by pcoind or pcoin-qt")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fee_estimates.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"stores statistics used to estimate minimum transaction fees and priorities required for confirmation; since 0.10.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mempool.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"dump of the mempool's transactions; since 5.0.2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"budget.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"stores data for budget objects")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"masternode.conf"),(0,o.kt)("td",{parentName:"tr",align:null},"contains configuration settings for remote masternodes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mncache.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"stores data for masternode list")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mnpayments.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"stores data for masternode payments")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"peers.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"peer IP address database (custom format); since 0.7.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wallet.dat"),(0,o.kt)("td",{parentName:"tr",align:null},"personal wallet (BDB) with keys and transactions; moved to wallets/ directory on new installs since 0.16.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".cookie"),(0,o.kt)("td",{parentName:"tr",align:null},"session RPC authentication cookie (written at start when cookie authentication is used, deleted on shutdown): since 0.12.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onion_private_key"),(0,o.kt)("td",{parentName:"tr",align:null},"cached Tor hidden service private key for ",(0,o.kt)("inlineCode",{parentName:"td"},"-listenonion"),": since 0.12.0")))))}m.isMDXComponent=!0}}]);