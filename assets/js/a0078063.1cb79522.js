"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[1354],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},668:function(e,t,n){n.r(t),n.d(t,{assets:function(){return O},contentTitle:function(){return g},default:function(){return x},frontMatter:function(){return w},metadata:function(){return k},toc:function(){return C}});var a=n(3117),l=n(102),r=n(7294),o=n(4137),i=n(4334),s=n(1048),u=n(3609),c=n(1943),p=n(2957),d="tabList__CuJ",m="tabItem_LNqP";function h(e){var t,n,l=e.lazy,o=e.block,s=e.defaultValue,h=e.values,f=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,u.l)(y,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.U)(),O=k.tabGroupChoices,C=k.setTabGroupChoices,N=(0,r.useState)(g),x=N[0],P=N[1],I=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=O[f];null!=E&&E!==x&&y.some((function(e){return e.value===E}))&&P(E)}var W=function(e){var t=e.currentTarget,n=I.indexOf(t),a=y[n].value;a!==x&&(T(t),P(a),null!=f&&C(f,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,l=I.indexOf(e.currentTarget)+1;n=null!=(a=I[l])?a:I[0];break;case"ArrowLeft":var r,o=I.indexOf(e.currentTarget)-1;n=null!=(r=I[o])?r:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},v)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:W,onClick:W},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function f(e){var t=(0,s.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}var v="tabItem_Ymn6";function b(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(v,a),hidden:n},t)}var y=["components"],w={title:"Installing the PCOIN Core Wallet",slug:"installing-the-pcoin-core-wallet",sidebar_position:1},g=void 0,k={unversionedId:"User-Guide/Pcoin-Wallet/installing_pcoin_core_wallet",id:"User-Guide/Pcoin-Wallet/installing_pcoin_core_wallet",title:"Installing the PCOIN Core Wallet",description:"System Requirements",source:"@site/docs/User-Guide/Pcoin-Wallet/installing_pcoin_core_wallet.md",sourceDirName:"User-Guide/Pcoin-Wallet",slug:"/User-Guide/Pcoin-Wallet/installing-the-pcoin-core-wallet",permalink:"/docs/User-Guide/Pcoin-Wallet/installing-the-pcoin-core-wallet",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/User-Guide/Pcoin-Wallet/installing_pcoin_core_wallet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installing the PCOIN Core Wallet",slug:"installing-the-pcoin-core-wallet",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"PCOIN Core Wallet",permalink:"/docs/User-Guide/Pcoin-Wallet/pcoin-core-wallet"},next:{title:"PCOIN Command Line Core Wallet",permalink:"/docs/User-Guide/Pcoin-Wallet/command-line-core-wallet"}},O={},C=[{value:"System Requirements",id:"system-requirements",level:3},{value:"Downloads",id:"downloads",level:3},{value:"Installation",id:"installation",level:3},{value:"Startup / initial synchronisation",id:"startup--initial-synchronisation",level:3},{value:"Upgrades",id:"upgrades",level:3}],N={toc:C};function x(e){var t=e.components,n=(0,l.Z)(e,y);return(0,o.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,o.kt)("p",null,"To run the PCOIN Core Wallet, you need a system with the following specificqtions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Operating System: Windows, Linux, or MacOS"),(0,o.kt)("li",{parentName:"ul"},"CPU: At least 2GHz"),(0,o.kt)("li",{parentName:"ul"},"RAM: 2GB (4GB recommended)"),(0,o.kt)("li",{parentName:"ul"},"Disk Space: At least 25GB available")),(0,o.kt)("h3",{id:"downloads"},"Downloads"),(0,o.kt)("p",null,"The latest version of the Core wallet can be found on (",(0,o.kt)("a",{parentName:"p",href:"https://pcoin.dev/downloads"},"https://pcoin.dev/downloads"),")."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Always download the Core wallet from the official website/Github")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)(f,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(b,{value:"win",label:"Windows",mdxType:"TabItem"},"1. Download the latest version of the Core Wallet from https://pcoin.dev/downloads ","\n","2. Run the installer and follow all steps. ","\n","3. Launch the PCOIN Core Wallet. ","\n"),(0,o.kt)(b,{value:"mac",label:"macOS",mdxType:"TabItem"},"1. Download the latest version of the Core Wallet from https://pcoin.org/downloads. ","\n","2. Run the installer and Copy the PCOIN App to Applications folder. ","\n","3. Launch the PCOIN Core Wallet. ","\n"),(0,o.kt)(b,{value:"linux",label:"Linux",mdxType:"TabItem"},"1. Navigate to the folder where you want to install the PCOIN Core Wallet (for example cd /home/pcoin/pcoin) ","\n","2. Download the latest version of the Core Wallet: get https://github.com/pcoinproject/pcoin/releases/download/v5.x.x/pcoin-5.x.x-xxx** (link from pcoin.dev website)  ","\n","3. Unzip the archive: tar -zxvf pcoin-5.x.x-aarch64-linux-gnu.tar.gz && sudo rm -f pcoin-5.x.x-aarch64-linux-gnu.tar.gz","\n","4. Navigate to the newly created folder cd pcoin-5.x.x ","\n","5. First install only: Install the Sapling parameters (Keys securing Shield transactions) by running the command ./install-params.sh ","\n","6. Launch the PCOIN server ./pcoind -daemon, or the PCOIN GUI client: ./pcoin-qt ","\n"))),(0,o.kt)("h3",{id:"startup--initial-synchronisation"},"Startup / initial synchronisation"),(0,o.kt)("p",null,"The first time you run the Core Wallet, the whole PCOIN blockchain will be downloaded locally and verified. This will take approximately 5 hours with a faast internet connection, and will require approximately 10GB of space on disk."),(0,o.kt)("p",null,"An empty wallet will also be created (stored in a ",(0,o.kt)("strong",{parentName:"p"},"wallet.dat")," file in the PCOIN data folder)."),(0,o.kt)("h3",{id:"upgrades"},"Upgrades"),(0,o.kt)("p",null,"The PCOIN Core Wallet is upgraded on a regular basis, in order to deliver new functionalities and fix bugs. There are two main types of releases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mandatory releases: The mandatory releases generally either add functionalities to the wallet or to the network (e.g. cold staking) and/or fix critical issues. They have to be installed by all users before a given date (enforcement date), that is communicated by the developers at the time the release is published."),(0,o.kt)("li",{parentName:"ul"},"Recommended/Optional releases: Optional releases are recommended for everyone but can generally be skipped safely. They either apply to only a subset of users (e.g. fix impacting masternodes only), or fix non-critical issues.")),(0,o.kt)("p",null,"!! NOTE All releases are communicated on the pcoin.org website and on the #important-updates channel of the PCOIN Discord server. It is critical to review them and install all updates before the enforcement block, in order to avoid technical issues that could result in lost PCOINs."),(0,o.kt)("p",null,"The procedure to upgrade the wallet is similar to an installation and is as easy as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Shutdown current version of the wallet."),(0,o.kt)("li",{parentName:"ul"},"Install the new version of the core wallet by following the procedure corresponding to your system."),(0,o.kt)("li",{parentName:"ul"},"Restart the core wallet using the newly installed version.")))}x.isMDXComponent=!0}}]);