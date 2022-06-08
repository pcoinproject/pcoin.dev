"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[836],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,w=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(w,a(a({ref:t},d),{},{components:n})):o.createElement(w,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6630:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),i=n(3366),r=(n(7294),n(4137)),a=["components"],l={title:"Setting up Docker for Windows",sidebar_position:4},s=void 0,c={unversionedId:"Pcoin-Core/Building/gitian-building/docker-setup-windows",id:"Pcoin-Core/Building/gitian-building/docker-setup-windows",title:"Setting up Docker for Windows",description:"In this guide, we use Docker for Windows, which is required due to a compatibility issue with the Docker daemon running natively in WSL.",source:"@site/docs/Pcoin-Core/Building/gitian-building/docker-setup-windows.md",sourceDirName:"Pcoin-Core/Building/gitian-building",slug:"/Pcoin-Core/Building/gitian-building/docker-setup-windows",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/gitian-building/docker-setup-windows",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Building/gitian-building/docker-setup-windows.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Setting up Docker for Windows",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setting up Gitian on macOS",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/gitian-building/gitian-setup-mac"},next:{title:"Setting Up WSL",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/gitian-building/wsl-setup-windows"}},d={},u=[{value:"Downloading Docker for Windows",id:"downloading-docker-for-windows",level:2},{value:"Installing Docker for Windows",id:"installing-docker-for-windows",level:2},{value:"Enable Hyper-V",id:"enable-hyper-v",level:3},{value:"Additional Configuration",id:"additional-configuration",level:2},{value:"Expose the Docker service to local TCP requests",id:"expose-the-docker-service-to-local-tcp-requests",level:3},{value:"Set the CPU/RAM Limits",id:"set-the-cpuram-limits",level:3},{value:"Proceed to WSL Installation",id:"proceed-to-wsl-installation",level:2}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide, we use Docker for Windows, which is required due to a compatibility issue with the Docker daemon running natively in WSL."),(0,r.kt)("p",null,"Installation and setup of Docker for Windows itself is fairly straight forward, but there are a couple considerations of note below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Table of Contents")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#downloading-docker-for-windows"},"Downloading Docker for Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installing-docker-for-windows"},"Installing Docker for Windows"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-hyper-v"},"Enable Hyper-V")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#additional-configuration"},"Additional Configuration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#expose-the-docker-service-to-local-tcp-requests"},"Expose the Docker service to local TCP requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-the-cpuram-limits"},"Set the CPU/RAM Limits")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#proceed-to-wsl-installation"},"Proceed to WSL Installation"))),(0,r.kt)("h2",{id:"downloading-docker-for-windows"},"Downloading Docker for Windows"),(0,r.kt)("p",null,"First things first, head over to ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com"},"www.docker.com")," and download Docker Desktop for Windows. This requires registering for a free account, or you can download the latest stable release directly ",(0,r.kt)("a",{parentName:"p",href:"https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe"},"Here"),"."),(0,r.kt)("h2",{id:"installing-docker-for-windows"},"Installing Docker for Windows"),(0,r.kt)("p",null,"Once your download has finished, simply run the installer program and follow the on-screen prompts."),(0,r.kt)("p",null,"Make sure the checkbox to use windows containers is ",(0,r.kt)("strong",{parentName:"p"},"UNCKECKED"),":"),(0,r.kt)("p",null,"Once installation is complete, you will be prompted to log out of Windows:"),(0,r.kt)("h3",{id:"enable-hyper-v"},"Enable Hyper-V"),(0,r.kt)("p",null,"Docker for Windows relies on Hyper-V technology, and will prompt you to enable Hyper-V if it isn't already enabled."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Enabling Windows Hyper-V will prevent the use of some 3rd party virtualization apps such as Android Studio")),(0,r.kt)("h2",{id:"additional-configuration"},"Additional Configuration"),(0,r.kt)("p",null,"After logging out and back into Windows (or restarting), there are only a couple more steps needed in order to have Docker ready for use with Gitian. Both are done in the Docker for Windows Settings UI."),(0,r.kt)("p",null,'You can access the Settings UI by right-clicking on the Docker dock icon and selecting "Settings" from the menu.'),(0,r.kt)("h3",{id:"expose-the-docker-service-to-local-tcp-requests"},"Expose the Docker service to local TCP requests"),(0,r.kt)("p",null,"This step is required in order to allow the docker cli program from WSL to run containers and commands using the Docker for Windows service."),(0,r.kt)("p",null,'On the General tab, check the box next to "Expose daemon on..."\n',(0,r.kt)("em",{parentName:"p"},"Note: the warning here can be ignored with proper firewall settings")),(0,r.kt)("h3",{id:"set-the-cpuram-limits"},"Set the CPU/RAM Limits"),(0,r.kt)("p",null,"The default settings for the number of CPUs and Memory can work, but if your system has more resources to spare then it would speed up the gitian build process to allocate more resources."),(0,r.kt)("p",null,"Below are examples that will need to be adjusted to suit your specific machine, but the minimums would be 2 CPUs and 4GB Memory. Swap size and disk image max size defaults are fine."),(0,r.kt)("h2",{id:"proceed-to-wsl-installation"},"Proceed to WSL Installation"),(0,r.kt)("p",null,"Thats all you need to do for Docker for Windows installation and configuration."),(0,r.kt)("p",null,"Proceed to ",(0,r.kt)("a",{parentName:"p",href:"/pcoin.dev/docs/Pcoin-Core/Building/gitian-building/wsl-setup-windows"},"WSL Installation")," for instructions on Installing and configuring WSL."))}f.isMDXComponent=!0}}]);