"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[9063],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(3117),a=n(102),o=(n(7294),n(4137)),i=["components"],l={title:"Refunds"},u=void 0,p={unversionedId:"PcoinPay/Guide/PullPayments/Refund",id:"PcoinPay/Guide/PullPayments/Refund",title:"Refunds",description:"If you are looking for information about requesting a refund from a merchant, please refer to this FAQ",source:"@site/docs/PcoinPay/Guide/PullPayments/Refund.md",sourceDirName:"PcoinPay/Guide/PullPayments",slug:"/PcoinPay/Guide/PullPayments/Refund",permalink:"/docs/PcoinPay/Guide/PullPayments/Refund",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/PcoinPay/Guide/PullPayments/Refund.md",tags:[],version:"current",frontMatter:{title:"Refunds"},sidebar:"tutorialSidebar",previous:{title:"Pull payments",permalink:"/docs/PcoinPay/Guide/PullPayments/"},next:{title:"Payouts",permalink:"/docs/PcoinPay/Guide/Payouts"}},c={},s=[{value:"Create a refund",id:"create-a-refund",level:2},{value:"Processing refund",id:"processing-refund",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are looking for information about requesting a refund from a merchant, please refer to this ",(0,o.kt)("a",{parentName:"p",href:"../../FAQ/General.md#what-if-i-have-a-problem-with-a-paid-invoice"},"FAQ"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Refunds")," are one of the applications built on top of the ",(0,o.kt)("a",{parentName:"p",href:"../PullPayments"},"Pull Payments")," feature."),(0,o.kt)("p",null,"On this page, we will walk you through the process of issuing a refund.\nThere are a short few steps to create the refund for the customer."),(0,o.kt)("h2",{id:"create-a-refund"},"Create a refund"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To refund an invoice, go in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoices")," page and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," on the invoice.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Issue a refund"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select refund's payment method")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," you want to refund")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Share the link of this page with your customer"))),(0,o.kt)("h2",{id:"processing-refund"},"Processing refund"),(0,o.kt)("p",null,"Once a customer clicks on the link you've provided adds their refund bitcoin/pcoin address and claims the invoice, the next step is to process a refund."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Payouts")," tab in your sidebar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the Payouts you want to process, go to actions and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Approve and send"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign and broadcast the transactions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The payout has now been signed and is in progress, awaiting confirmation on the blockchain. This is reflected to the claimant in their view.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After the transaction has been confirmed on the blockchain, the status of the payout will be ",(0,o.kt)("inlineCode",{parentName:"p"},"completed"),"."))),(0,o.kt)("p",null,"Customer's view after the refund has been successfully processed."))}f.isMDXComponent=!0}}]);