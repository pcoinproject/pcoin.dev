"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[2292],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(t),g=o,d=h["".concat(s,".").concat(g)]||h[g]||u[g]||r;return t?i.createElement(d,a(a({ref:n},p),{},{components:t})):i.createElement(d,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2840:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=t(3117),o=t(102),r=(t(7294),t(4137)),a=["components"],l={title:"Lightning Network (LN) and PCOINPay Server",sidebar_position:10},s=void 0,c={unversionedId:"PcoinPay/Guide/WalletSetup/LightningNetwork",id:"PcoinPay/Guide/WalletSetup/LightningNetwork",title:"Lightning Network (LN) and PCOINPay Server",description:"Overview",source:"@site/docs/PcoinPay/Guide/WalletSetup/LightningNetwork.md",sourceDirName:"PcoinPay/Guide/WalletSetup",slug:"/PcoinPay/Guide/WalletSetup/LightningNetwork",permalink:"/docs/PcoinPay/Guide/WalletSetup/LightningNetwork",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/PcoinPay/Guide/WalletSetup/LightningNetwork.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Lightning Network (LN) and PCOINPay Server",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Create a new wallet",permalink:"/docs/PcoinPay/Guide/WalletSetup/CreateWallet"},next:{title:"(4) What's Next?",permalink:"/docs/PcoinPay/Guide/WhatsNext"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Choosing the Lightning Network implementation",id:"choosing-the-lightning-network-implementation",level:2},{value:"Lightning node configuration in PCOINPay Server",id:"lightning-node-configuration-in-pcoinpay-server",level:2},{value:"Connecting your internal Lightning Node",id:"connecting-your-internal-lightning-node",level:3},{value:"Connecting an external Lightning Node in PCOINPay Server",id:"connecting-an-external-lightning-node-in-pcoinpay-server",level:3},{value:"Getting started with PCOINPay Server and LND",id:"getting-started-with-pcoinpay-server-and-lnd",level:2},{value:"Control your LND using RTL",id:"control-your-lnd-using-rtl",level:3},{value:"Control your LND using Zap",id:"control-your-lnd-using-zap",level:3},{value:"Control your LND using Lightning Joule",id:"control-your-lnd-using-lightning-joule",level:3},{value:"Control your LND via the command-line: lncli",id:"control-your-lnd-via-the-command-line-lncli",level:3},{value:"Getting started with PCOINPay Server and Core Lightning (CLN)",id:"getting-started-with-pcoinpay-server-and-core-lightning-cln",level:2},{value:"Control your CLN using Spark",id:"control-your-cln-using-spark",level:3},{value:"Control your CLN via the command-line: lightning-cli",id:"control-your-cln-via-the-command-line-lightning-cli",level:3},{value:"Lightning node backup",id:"lightning-node-backup",level:2},{value:"Funding your on-chain wallet",id:"funding-your-on-chain-wallet",level:3},{value:"Lapps (Lightning Network Apps)",id:"lapps-lightning-network-apps",level:2}],h={toc:u};function g(e){var n=e.components,l=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},h,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"After deploying PCOINPay Server, you may want to experiment with an innovative second-layer payment system built on top of Bitcoin protocol - the ",(0,r.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Lightning_Network"},"Lightning Network"),"."),(0,r.kt)("p",null,"This guide will show you how to set up your Lightning Network (LN) node in PCOINPay Server and guide you through the basics."),(0,r.kt)("p",null,"PCOINPay Server currently offers three implementations of the Lightning Network:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lightningnetwork/lnd"},"LND")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pcoinproject/lightning"},"Core Lightning (CLN)")," (formerly c-lightning)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ACINQ/eclair"},"Eclair"))),(0,r.kt)("p",null,"::: danger\nBefore you proceed, please understand that the Lightning Network is still in the experimental stage.\nUsing the Lightning Network can put your money at risk. Do not use more than you can afford to lose.\n:::"),(0,r.kt)("p",null,"Take time to familiarize yourself with the risks associated with using the Lightning Network."),(0,r.kt)("p",null,"If you choose to run the internal Lightning Node in PCOINPay Server, consider:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Any lightning network node operates at 2 levels: ",(0,r.kt)("strong",{parentName:"li"},"on-chain")," and ",(0,r.kt)("strong",{parentName:"li"},"off-chain"),"."),(0,r.kt)("li",{parentName:"ol"},"The LN implementation of choice will create an on-chain hot wallet that will be used to fund the off-chain payment channels."),(0,r.kt)("li",{parentName:"ol"},"Make sure you back up the ",(0,r.kt)("strong",{parentName:"li"},"on-chain")," hot wallet seed (see below instructions for the individual implementations)."),(0,r.kt)("li",{parentName:"ol"},"The seed in step #3 can ",(0,r.kt)("strong",{parentName:"li"},"only recover the on-chain funds"),", although it is necessary for the off-chain operation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Off-chain")," funds locked in channels ",(0,r.kt)("strong",{parentName:"li"},"cannot")," be backed up using a single-seed. Read the documentation issued by your LN implementation of choice."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Off-chain")," recovery mechanisms are under active research and development. Erasing your PCOINPay Server or unsafe/unsecure operation of the computing environment (e.g Filesystem corruption, compromised keys) can lead to permanent ",(0,r.kt)("strong",{parentName:"li"},"loss of funds"),".")),(0,r.kt)("p",null,"As the technology matures and develops, mechanisms for proper backup will be easier to implement in PCOINPay Server.\nLND is the only lightning network implementation that allows for ",(0,r.kt)("a",{parentName:"p",href:"../../FAQ/LightningNetwork.md#where-can-i-find-recovery-seed-backup-for-my-lightning-network-wallet-in-pcoinpay-server"},"lightning seed backups with PCOINPay Server"),"."),(0,r.kt)("h2",{id:"choosing-the-lightning-network-implementation"},"Choosing the Lightning Network implementation"),(0,r.kt)("p",null,"First, read ",(0,r.kt)("a",{parentName:"p",href:"../../FAQ/LightningNetwork.md#can-i-use-a-pruned-node-with-ln-in-pcoinpay"},"here")," about using pruned Bitcoin nodes with lightning network implementations before deploying."),(0,r.kt)("p",null,"On the installation, you'll have the option to choose the implementation."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"../../Deployment/LunaNode.md"},"web-interface installations"),", you can simply select the implementation from the drop-down menu.\nFor other ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pcoinproject/pcoinpayserver-docker"},"docker")," based ",(0,r.kt)("a",{parentName:"p",href:"../../Deployment/README.md"},"deployment methods")," you need to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo su -\ncd pcoinpayserver-docker\nexport PCOINPAYGEN_LIGHTNING="implementationgoeshere"\n. ./pcoinpay-setup.sh -i\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("strong",{parentName:"li"},"Core Lightning (CLN)")," use ",(0,r.kt)("inlineCode",{parentName:"li"},'export PCOINPAYGEN_LIGHTNING="clightning"')),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("strong",{parentName:"li"},"LND")," use ",(0,r.kt)("inlineCode",{parentName:"li"},'export PCOINPAYGEN_LIGHTNING="lnd"')),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("strong",{parentName:"li"},"eclair")," use ",(0,r.kt)("inlineCode",{parentName:"li"},'export PCOINPAYGEN_LIGHTNING="eclair"')," AND ",(0,r.kt)("inlineCode",{parentName:"li"},'export PCOINPAYGEN_ADDITIONAL_FRAGMENTS="opt-txindex"'))),(0,r.kt)("p",null,"Finally, to begin using Lightning, your blockchain needs to be fully synced."),(0,r.kt)("h2",{id:"lightning-node-configuration-in-pcoinpay-server"},"Lightning node configuration in PCOINPay Server"),(0,r.kt)("h3",{id:"connecting-your-internal-lightning-node"},"Connecting your internal Lightning Node"),(0,r.kt)("p",null,"Irrespective of the LN implementation deployed, the process of connecting your internal Lightning Node in PCOINPay Server is the same."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Choose a store"),(0,r.kt)("li",{parentName:"ol"},'Go to "Lightning" > Select "Use internal node"'),(0,r.kt)("li",{parentName:"ol"},'Click "Save" > See "BTC Lightning node updated" message'),(0,r.kt)("li",{parentName:"ol"},'Go to "Public Node Info" > The node should appear ',(0,r.kt)("strong",{parentName:"li"},'"Online"'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LightningNetworkNodeSetupOverview",src:t(3435).Z,title:"PCOINPay Server Lightning Network Setup Overview",width:"1176",height:"676"})),(0,r.kt)("p",null,"If the internal connection fails, confirm:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Bitcoin on-chain node is fully synchronized"),(0,r.kt)("li",{parentName:"ol"},'The Internal lightning node is "Enabled" under "Lightning" > "Settings" > "BTC Lightning Settings"')),(0,r.kt)("p",null,"If you are unable to connect to your Lightning node, try ",(0,r.kt)("a",{parentName:"p",href:"../../FAQ/ServerSettings.md#how-to-restart-pcoinpay-server"},"restarting your server")," or reviewing our ",(0,r.kt)("a",{parentName:"p",href:"./Troubleshooting.md"},"troubleshooting guide"),'. You will not be able to accept lightning payments in your store until your Lightning node appears "Online". Try to test your Lightning connection by clicking the "Public Node Info" link.'),(0,r.kt)("h3",{id:"connecting-an-external-lightning-node-in-pcoinpay-server"},"Connecting an external Lightning Node in PCOINPay Server"),(0,r.kt)("p",null,"PCOINPay Server offers the option to connect to an external Lightning node. To configure it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Go to "Lightning" > Select "Use custom node" if there is no Lightning node configured.'),(0,r.kt)("li",{parentName:"ol"},'Go to "Lightning" > Select "Settings" > Select "Change connection" > Select "Use custom node" to modify an existing connection'),(0,r.kt)("li",{parentName:"ol"},'Add the configuration details matching the lightning implementation used > "Test connection"')),(0,r.kt)("h2",{id:"getting-started-with-pcoinpay-server-and-lnd"},"Getting started with PCOINPay Server and LND"),(0,r.kt)("h3",{id:"control-your-lnd-using-rtl"},"Control your LND using RTL"),(0,r.kt)("p",null,"The easiest way to use LND implementation with PCOINPay Server is to use the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/pcoinproject//RTL"},"Ride The Lightning"))," (RTL) service. A web user interface for the Lightning Network, RTL allows you to operate your node without leaving PCOINPay Server, from your browser."),(0,r.kt)("p",null,"To initiate RTL in PCOINPay Server, Go to Server Settings > Services > RTL > See information."),(0,r.kt)("h3",{id:"control-your-lnd-using-zap"},"Control your LND using Zap"),(0,r.kt)("p",null,"For remote use of your LND node on iOS or PC, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LN-Zap/zap-tutorials/blob/master/docs/desktop/pcoinpay-server.mdx"},"Zap wallet integration"),".\nBesides Zap, there are a few more wallets that allow remote control of the LND node, ",(0,r.kt)("a",{parentName:"p",href:"https://nayuta.co/"},"the Nayuta wallet")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZeusLN/zeus"},"ZeusLN"),". Both of which have not yet extensively been tested by the community."),(0,r.kt)("h3",{id:"control-your-lnd-using-lightning-joule"},"Control your LND using Lightning Joule"),(0,r.kt)("p",null,"To remotely control your LND node via web browser, you can use Lightning Joule."),(0,r.kt)("h3",{id:"control-your-lnd-via-the-command-line-lncli"},"Control your LND via the command-line: lncli"),(0,r.kt)("p",null,"LND can be accessed via the command-line using the shell script ",(0,r.kt)("inlineCode",{parentName:"p"},"bitcoin-lncli.sh"),".s\nIf you're on Docker make sure you're in docker directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su -\ncd pcoinpayserver-docker\n./bitcoin-lncli.sh $command\n./bitcoin-lncli.sh getinfo #show info about the node\n")),(0,r.kt)("p",null,"Run ./bitcoin-lncli.sh --help` to see a full list of commands or check the full ",(0,r.kt)("a",{parentName:"p",href:"https://api.lightning.community/"},"API documentation"),"."),(0,r.kt)("h2",{id:"getting-started-with-pcoinpay-server-and-core-lightning-cln"},"Getting started with PCOINPay Server and Core Lightning (CLN)"),(0,r.kt)("h3",{id:"control-your-cln-using-spark"},"Control your CLN using Spark"),(0,r.kt)("p",null,"The most straightforward way to start using the ",(0,r.kt)("strong",{parentName:"p"},"CLN implementation in PCOINPay Server")," is to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pcoinproject/spark-wallet"},"Spark Wallet")," integration. Just like Zap for LND, Spark is a graphical interface of your internal CLN node."),(0,r.kt)("p",null,"You can use Spark as an internal or external wallet. Internal wallet allows users to use Spark via the web-browser inside their PCOINPay Server. You can also connect externally to a Spark mobile or desktop app just by scanning a QR code.\nGo to Server Settings > Services > Spark Server > See information."),(0,r.kt)("h3",{id:"control-your-cln-via-the-command-line-lightning-cli"},"Control your CLN via the command-line: lightning-cli"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"lncli"),", CLN can be accessed via the command-line using the shell script ",(0,r.kt)("inlineCode",{parentName:"p"},"bitcoin-lightning-cli.sh"),"."),(0,r.kt)("p",null,"If you're on Docker make sure you're in docker directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su -\ncd pcoinpayserver-docker\n./bitcoin-lightning-cli.sh $command\n./bitcoin-lightning-cli.sh getinfo #show info about the node\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"./bitcoin-lightning-cli.sh help")," to see a full list of commands or check the full ",(0,r.kt)("a",{parentName:"p",href:"https://lightning.readthedocs.io/"},"API documentation"),"."),(0,r.kt)("h2",{id:"lightning-node-backup"},"Lightning node backup"),(0,r.kt)("p",null,"Before you start transacting using your new lightning node, consider backing up the ",(0,r.kt)("strong",{parentName:"p"},"on-chain")," wallet. Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"for LND"),': storing a copy of the LND seed.\nGo to "Server Settings" > "Services" > "LND Seed Backup" and select "See information"'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"for CLN"),": storing a copy of the ",(0,r.kt)("a",{parentName:"li",href:"https://lightning.readthedocs.io/BACKUP.html#hsm-secret"},"hsm_secret"))),(0,r.kt)("p",null,"Acknowledge the limitations of ",(0,r.kt)("strong",{parentName:"p"},"off-chain")," payment channel backups and associated risks."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://doc2p.pcoin.dev/Docker/backup-restore/#lightning-channel-backup"},"backup FAQ")," if you are running the PCOINPay Server instance with Docker."),(0,r.kt)("h3",{id:"funding-your-on-chain-wallet"},"Funding your on-chain wallet"),(0,r.kt)("p",null,"Now that your lightning node is active, before opening lightning payment channels, you will need to fund the on-chain wallet."),(0,r.kt)("p",null,"The on-chain funding process can be performed in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"via the Ride The Lightning (RTL) UI interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Select a "Store" and go to the "Lightning" section'),(0,r.kt)("li",{parentName:"ul"},'Under "Services", select "Ride The Lightning"'),(0,r.kt)("li",{parentName:"ul"},'In the RTL app, go to "On-chain", select "Receive" under the "On-chain Transactions" menu'),(0,r.kt)("li",{parentName:"ul"},'Select "Generate Address" and use it as the destination for the allocated funds')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"via the command-line using ",(0,r.kt)("inlineCode",{parentName:"li"},"bitcoin-lncli.sh")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"bitcoin-lightning-cli.sh"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo su -\ncd pcoinpayserver-docker\n./bitcoin-lncli.sh newaddress p2wkh #for LND\n./bitcoin-lightning-cli.sh newaddr  #for CLN\n{\n   "address" / "bech32": "bc1..........." #use this as the destination for the allocated funds\n}\n')),(0,r.kt)("p",null,"Once your on-chain lightning node is funded you, it's time to connect to other nodes on the network and open payment channels."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"./LightningNetwork_PaymentChannels.md"},"Payment channels")," for recommendations on opening payment channels, liquidity management and more."),(0,r.kt)("h2",{id:"lapps-lightning-network-apps"},"Lapps (Lightning Network Apps)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blockstream.com/2018/03/29/blockstreams-week-of-lapps-ends/"},"Lapps")," are applications built on top of the ",(0,r.kt)("a",{parentName:"p",href:"https://blockstream.com/2018/01/16/lightning-charge/"},"Lightning Charge"),", a complimentary package that allows users and developers to easier use and develop on top of CLN. If you decided to use CLN, you can easily connect your PCOINPay to any of the Lapps."),(0,r.kt)("p",null,"PCOINPay Server exposes all the necessary information required to ",(0,r.kt)("strong",{parentName:"p"},"connect your internal PCOINPay CLN node to a Lightning Network App"),". Go to Server Settings > Services > Lightning charge server > See information > Credentials."))}g.isMDXComponent=!0},3435:function(e,n,t){n.Z=t.p+"assets/images/LightningNetworkNodeSetupOverview-cf9a0557ba0234121e2a9309315a51d6.png"}}]);