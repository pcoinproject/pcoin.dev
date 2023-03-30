"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[3061],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,y=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(3117),a=n(102),r=(n(7294),n(4137)),i=["components"],s={title:"Payouts",sidebar_position:17},l=void 0,u={unversionedId:"PcoinPay/Guide/Payouts",id:"PcoinPay/Guide/Payouts",title:"Payouts",description:"The payout functionality is tied into the Pull Payments. This feature allows you to create payouts within your PCOINPay.",source:"@site/docs/PcoinPay/Guide/Payouts.md",sourceDirName:"PcoinPay/Guide",slug:"/PcoinPay/Guide/Payouts",permalink:"/docs/PcoinPay/Guide/Payouts",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/PcoinPay/Guide/Payouts.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Payouts",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Refunds",permalink:"/docs/PcoinPay/Guide/PullPayments/Refund"},next:{title:"Apps",permalink:"/docs/PcoinPay/Guide/Apps"}},p={},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Example",id:"example",level:3},{value:"Using Greenfield API",id:"using-greenfield-api",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The payout functionality is tied into the ",(0,r.kt)("a",{parentName:"p",href:"./PullPayments"},"Pull Payments"),". This feature allows you to create payouts within your PCOINPay.\nThis feature allows you to process pull payment (refunds, salary payouts, or withdrawals)."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"We will go through two examples, one will be a Refund, and the other will be a salary payout."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's start with the refund example.\nThe customer has bought an item in your store but sadly has to return the item. They want a refund.\nWithin PCOINPay, you can create a ",(0,r.kt)("a",{parentName:"p",href:"/docs/PcoinPay/Guide/PullPayments/Refund"},"Refund")," and provide the customer with the link to claim their funds.\nWhenever the customer has given their address and claimed the funds, it will be shown in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Payouts"),"."),(0,r.kt)("p",null,"The first status it has is ",(0,r.kt)("inlineCode",{parentName:"p"},"Awaiting Approval"),".\nStore clerks can check if multiple ones are waiting, and after making the selection, you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions")," button."),(0,r.kt)("p",null,"Options on the action button"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Approve selected payouts"),(0,r.kt)("li",{parentName:"ul"},"Approve & send selected payouts"),(0,r.kt)("li",{parentName:"ul"},"Cancel selected payouts")),(0,r.kt)("p",null,"The next step is to ",(0,r.kt)("inlineCode",{parentName:"p"},"Approve & send selected payouts")," as we want to refund the customer.\nCheck the Customer's Address, shows the amount and if we want fees to be subtracted from the refund or not.\nOnce you've done the checks, only signing the transaction is left."),(0,r.kt)("p",null,"The customer now gets updated on the Claiming page. He can follow the transaction as he's provided with a link to a block explorer and his transaction.\nOnce the transaction has been confirmed, and the status changes to Completed."),(0,r.kt)("p",null,"Now let's get into Salary payout, as this is driven from inside the store and not per the Customer's request.\nThe underlying is the same; it uses the Pull payments. But instead of creating a refund, we will make a ",(0,r.kt)("a",{parentName:"p",href:"./PullPayments"},"Pull Payment"),"."),(0,r.kt)("p",null,"Goto the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pull Payments")," tab in your PCOINPay server.\nIn the top right, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Pull Payment")," Button."),(0,r.kt)("p",null,"Now we are in the creation of the Payout, give it a name and the desired amount in desired currency, fill out the Description, so the employee knows what it's about.\nThe next portion is similar to refunds. The employee fills out the Destination address and the amount he wants to claim from this Payout. He might decide to make it 2 separate claims, to different addresses, or even partly claim over lightning."),(0,r.kt)("p",null,"If there are multiple waiting Payouts, you can batch these to be signed and sent out. Once signed, the payouts move to the ",(0,r.kt)("inlineCode",{parentName:"p"},"In progress")," tab and show the Transaction.\nWhen accepted by the network, the payout moves to the Completed tab.\nThe completed tab is purely for historical purposes. It holds the processed Payouts and the transaction that belongs to it."),(0,r.kt)("h2",{id:"using-greenfield-api"},"Using Greenfield API"),(0,r.kt)("p",null,"As described in the ",(0,r.kt)("a",{parentName:"p",href:"./PullPayments#greenfield-api"},"Pull Payments")," Greenfield API allows for broader use of ",(0,r.kt)("inlineCode",{parentName:"p"},"Pull Payments"),".\nThe payout request will always go to the Payouts tab in your PCOINPay server whenever the concept is used.\nBy using the Greenfield API you could automate these requests, a future release of PCOINPay server presumably will have automation options for payouts."))}h.isMDXComponent=!0}}]);