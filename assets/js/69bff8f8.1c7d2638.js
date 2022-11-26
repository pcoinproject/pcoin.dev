"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[6798],{4137:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return g}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(i),g=r,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||a;return i?n.createElement(m,o(o({ref:t},p),{},{components:i})):n.createElement(m,o({ref:t},p))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6667:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=i(3117),r=i(102),a=(i(7294),i(4137)),o=["components"],u={title:"Setting Up Gitian on Ubuntu and Debian",sidebar_position:7},l=void 0,s={unversionedId:"Pcoin-Core/Building/gitian-building/gitian-setup-ubuntu",id:"Pcoin-Core/Building/gitian-building/gitian-setup-ubuntu",title:"Setting Up Gitian on Ubuntu and Debian",description:"Ubuntu 18.04 is the preferred distribution, however anything 16.04 or newer should work. Debian only started including the Docker packages starting with Debian 10 (Buster).",source:"@site/docs/Pcoin-Core/Building/gitian-building/gitian-setup-ubuntu.md",sourceDirName:"Pcoin-Core/Building/gitian-building",slug:"/Pcoin-Core/Building/gitian-building/gitian-setup-ubuntu",permalink:"/docs/Pcoin-Core/Building/gitian-building/gitian-setup-ubuntu",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Building/gitian-building/gitian-setup-ubuntu.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Setting Up Gitian on Ubuntu and Debian",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Setting up Gitian on Windows WSL",permalink:"/docs/Pcoin-Core/Building/gitian-building/gitian-setup-windows"},next:{title:"Setting Up Gitian on Fedora and CentOS",permalink:"/docs/Pcoin-Core/Building/gitian-building/gitian-setup-fedora"}},p={},c=[{value:"Required System packages",id:"required-system-packages",level:2},{value:"Configuring Git",id:"configuring-git",level:3},{value:"Fetching the Build Script",id:"fetching-the-build-script",level:2},{value:"Initial Gitian Setup",id:"initial-gitian-setup",level:2}],d={toc:c};function g(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ubuntu 18.04 is the preferred distribution, however anything 16.04 or newer should work. Debian only started including the Docker packages starting with Debian 10 (Buster)."),(0,a.kt)("p",null,"The following steps will be performed using the terminal"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table of Contents")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#required-system-packages"},"Required system packages"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuring-git"},"Configuring Git")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#fetching-the-build-script"},"Fetching the Build Script")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#initial-gitian-setup"},"Initial Gitian Setup"))),(0,a.kt)("h2",{id:"required-system-packages"},"Required System packages"),(0,a.kt)("p",null,"The only base package that is absolutely required prior to using the gitian-build.py script is Python 3. All other packages will be installed automatically. That said, you should make note of the Git configuration mentioned below:"),(0,a.kt)("h3",{id:"configuring-git"},"Configuring Git"),(0,a.kt)("p",null,"Some basic configuration of Git to set your name and email is necessary. In the below command examples, it is good practice to use your GitHub username and email address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "GITHUB_USERNAME"\ngit config --global user.email "MY_NAME@example.com"\n')),(0,a.kt)("h2",{id:"fetching-the-build-script"},"Fetching the Build Script"),(0,a.kt)("p",null,"The build script we'll be using is contained in the PCOIN github repository (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pcoinproject/pcoin/blob/master/contrib/gitian-build.py"},"contrib/gitian-build.py"),"). Since this is a completely fresh environment, we haven't yet cloned the PCOIN repository and will need to fetch this script with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -O https://raw.githubusercontent.com/pcoinproject/pcoin/master/contrib/gitian-build.py\nchmod +x gitian-build.py\n")),(0,a.kt)("p",null,"This will place the script in your home directory and make it executable."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Changes to the script in the repository won't be automatically applied after fetching with the above commands. It is good practice to periodically re-run the above commands to ensure your version of the script is always up to date."))),(0,a.kt)("h2",{id:"initial-gitian-setup"},"Initial Gitian Setup"),(0,a.kt)("p",null,"Now that the script has been downloaded to your home directory, its time to run it in setup mode. This will perform the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the necessary system packages for gitian (namely Docker and it's related cli tools)."),(0,a.kt)("li",{parentName:"ul"},"Clone the gitian-builder, gitian.sigs, pcoin-detached-sigs, and pcoin GitHub repos."),(0,a.kt)("li",{parentName:"ul"},"Configure proper user/group permissions for running gitian with Docker"),(0,a.kt)("li",{parentName:"ul"},"Create a base Docker image.")),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gitian-build.py --docker --setup\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"em"},"--docker")," option instructs the script to use Docker, and the ",(0,a.kt)("inlineCode",{parentName:"em"},"--setup")," option instructs the script to run the setup procedure.")),(0,a.kt)("p",null,"If Docker is not already installed on the system, it will be installed, configured to start automatically at system startup, and your user will be added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," group. Afterwards, you will be prompted to restart your system. This is necessary in order for the user group change to take effect."),(0,a.kt)("p",null,"After restarting your computer, run the command again to finish the setup process"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gitian-build.py --docker --setup\n")))}g.isMDXComponent=!0}}]);