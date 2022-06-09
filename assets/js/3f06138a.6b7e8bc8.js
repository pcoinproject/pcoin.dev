"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[43],{4137:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return m}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(i),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return i?n.createElement(g,o(o({ref:t},p),{},{components:i})):n.createElement(g,o({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4632:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=i(7462),a=i(3366),r=(i(7294),i(4137)),o=["components"],l={title:"Setting up Gitian on macOS",sidebar_position:3},s=void 0,c={unversionedId:"Pcoin-Core/Building/gitian-building/gitian-setup-mac",id:"Pcoin-Core/Building/gitian-building/gitian-setup-mac",title:"Setting up Gitian on macOS",description:"Now that Docker for Mac has been installed and configured properly, you're ready to do the initial setup of the Gitian build system.",source:"@site/docs/Pcoin-Core/Building/gitian-building/gitian-setup-mac.md",sourceDirName:"Pcoin-Core/Building/gitian-building",slug:"/Pcoin-Core/Building/gitian-building/gitian-setup-mac",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/gitian-building/gitian-setup-mac",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Building/gitian-building/gitian-setup-mac.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Setting up Gitian on macOS",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting up Docker for macOS",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/gitian-building/docker-setup-mac"},next:{title:"Setting up Docker for Windows",permalink:"/pcoin.dev/docs/Pcoin-Core/Building/gitian-building/docker-setup-windows"}},p={},u=[{value:"Installing Homebrew",id:"installing-homebrew",level:2},{value:"Required system packages",id:"required-system-packages",level:2},{value:"Configuring Git",id:"configuring-git",level:3},{value:"Fetching the Build Script",id:"fetching-the-build-script",level:2},{value:"Initial Gitian Setup",id:"initial-gitian-setup",level:2}],d={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that ",(0,r.kt)("a",{parentName:"p",href:"/pcoin.dev/docs/Pcoin-Core/Building/gitian-building/docker-setup-mac"},"Docker for Mac")," has been installed and configured properly, you're ready to do the initial setup of the Gitian build system."),(0,r.kt)("p",null,"The following steps will be performed using the terminal app, which can be accessed from the Applications/Utilities folder."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Table of Contents")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installing-homebrew"},"Installing Homebrew")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#required-system-packages"},"Required system packages"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuring-git"},"Configuring Git")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fetching-the-build-script"},"Fetching the Build Script")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#initial-gitian-setup"},"Initial Gitian Setup"))),(0,r.kt)("h2",{id:"installing-homebrew"},"Installing Homebrew"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is a macOS package manager (similar to apt or yum) that provides a plethora of libraries and software packages. We use it to provide compatibility with the gitian build process."),(0,r.kt)("p",null,"Installing ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is as easy as running the following command in the terminal app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,r.kt)("p",null,"This process will show a brief overview of what is going to be installed, and ask you if you wish to continue by pressing ENTER. After confirming that you wish to continue, you will be prompted to enter your password (macOS account password) to proceed."),(0,r.kt)("h2",{id:"required-system-packages"},"Required system packages"),(0,r.kt)("p",null,"Python3 and Git are the two base requirements that need to be met for our build setup. Install them with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python3 git\n")),(0,r.kt)("h3",{id:"configuring-git"},"Configuring Git"),(0,r.kt)("p",null,"Once Git is installed, you will need to do some basic configuration to set your name and email. In the below command examples, it is good practice to use your GitHub username and email address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "GITHUB_USERNAME"\ngit config --global user.email "MY_NAME@example.com"\n')),(0,r.kt)("h2",{id:"fetching-the-build-script"},"Fetching the Build Script"),(0,r.kt)("p",null,"The build script we'll be using is contained in the PCOIN github repository (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pcoinproject/pcoin/blob/master/contrib/gitian-build.py"},"contrib/gitian-build.py"),"). Since this is a completely fresh environment, we haven't yet cloned the PCOIN repository and will need to fetch this script with the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -O https://raw.githubusercontent.com/pcoinproject/pcoin/master/contrib/gitian-build.py\nchmod +x gitian-build.py\n")),(0,r.kt)("p",null,"This will place the script in your home directory and make it executable."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"_","Changes to the script in the repository won't be automatically applied after fetching with the above commands. It is good practice to periodically re-run the above commands to ensure your version of the script is always up to date.","_"))),(0,r.kt)("h2",{id:"initial-gitian-setup"},"Initial Gitian Setup"),(0,r.kt)("p",null,"Now that the script has been downloaded to your home directory, its time to run it in setup mode. This will perform the following actions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the necessary system packages for gitian (namely the Docker cli tools)."),(0,r.kt)("li",{parentName:"ul"},"Clone the gitian-builder, gitian.sigs, pcoin-detached-sigs, and pcoin GitHub repos."),(0,r.kt)("li",{parentName:"ul"},"Configure proper user/group permissions for running gitian with Docker"),(0,r.kt)("li",{parentName:"ul"},"Create a base Docker image.")),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gitian-build.py --docker --setup\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"em"},"--docker")," option instructs the script to use Docker, and the ",(0,r.kt)("inlineCode",{parentName:"em"},"--setup")," option instructs the script to run the setup procedure.")))}m.isMDXComponent=!0}}]);