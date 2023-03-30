"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[5324],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return y}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),y=i,h=d["".concat(p,".").concat(y)]||d[y]||c[y]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3114:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(3117),i=a(102),o=(a(7294),a(4137)),r=["components"],l={title:"Payjoin",sidebar_position:20},p="PCOINPay Server Payjoin Guide",s={unversionedId:"PcoinPay/Guide/Payjoin",id:"PcoinPay/Guide/Payjoin",title:"Payjoin",description:"This document explains how to use PCOINPay Server's Payjoin feature. For a detailed, technical explanation of how payjoin is implemented, check BIP78",source:"@site/docs/PcoinPay/Guide/Payjoin.md",sourceDirName:"PcoinPay/Guide",slug:"/PcoinPay/Guide/Payjoin",permalink:"/docs/PcoinPay/Guide/Payjoin",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/PcoinPay/Guide/Payjoin.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Payjoin",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Accounting",permalink:"/docs/PcoinPay/Guide/Accounting"},next:{title:"WooCommerce",permalink:"/docs/PcoinPay/Guide/WooCommerce"}},u={},c=[{value:"Enabling Payjoin as a merchant",id:"enabling-payjoin-as-a-merchant",level:2},{value:"Paying to Payjoin as a user",id:"paying-to-payjoin-as-a-user",level:2},{value:"Why did a payjoin not happen?",id:"why-did-a-payjoin-not-happen",level:2},{value:"Supported wallets",id:"supported-wallets",level:2}],d={toc:c};function y(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pcoinpay-server-payjoin-guide"},"PCOINPay Server Payjoin Guide"),(0,o.kt)("p",null,"This document explains how to use PCOINPay Server's ",(0,o.kt)("strong",{parentName:"p"},"Payjoin")," feature. For a detailed, technical explanation of how payjoin is implemented, check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki"},"BIP78")),(0,o.kt)("h2",{id:"enabling-payjoin-as-a-merchant"},"Enabling Payjoin as a merchant"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a store"),(0,o.kt)("li",{parentName:"ol"},"Configure a ",(0,o.kt)("a",{parentName:"li",href:"/docs/PcoinPay/Guide/WalletSetup/CreateWallet#hot-wallet"},"hot wallet")," for your derivation scheme. Be sure to use either segwit or segwit wrapped as the address type."),(0,o.kt)("li",{parentName:"ol"},'Enable Payjoin/P2EP in the "General Settings" and click "Save"')),(0,o.kt)("p",null,"It's important to note that you will need at least 1 UTXO for payjoin to work."),(0,o.kt)("h2",{id:"paying-to-payjoin-as-a-user"},"Paying to Payjoin as a user"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/PcoinPay/Guide/Wallet/"},"PCOINPay Wallet")," supports Payjoin."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Retrieve the BIP21 payment link from a PCOINPay Server invoice which has payjoin enabled by either:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Scan the QR code with the camera scanning feature"),(0,o.kt)("li",{parentName:"ul"},'Copy the link from the "Open in wallet" button and paste it in the "Parse BIP21" prompt'))),(0,o.kt)("li",{parentName:"ol"},'The send form should be populated with the payment details. You can check if the invoice supports payjoin by expanding "advanced settings" to see if there is a "Payjoin endpoint" input with a url.'),(0,o.kt)("li",{parentName:"ol"},"Sign your transaction using either PCOINPay Server's hardware wallet support via ",(0,o.kt)("a",{parentName:"li",href:"./HardwareWalletIntegration.md"},"PCOINPay Vault")," or the ",(0,o.kt)("a",{parentName:"li",href:"/docs/PcoinPay/Guide/WalletSetup/CreateWallet#hot-wallet"},"hot wallet")," feature."),(0,o.kt)("li",{parentName:"ol"},"Once your original transaction is ready, you will be given the option to either ",(0,o.kt)("inlineCode",{parentName:"li"},"Broadcast (Payjoin)")," or to ",(0,o.kt)("inlineCode",{parentName:"li"},"Broadcast (Simple)"),". Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Broadcast (Payjoin)"),"."),(0,o.kt)("li",{parentName:"ol"},"The payjoin server will propose a new special transaction, if possible. If the payjoin server is unable to do the payjoin, the original transaction is broadcast instead."),(0,o.kt)("li",{parentName:"ol"},"If you are using a hardware wallet, you will be asked to sign the payjoin transaction again (the hot wallet feature signs the transaction for you automatically)."),(0,o.kt)("li",{parentName:"ol"},"Congratulations, you've just helped improve Bitcoin's fungibility and your financial sovereignty!")),(0,o.kt)("h2",{id:"why-did-a-payjoin-not-happen"},"Why did a payjoin not happen?"),(0,o.kt)("p",null,"There's multiple reasons for this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The store did not have any utxos to contribute towards a payjoin"),(0,o.kt)("li",{parentName:"ul"},"Your wallet does not use the same format as the store's (essential to not raise suspicion to analysis companies)"),(0,o.kt)("li",{parentName:"ul"},"You are not using segwit or p2sh wrapped segwit."),(0,o.kt)("li",{parentName:"ul"},"The payjoin server is not available")),(0,o.kt)("h2",{id:"supported-wallets"},"Supported wallets"),(0,o.kt)("p",null,"Please contact and encourage your wallet developers to add support. The more widespread the ",(0,o.kt)("strong",{parentName:"p"},"usage of payjoin"),", the more broken the heuristics used by blockchain analysis companies become and can effectively trace your financial history."))}y.isMDXComponent=!0}}]);