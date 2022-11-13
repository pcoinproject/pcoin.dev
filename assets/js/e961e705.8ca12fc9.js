"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[4889],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2803:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var i=t(3117),o=t(102),r=(t(7294),t(4137)),a=["components"],s={title:"Sample init scripts and service configuration for pcoind",sidebar_position:5},l=void 0,p={unversionedId:"Pcoin-Core/Miscellaneous/init",id:"Pcoin-Core/Miscellaneous/init",title:"Sample init scripts and service configuration for pcoind",description:"Sample scripts and configuration files for systemd, Upstart and OpenRC",source:"@site/docs/Pcoin-Core/Miscellaneous/init.md",sourceDirName:"Pcoin-Core/Miscellaneous",slug:"/Pcoin-Core/Miscellaneous/init",permalink:"/docs/Pcoin-Core/Miscellaneous/init",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Miscellaneous/init.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Sample init scripts and service configuration for pcoind",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TOR SUPPORT IN PCOIN",permalink:"/docs/Pcoin-Core/Miscellaneous/tor"},next:{title:"Deploying your own PCOIN network",permalink:"/docs/Pcoin-Core/deploying-your-own-pcoin-netwok"}},c={},d=[{value:"Service User",id:"service-user",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Paths",id:"paths",level:2},{value:"Linux",id:"linux",level:3},{value:"macOS",id:"macos",level:3},{value:"Installing Service Configuration",id:"installing-service-configuration",level:2},{value:"systemd",id:"systemd",level:3},{value:"OpenRC",id:"openrc",level:3},{value:"Upstart (for Debian/Ubuntu based distributions)",id:"upstart-for-debianubuntu-based-distributions",level:3},{value:"CentOS",id:"centos",level:3},{value:"macOS",id:"macos-1",level:3},{value:"Auto-respawn",id:"auto-respawn",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sample scripts and configuration files for systemd, Upstart and OpenRC\ncan be found in the contrib/init folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    contrib/init/pcoind.service:    systemd service unit configuration\n    contrib/init/pcoind.openrc:     OpenRC compatible SysV style init script\n    contrib/init/pcoind.openrcconf: OpenRC conf.d file\n    contrib/init/pcoind.conf:       Upstart service configuration file\n    contrib/init/pcoind.init:       CentOS compatible SysV style init script\n")),(0,r.kt)("h2",{id:"service-user"},"Service User"),(0,r.kt)("p",null,'All three Linux startup configurations assume the existence of a "pcoin" user\nand group. They must be created before attempting to use these scripts.\nThe macOS configuration assumes pcoind will be set up for the current user.'),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"At a bare minimum, pcoind requires that the rpcpassword setting be set\nwhen running as a daemon. If the configuration file does not exist or this\nsetting is not set, pcoind will shutdown promptly after startup."),(0,r.kt)("p",null,"This password does not have to be remembered or typed as it is mostly used\nas a fixed token that pcoind and client programs read from the configuration\nfile, however it is recommended that a strong and secure password be used\nas this password is security critical to securing the wallet should the\nwallet be enabled."),(0,r.kt)("p",null,'If pcoind is run with the "-server" flag (set by default), and no rpcpassword is set,\nit will use a special cookie file for authentication. The cookie is generated with random\ncontent when the daemon starts, and deleted when it exits. Read access to this file\ncontrols who can access it through RPC.'),(0,r.kt)("p",null,"By default the cookie is stored in the data directory, but it's location can be overridden\nwith the option '-rpccookiefile'."),(0,r.kt)("p",null,"This allows for running pcoind without having to do any manual configuration."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"conf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pid"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," accept relative paths which are interpreted as\nrelative to the data directory. ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," ",(0,r.kt)("em",{parentName:"p"},"only")," supports relative paths."),(0,r.kt)("p",null,"For an example configuration file that describes the configuration settings,\nsee contrib/debian/examples/pcoin.conf."),(0,r.kt)("h2",{id:"paths"},"Paths"),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"All three configurations assume several paths that might need to be adjusted."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Binary: /usr/bin/pcoind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configuration file: /etc/pcoin/pcoin.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data directory: /var/lib/pcoind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PID file: ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/pcoind/pcoind.pid")," (OpenRC and Upstart) or ",(0,r.kt)("inlineCode",{parentName:"p"},"/run/pcoind/pcoind.pid")," (systemd)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lock file: ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lock/subsys/pcoind")," (CentOS)"))),(0,r.kt)("p",null,"The configuration file, PID directory (if applicable) and data directory\nshould all be owned by the pcoin user and group. It is advised for security\nreasons to make the configuration file and data directory only readable by the\npcoin user and group. Access to pcoin-cli and other pcoind rpc clients\ncan then be controlled by group membership."),(0,r.kt)("p",null,"NOTE: When using the systemd .service file, the creation of the aforementioned\ndirectories and the setting of their permissions is automatically handled by\nsystemd. Directories are given a permission of 710, giving the pcoin group\naccess to files under it ",(0,r.kt)("em",{parentName:"p"},"if")," the files themselves give permission to the\npcoin group to do so (e.g. when ",(0,r.kt)("inlineCode",{parentName:"p"},"-sysperms")," is specified). This does not allow\nfor the listing of files under the directory."),(0,r.kt)("p",null,"NOTE: It is not currently possible to override ",(0,r.kt)("inlineCode",{parentName:"p"},"datadir")," in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/pcoin/pcoin.conf")," with the current systemd, OpenRC, and Upstart init\nfiles out-of-the-box. This is because the command line options specified in the\ninit files take precedence over the configurations in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/pcoin/pcoin.conf"),". However, some init systems have their own\nconfiguration mechanisms that would allow for overriding the command line\noptions specified in the init files (e.g. setting ",(0,r.kt)("inlineCode",{parentName:"p"},"BITCOIND_DATADIR")," for\nOpenRC)."),(0,r.kt)("h3",{id:"macos"},"macOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Binary: ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/pcoind"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configuration file: ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/PCOIN/pcoin.conf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/PCOIN"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lock file: ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/PCOIN/.lock")))),(0,r.kt)("h2",{id:"installing-service-configuration"},"Installing Service Configuration"),(0,r.kt)("h3",{id:"systemd"},"systemd"),(0,r.kt)("p",null,"Installing this .service file consists of just copying it to\n/usr/lib/systemd/system directory, followed by the command\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload")," in order to update running systemd configuration."),(0,r.kt)("p",null,"To test, run ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start pcoind")," and to enable for system startup run\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl enable pcoind")),(0,r.kt)("p",null,"NOTE: When installing for systemd in Debian/Ubuntu the .service file needs to be copied to the /lib/systemd/system directory instead."),(0,r.kt)("h3",{id:"openrc"},"OpenRC"),(0,r.kt)("p",null,"Rename pcoind.openrc to pcoind and drop it in /etc/init.d. Double\ncheck ownership and permissions and make it executable. Test it with\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/init.d/pcoind start")," and configure it to run on startup with\n",(0,r.kt)("inlineCode",{parentName:"p"},"rc-update add pcoind")),(0,r.kt)("h3",{id:"upstart-for-debianubuntu-based-distributions"},"Upstart (for Debian/Ubuntu based distributions)"),(0,r.kt)("p",null,"Upstart is the default init system for Debian/Ubuntu versions older than 15.04. If you are using version 15.04 or newer and haven't manually configured upstart you should follow the systemd instructions instead."),(0,r.kt)("p",null,"Drop pcoind.conf in /etc/init. Test by running ",(0,r.kt)("inlineCode",{parentName:"p"},"service pcoind start"),"\nit will automatically start on reboot."),(0,r.kt)("p",null,"NOTE: This script is incompatible with CentOS 5 and Amazon Linux 2014 as they\nuse old versions of Upstart and do not supply the start-stop-daemon utility."),(0,r.kt)("h3",{id:"centos"},"CentOS"),(0,r.kt)("p",null,"Copy pcoind.init to /etc/init.d/pcoind. Test by running ",(0,r.kt)("inlineCode",{parentName:"p"},"service pcoind start"),"."),(0,r.kt)("p",null,"Using this script, you can adjust the path and flags to the pcoind program by\nsetting the PCOIND and FLAGS environment variables in the file\n/etc/sysconfig/pcoind. You can also use the DAEMONOPTS environment variable here."),(0,r.kt)("h3",{id:"macos-1"},"macOS"),(0,r.kt)("p",null,"Copy org.pcoin.pcoind.plist into ~/Library/LaunchAgents. Load the launch agent by\nrunning ",(0,r.kt)("inlineCode",{parentName:"p"},"launchctl load ~/Library/LaunchAgents/org.pcoin.pcoind.plist"),"."),(0,r.kt)("p",null,"This Launch Agent will cause pcoind to start whenever the user logs in."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This approach is intended for those wanting to run pcoind as the current user.\nYou will need to modify org.pcoin.pcoind.plist if you intend to use it as a\nLaunch Daemon with a dedicated pcoin user.")),(0,r.kt)("h2",{id:"auto-respawn"},"Auto-respawn"),(0,r.kt)("p",null,"Auto respawning is currently only configured for Upstart and systemd.\nReasonable defaults have been chosen but YMMV."))}m.isMDXComponent=!0}}]);