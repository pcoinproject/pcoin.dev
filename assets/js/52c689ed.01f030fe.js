"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[5020],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=l,b=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(b,r(r({ref:t},s),{},{components:n})):a.createElement(b,r({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},521:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(3117),l=n(102),o=(n(7294),n(4137)),r=["components"],i={title:"LNDhub Compatibility"},c=void 0,u={unversionedId:"PcoinPay/Guide/LNbank/LNDhub",id:"PcoinPay/Guide/LNbank/LNDhub",title:"LNDhub Compatibility",description:"LNbank offers a LNDhub-compatible API.",source:"@site/docs/PcoinPay/Guide/LNbank/LNDhub.md",sourceDirName:"PcoinPay/Guide/LNbank",slug:"/PcoinPay/Guide/LNbank/LNDhub",permalink:"/docs/PcoinPay/Guide/LNbank/LNDhub",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/PcoinPay/Guide/LNbank/LNDhub.md",tags:[],version:"current",frontMatter:{title:"LNDhub Compatibility"},sidebar:"tutorialSidebar",previous:{title:"LNbank",permalink:"/docs/PcoinPay/Guide/LNbank/"},next:{title:"Troubleshooting",permalink:"/docs/PcoinPay/Guide/LNbank/Troubleshooting"}},s={},p=[{value:"Importing the wallet",id:"importing-the-wallet",level:2},{value:"BlueWallet",id:"bluewallet",level:3},{value:"Zeus",id:"zeus",level:3},{value:"Alby",id:"alby",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LNbank offers a LNDhub-compatible API.\nThis means that LNbank wallets are usable with the following wallet apps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bluewallet.io/"},"BlueWallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zeusln.app/"},"Zeus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getalby.com/"},"Alby"))),(0,o.kt)("p",null,"These wallets offer import features, so that you can easily import your LNbank wallets into these apps."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'The prerequisite for a wallet to be accessible like this is having an access key with the admin permission tight to it.\nThe access keys can be managed by wallet admins on the LNbank wallet settings "Access Keys" page.')),(0,o.kt)("h2",{id:"importing-the-wallet"},"Importing the wallet"),(0,o.kt)("p",null,'In the wallet settings you will find the "Connect LNDhub-compatible wallet" section.\nIt has a QR code and the account URL, which contain the details (server URL and credentials) to connect the apps.'),(0,o.kt)("admonition",{title:"WARNING",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The credentials allow unrestricted access to your LNbank wallet.\nTreat the QR code and account URL as confidential information!")),(0,o.kt)("h3",{id:"bluewallet"},"BlueWallet"),(0,o.kt)("p",null,"In BlueWallet you can use this path to import the wallet:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Add Wallet > Import Wallet > Scan or import file"),"."),(0,o.kt)("p",null,"You can then scan the QR code from the LNbank wallet settings.\nOnce the wallet is imported, you can also set a name."),(0,o.kt)("h3",{id:"zeus"},"Zeus"),(0,o.kt)("p",null,"In Zeus you can use this path to import the wallet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the settings by clicking on the node icon in the top left corner."),(0,o.kt)("li",{parentName:"ul"},"In the settings click the node (first row) to get to the list of nodes."),(0,o.kt)("li",{parentName:"ul"},"Click the plus icon in the top right corner to add a new node/wallet.")),(0,o.kt)("p",null,"You will land on the following screen and have to \u2026"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Choose "LNDHub" as the "Node Interface"'),(0,o.kt)("li",{parentName:"ul"},'Enable the "Existing account" toggle'),(0,o.kt)("li",{parentName:"ul"},'Click the "Scan LNDHub QR" button and scan the code')),(0,o.kt)("h3",{id:"alby"},"Alby"),(0,o.kt)("p",null,'In the Alby account dropdown, choos "Add a new account".\nOn the "Add a new lightning account" choose "LNDHub (BlueWallet)".'),(0,o.kt)("p",null,'Now you can either copy and paste the account URL from the LNbank wallet settings page or scan the QR code.\nOnce the account is initialized, you should see a "Success!" message.'))}d.isMDXComponent=!0}}]);