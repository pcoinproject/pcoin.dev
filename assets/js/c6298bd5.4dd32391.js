"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[8137],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5736:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(3117),r=n(102),i=(n(7294),n(4137)),a=["components"],s={title:"Expectations for DNS Seed operators",sidebar_position:4},l=void 0,c={unversionedId:"Pcoin-Core/Development/dnsseed-policy",id:"Pcoin-Core/Development/dnsseed-policy",title:"Expectations for DNS Seed operators",description:"PCOIN Core attempts to minimize the level of trust in DNS seeds,",source:"@site/docs/Pcoin-Core/Development/dnsseed-policy.md",sourceDirName:"Pcoin-Core/Development",slug:"/Pcoin-Core/Development/dnsseed-policy",permalink:"/docs/Pcoin-Core/Development/dnsseed-policy",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Development/dnsseed-policy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Expectations for DNS Seed operators",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Unauthenticated REST Interface",permalink:"/docs/Pcoin-Core/Development/REST-interface"},next:{title:"PCOIN Core file system",permalink:"/docs/Pcoin-Core/Miscellaneous/files"}},p={},u=[{value:"See also",id:"see-also",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"PCOIN Core attempts to minimize the level of trust in DNS seeds,\nbut DNS seeds still pose a small amount of risk for the network.\nAs such, DNS seeds must be run by entities which have some minimum\nlevel of trust within the PCOIN community."),(0,i.kt)("p",null,"Other implementations of PCOIN software may also use the same\nseeds and may be more exposed. In light of this exposure, this\ndocument establishes some basic expectations for operating dnsseeds."),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A DNS seed operating organization or person is expected to follow good\nhost security practices, maintain control of applicable infrastructure,\nand not sell or transfer control of the DNS seed. Any hosting services\ncontracted by the operator are equally expected to uphold these expectations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The DNS seed results must consist exclusively of fairly selected and\nfunctioning PCOIN nodes from the public network to the best of the\noperators understanding and capability.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the avoidance of doubt, the results may be randomized but must not\nsingle-out any group of hosts to receive different results unless due to an\nurgent technical necessity and disclosed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The results may not be served with a DNS TTL of less than one minute.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Any logging of DNS queries should be only that which is necessary\nfor the operation of the service or urgent health of the PCOIN\nnetwork and must not be retained longer than necessary nor disclosed\nto any third party.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Information gathered as a result of the operators node-spidering\n(not from DNS queries) may be freely published or retained, but only\nif this data was not made more complete by biasing node connectivity\n(a violation of expectation (1)).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Operators are encouraged, but not required, to publicly document the\ndetails of their operating practices.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A reachable email contact address must be published for inquiries\nrelated to the DNS seed operation."))),(0,i.kt)("p",null,"If these expectations cannot be satisfied the operator should\ndiscontinue providing services and contact the active PCOIN\nCore development team."),(0,i.kt)("p",null,"Behavior outside of these expectations may be reasonable in some\nsituations but should be discussed in public in advance."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sipa/bitcoin-seeder"},"bitcoin-seeder")," is a reference implementation of a DNS seed.")))}m.isMDXComponent=!0}}]);