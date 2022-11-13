"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[6042],{4137:function(e,n,o){o.d(n,{Zo:function(){return u},kt:function(){return h}});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return o?t.createElement(m,a(a({ref:n},u),{},{components:o})):t.createElement(m,a({ref:n},u))}));function h(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9618:function(e,n,o){o.r(n),o.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var t=o(3117),r=o(102),i=(o(7294),o(4137)),a=["components"],s={title:"TOR SUPPORT IN PCOIN",sidebar_position:4},l=void 0,c={unversionedId:"Pcoin-Core/Miscellaneous/tor",id:"Pcoin-Core/Miscellaneous/tor",title:"TOR SUPPORT IN PCOIN",description:"It is possible to run PCOIN Core as a Tor onion service, and connect to such services.",source:"@site/docs/Pcoin-Core/Miscellaneous/tor.md",sourceDirName:"Pcoin-Core/Miscellaneous",slug:"/Pcoin-Core/Miscellaneous/tor",permalink:"/docs/Pcoin-Core/Miscellaneous/tor",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/Pcoin-Core/Miscellaneous/tor.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"TOR SUPPORT IN PCOIN",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Reduce Memory",permalink:"/docs/Pcoin-Core/Miscellaneous/reduce-memory"},next:{title:"Sample init scripts and service configuration for pcoind",permalink:"/docs/Pcoin-Core/Miscellaneous/init"}},u={},d=[{value:"Compatibility",id:"compatibility",level:2},{value:"How to see information about your Tor configuration via PCOIN Core",id:"how-to-see-information-about-your-tor-configuration-via-pcoin-core",level:2},{value:"1. Run PCOIN Core behind a Tor proxy",id:"1-run-pcoin-core-behind-a-tor-proxy",level:2},{value:"2. Automatically create a PCOIN Core onion service",id:"2-automatically-create-a-pcoin-core-onion-service",level:2},{value:"Control Port",id:"control-port",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Cookie authentication",id:"cookie-authentication",level:4},{value:"<code>torpassword</code> authentication",id:"torpassword-authentication",level:4},{value:"3. Manually create a PCOIN Core onion service",id:"3-manually-create-a-pcoin-core-onion-service",level:2},{value:"4. Privacy recommendations",id:"4-privacy-recommendations",level:2}],p={toc:d};function h(e){var n=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is possible to run PCOIN Core as a Tor onion service, and connect to such services."),(0,i.kt)("p",null,"The following directions assume you have a Tor proxy running on port 9050. Many distributions default to having a SOCKS proxy listening on port 9050, but others may not. In particular, the Tor Browser Bundle defaults to listening on port 9150. See ",(0,i.kt)("a",{parentName:"p",href:"https://www.torproject.org/docs/faq.html.en#TBBSocksPort"},"Tor Project FAQ:TBBSocksPort")," for how to properly\nconfigure Tor."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PCOIN Core only supports Tor version 3 hidden\nservices (Tor v3). Tor v2 addresses are ignored by PCOIN Core and neither\nrelayed nor stored.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tor removed v2 support beginning with version 0.4.6."))),(0,i.kt)("h2",{id:"how-to-see-information-about-your-tor-configuration-via-pcoin-core"},"How to see information about your Tor configuration via PCOIN Core"),(0,i.kt)("p",null,"There are several ways to see your local onion address in PCOIN Core:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'in the debug log (grep for "tor:" or "AddLocal")'),(0,i.kt)("li",{parentName:"ul"},"in the output of RPC ",(0,i.kt)("inlineCode",{parentName:"li"},"getnetworkinfo"),' in the "localaddresses" section'),(0,i.kt)("li",{parentName:"ul"},"in the output of the CLI ",(0,i.kt)("inlineCode",{parentName:"li"},"-netinfo")," peer connections dashboard")),(0,i.kt)("p",null,"You may set the ",(0,i.kt)("inlineCode",{parentName:"p"},"-debug=tor")," config logging option to have additional\ninformation in the debug log about your Tor configuration."),(0,i.kt)("p",null,"CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"-addrinfo")," returns the number of addresses known to your node per network\ntype, including Tor v2 and v3. This is useful to see how many onion addresses\nare known to your node for ",(0,i.kt)("inlineCode",{parentName:"p"},"-onlynet=onion")," and how many Tor v3 addresses it\nknows when upgrading to PCOIN Core v5.3.0 and up that supports Tor v3 only."),(0,i.kt)("h2",{id:"1-run-pcoin-core-behind-a-tor-proxy"},"1. Run PCOIN Core behind a Tor proxy"),(0,i.kt)("p",null,"The first step is running PCOIN Core behind a Tor proxy. This will already anonymize all\noutgoing connections, but more is possible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    -proxy=ip:port  Set the proxy server. If SOCKS5 is selected (default), this proxy\n                    server will be used to try to reach .onion addresses as well.\n                    You need to use -noonion or -onion=0 to explicitly disable\n                    outbound access to onion services.\n\n    -onion=ip:port  Set the proxy server to use for Tor onion services. You do not\n                    need to set this if it's the same as -proxy. You can use -onion=0\n                    to explicitly disable access to onion services.\n                    Note: Only the -proxy option sets the proxy for DNS requests;\n                    with -onion they will not route over Tor, so use -proxy if you\n                    have privacy concerns.\n\n    -listen         When using -proxy, listening is disabled by default. If you want\n                    to manually configure an onion service (see section 3), you'll\n                    need to enable it explicitly.\n\n    -connect=X      When behind a Tor proxy, you can specify .onion addresses instead\n    -addnode=X      of IP addresses or hostnames in these parameters. It requires\n    -seednode=X     SOCKS5. In Tor mode, such addresses can also be exchanged with\n                    other P2P nodes.\n\n    -onlynet=onion  Make outgoing connections only to .onion addresses. Incoming\n                    connections are not affected by this option. This option can be\n                    specified multiple times to allow multiple network types, e.g.\n                    ipv4, ipv6 or onion. If you use this option with values other\n                    than onion you *cannot* disable onion connections; outgoing onion\n                    connections will be enabled when you use -proxy or -onion. Use\n                    -noonion or -onion=0 if you want to be sure there are no outbound\n                    onion connections over the default proxy or your defined -proxy.\n")),(0,i.kt)("p",null,"In a typical situation, this suffices to run behind a Tor proxy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./pcoind -proxy=127.0.0.1:9050\n")),(0,i.kt)("h2",{id:"2-automatically-create-a-pcoin-core-onion-service"},"2. Automatically create a PCOIN Core onion service"),(0,i.kt)("p",null,"PCOIN Core makes use of Tor's control socket API to create and destroy\nephemeral onion services programmatically. This means that if Tor is running and\nproper authentication has been configured, PCOIN Core automatically creates an\nonion service to listen on. The goal is to increase the number of available\nonion nodes."),(0,i.kt)("p",null,"This feature is enabled by default if PCOIN Core is listening (",(0,i.kt)("inlineCode",{parentName:"p"},"-listen"),") and\nit requires a Tor connection to work. It can be explicitly disabled with\n",(0,i.kt)("inlineCode",{parentName:"p"},"-listenonion=0"),". If it is not disabled, it can be configured using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"-torcontrol")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-torpassword")," settings."),(0,i.kt)("p",null,"To see verbose Tor information in the pcoind debug log, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"-debug=tor"),"."),(0,i.kt)("h3",{id:"control-port"},"Control Port"),(0,i.kt)("p",null,"You may need to set up the Tor Control Port. On Linux distributions there may be\nsome or all of the following settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/tor/torrc"),", generally commented\nout by default (if not, add them):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ControlPort 9051\nCookieAuthentication 1\nCookieAuthFileGroupReadable 1\n")),(0,i.kt)("p",null,"Add or uncomment those, save, and restart Tor (usually ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl restart tor"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart tor")," on most systemd-based systems, including recent\nDebian and Ubuntu, or just restart the computer)."),(0,i.kt)("p",null,"On some systems (such as Arch Linux), you may also need to add the following\nline:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DataDirectoryGroupReadable 1\n")),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Connecting to Tor's control socket API requires one of two authentication\nmethods to be configured: cookie authentication or pcoind's ",(0,i.kt)("inlineCode",{parentName:"p"},"-torpassword"),"\nconfiguration option."),(0,i.kt)("h4",{id:"cookie-authentication"},"Cookie authentication"),(0,i.kt)("p",null,"For cookie authentication, the user running pcoind must have read access to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"CookieAuthFile")," specified in the Tor configuration. In some cases this is\npreconfigured and the creation of an onion service is automatic. Don't forget to\nuse the ",(0,i.kt)("inlineCode",{parentName:"p"},"-debug=tor")," pcoind configuration option to enable Tor debug logging."),(0,i.kt)("p",null,"If a permissions problem is seen in the debug log, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"tor: Authentication cookie /run/tor/control.authcookie could not be opened (check permissions)"),", it\ncan be resolved by adding both the user running Tor and the user running\npcoind to the same Tor group and setting permissions appropriately."),(0,i.kt)("p",null,"On Debian-derived systems, the Tor group will likely be ",(0,i.kt)("inlineCode",{parentName:"p"},"debian-tor"),' and one way\nto verify could be to list the groups and grep for a "tor" group name:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"getent group | cut -d: -f1 | grep -i tor\n")),(0,i.kt)("p",null,"You can also check the group of the cookie file. On most Linux systems, the Tor\nauth cookie will usually be ",(0,i.kt)("inlineCode",{parentName:"p"},"/run/tor/control.authcookie"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"stat -c '%G' /run/tor/control.authcookie\n")),(0,i.kt)("p",null,"Once you have determined the ",(0,i.kt)("inlineCode",{parentName:"p"},"${TORGROUP}")," and selected the ",(0,i.kt)("inlineCode",{parentName:"p"},"${USER}")," that will\nrun pcoind, run this as root:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"usermod -a -G ${TORGROUP} ${USER}\n")),(0,i.kt)("p",null,"Then restart the computer (or log out) and log in as the ",(0,i.kt)("inlineCode",{parentName:"p"},"${USER}")," that will run\npcoind."),(0,i.kt)("h4",{id:"torpassword-authentication"},(0,i.kt)("inlineCode",{parentName:"h4"},"torpassword")," authentication"),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"-torpassword=password")," option, the password is the clear text form that\nwas used when generating the hashed password for the ",(0,i.kt)("inlineCode",{parentName:"p"},"HashedControlPassword"),"\noption in the Tor configuration file."),(0,i.kt)("p",null,"The hashed password can be obtained with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"tor --hash-password password")," (refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://2019.www.torproject.org/docs/tor-manual.html.en"},"Tor Dev\nManual")," for more\ndetails)."),(0,i.kt)("h2",{id:"3-manually-create-a-pcoin-core-onion-service"},"3. Manually create a PCOIN Core onion service"),(0,i.kt)("p",null,"You can also manually configure your node to be reachable from the Tor network.\nAdd these lines to your ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/tor/torrc")," (or equivalent config file):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HiddenServiceDir /var/lib/tor/pcoin-service/\nHiddenServicePort 22501 127.0.0.1:22501\n")),(0,i.kt)("p",null,"The directory can be different of course, but virtual port numbers should be equal to\nyour pcoind's P2P listen port (22501 by default), and target addresses and ports\nshould be equal to binding address and port for inbound Tor connections (127.0.0.1:22501 by default)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    -externalip=X   You can tell pcoin about its publicly reachable addresses using\n                    this option, and this can be an onion address. Given the above\n                    configuration, you can find your onion address in\n                    /var/lib/tor/pcoin-service/hostname. For connections\n                    coming from unroutable addresses (such as 127.0.0.1, where the\n                    Tor proxy typically runs), onion addresses are given\n                    preference for your node to advertise itself with.\n\n                    You can set multiple local addresses with -externalip. The\n                    one that will be rumoured to a particular peer is the most\n                    compatible one and also using heuristics, e.g. the address\n                    with the most incoming connections, etc.\n\n    -listen         You'll need to enable listening for incoming connections, as this\n                    is off by default behind a proxy.\n\n    -discover       When -externalip is specified, no attempt is made to discover local\n                    IPv4 or IPv6 addresses. If you want to run a dual stack, reachable\n                    from both Tor and IPv4 (or IPv6), you'll need to either pass your\n                    other addresses using -externalip, or explicitly enable -discover.\n                    Note that both addresses of a dual-stack system may be easily\n                    linkable using traffic analysis.\n")),(0,i.kt)("p",null,"In a typical situation, where you're only reachable via Tor, this should suffice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./pcoind -proxy=127.0.0.1:9050 -externalip=7zvj7a2imdgkdbg4f2dryd5rgtrn7upivr5eeij4cicjh65pooxeshid.onion -listen\n")),(0,i.kt)("p",null,"(obviously, replace the .onion address with your own). It should be noted that you still\nlisten on all devices and another node could establish a clearnet connection, when knowing\nyour address. To mitigate this, additionally bind the address of your Tor proxy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./pcoind ... -bind=127.0.0.1\n")),(0,i.kt)("p",null,"If you don't care too much about hiding your node, and want to be reachable on IPv4\nas well, use ",(0,i.kt)("inlineCode",{parentName:"p"},"discover")," instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./pcoind ... -discover\n")),(0,i.kt)("p",null,"and open port 22501 on your firewall (or use port mapping, i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"-upnp")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-natpmp"),")."),(0,i.kt)("p",null,"If you only want to use Tor to reach .onion addresses, but not use it as a proxy\nfor normal IPv4/IPv6 communication, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./pcoind -onion=127.0.0.1:9050 -externalip=7zvj7a2imdgkdbg4f2dryd5rgtrn7upivr5eeij4cicjh65pooxeshid.onion -discover\n")),(0,i.kt)("h2",{id:"4-privacy-recommendations"},"4. Privacy recommendations"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Do not add anything but PCOIN Core ports to the onion service created in section 3.\nIf you run a web service too, create a new onion service for that.\nOtherwise it is trivial to link them, which may reduce privacy. Onion\nservices created automatically (as in section 2) always have only one port\nopen.\n:::"))))}h.isMDXComponent=!0}}]);