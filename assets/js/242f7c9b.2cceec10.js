"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[7126],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),y=r,d=m["".concat(u,".").concat(y)]||m[y]||c[y]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(4137)),i=["components"],s={title:"Payment Requests",sidebar_position:15},u=void 0,l={unversionedId:"PcoinPay/Guide/PaymentRequests",id:"PcoinPay/Guide/PaymentRequests",title:"Payment Requests",description:"Payment Requests are a feature which allows PCOINPay store owners to create long-lived invoices.",source:"@site/docs/PcoinPay/Guide/PaymentRequests.md",sourceDirName:"PcoinPay/Guide",slug:"/PcoinPay/Guide/PaymentRequests",permalink:"/docs/PcoinPay/Guide/PaymentRequests",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/PcoinPay/Guide/PaymentRequests.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Payment Requests",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"What is an invoice in PCOINPay Server?",permalink:"/docs/PcoinPay/Guide/Invoices"},next:{title:"Pull payments",permalink:"/docs/PcoinPay/Guide/PullPayments/"}},p={},c=[{value:"Customize Your Payment Requests",id:"customize-your-payment-requests",level:2},{value:"Create a Payment Request",id:"create-a-payment-request",level:2},{value:"Paid Request for Payment",id:"paid-request-for-payment",level:2},{value:"Customize Payment Requests",id:"customize-payment-requests",level:2}],m={toc:c};function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Payment Requests are a feature which allows PCOINPay store owners to create long-lived invoices.\nFunds paid to a payment request use the exchange rate at the time of payment.\nThis allows users to make payments at their convenience without having to negotiate or verify exchange rates with the store owner at the time of payment."),(0,o.kt)("p",null,"Users can pay requests in partial payments.\nThe payment request will remain valid until it is paid in full or if the store owner requires an expiration time.\nAddresses are never reused. A new address is generated each time the user clicks pay to create an invoice for the payment request."),(0,o.kt)("p",null,"Store owners can also print payment requests (or export invoice data) for record keeping and accounting.\nPCOINPay automatically labels invoices as Payment Requests in your store's invoice list."),(0,o.kt)("h2",{id:"customize-your-payment-requests"},"Customize Your Payment Requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Invoice Amount")," - Set Requested Payment Amount"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Denomination")," - Show Requested Amount in Fiat or Cryptocurrency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Quantity")," - Allow only single payments or partial payments"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Expiration Time")," - Allow payments until a date or without expiry"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description")," - Text Editor, Data Tables, Embed Photos & Videos"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Appearance")," - Color and Style with CSS Themes")),(0,o.kt)("h2",{id:"create-a-payment-request"},"Create a Payment Request"),(0,o.kt)("p",null,"Click Payment Requests > Create new payment request"),(0,o.kt)("p",null,"Provide the Request Name, Amount, Display Denomination, Associated Store, Expiration Time & Description (Optional)"),(0,o.kt)("p",null,"Select the option ",(0,o.kt)("em",{parentName:"p"},"Allow payee to create invoices in their own denomination")," if you want to allow partial payments to be made."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Payment requests are store-dependent, which means that each payment request is associated with a store during creation.\nBe sure to have a wallet connected to your store which the payment request belongs to.")),(0,o.kt)("p",null,"Click Save & View to review your payment request."),(0,o.kt)("p",null,"PCOINPay creates a URL for the payment request. Share this URL to view your payment request."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Need multiple of the same request ? You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Clone")," option in the main menu to duplicate payment requests.")),(0,o.kt)("h2",{id:"paid-request-for-payment"},"Paid Request for Payment"),(0,o.kt)("p",null,"Both the payee and requester can view the status of the payment request after sending payment.\nThe status will appear as ",(0,o.kt)("strong",{parentName:"p"},"Settled")," if payment has been received in full.\nIf only partial payment was made, the Amount Due will show the balance due."),(0,o.kt)("h2",{id:"customize-payment-requests"},"Customize Payment Requests"),(0,o.kt)("p",null,"The request's description content can be edited using the payment request's text editor.\nIf you want to use additional color themes or custom css styling, both options are available."),(0,o.kt)("p",null,"Non-technical users can use a ",(0,o.kt)("a",{parentName:"p",href:"../Development/Theme.md#2-bootstrap-themes"},"bootstrap theme"),".\nFurther customization can be done by providing additional CSS code, like shown below \u2026"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},':root {\n  --pcoinpay-font-family-base: "Source Sans Pro", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  --pcoinpay-primary: #7d4698;\n  --pcoinpay-primary-accent: #59316b;\n  --pcoinpay-body-text: #333a41;\n  --pcoinpay-body-bg: #fff;\n  --pcoinpay-bg-tile: #f8f9fa;\n}\n#mainNav {\n  color: white;\n  background: linear-gradient(#59316b, #331840);\n}\n#mainNav .btn-link {\n  color: white;\n}\n')))}y.isMDXComponent=!0}}]);