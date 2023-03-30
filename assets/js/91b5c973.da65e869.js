"use strict";(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[8768],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5061:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(3117),i=t(102),a=(t(7294),t(4137)),o=["components"],s={title:"RPC Client",slug:"rpc-client",sidebar_position:3},c=void 0,l={unversionedId:"User-Guide/Pcoin-Wallet/rpc_client",id:"User-Guide/Pcoin-Wallet/rpc_client",title:"RPC Client",description:"JSON-RPC",source:"@site/docs/User-Guide/Pcoin-Wallet/rpc_client.md",sourceDirName:"User-Guide/Pcoin-Wallet",slug:"/User-Guide/Pcoin-Wallet/rpc-client",permalink:"/docs/User-Guide/Pcoin-Wallet/rpc-client",draft:!1,editUrl:"https://github.com/pcoinproject/pcoin.dev/edit/master/docs/User-Guide/Pcoin-Wallet/rpc_client.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"RPC Client",slug:"rpc-client",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PCOIN Command Line Core Wallet",permalink:"/docs/User-Guide/Pcoin-Wallet/command-line-core-wallet"},next:{title:"PCOIN Core Wallet Debugging Features",permalink:"/docs/User-Guide/Pcoin-Wallet/wallet-debugging-features"}},p={},u=[{value:"JSON-RPC",id:"json-rpc",level:3},{value:"Python",id:"python",level:3},{value:"Ruby",id:"ruby",level:3},{value:"Erlang",id:"erlang",level:3},{value:"PHP",id:"php",level:3},{value:"Java",id:"java",level:3},{value:"Perl",id:"perl",level:3},{value:"Go",id:"go",level:3},{value:".NET (C#)",id:"net-c",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Command line (cURL)",id:"command-line-curl",level:3},{value:"Clojure",id:"clojure",level:3},{value:"C",id:"c",level:3},{value:"Qt/C++",id:"qtc",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"json-rpc"},"JSON-RPC"),(0,a.kt)("p",null,"Running PCOIN with the -server argument (or running pcoind) tells it to function as a HTTP JSON-RPC server, but Basic access authentication must be used when communicating with it, and, for security, by default, the server only accepts connections from other processes on the same machine. If your HTTP or JSON library requires you to specify which 'realm' is authenticated, use 'jsonrpc'."),(0,a.kt)("p",null,"Allowing arbitrary machines to access the JSON-RPC port (using the rpcallowip configuration option) is dangerous and strongly discouraged-- access should be strictly limited to trusted machines."),(0,a.kt)("p",null,"To access the server you should find a suitable library for your language."),(0,a.kt)("h3",{id:"python"},"Python"),(0,a.kt)("p",null,"python-jsonrpc is the official JSON-RPC implementation for Python. It automatically generates Python methods for RPC calls. However, due to its design for supporting old versions of Python, it is also rather inefficient. jgarzik has forked it as Python-BitcoinRPC and optimized it for current versions. Generally, this version is recommended."),(0,a.kt)("p",null,"While BitcoinRPC lacks a few obscure features from jsonrpc, software using only the ServiceProxy class can be written the same to work with either version the user might choose to install:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from jsonrpc import ServiceProxy\n\naccess = ServiceProxy("http://user:password@127.0.0.1:22502")\naccess.getinfo()\naccess.listreceivedbyaddress(6)\naccess.sendtoaddress("11yEmxiMso2RsFVfBcCa616npBvGgxiBX", 10)\n')),(0,a.kt)("p",null,"The latest version of python-bitcoinrpc has a new syntax."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from bitcoinrpc.authproxy import AuthServiceProxy\n")),(0,a.kt)("h3",{id:"ruby"},"Ruby"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'net/http'\nrequire 'uri'\nrequire 'json'\n\nclass BitcoinRPC\n  def initialize(service_url)\n    @uri = URI.parse(service_url)\n  end\n\n  def method_missing(name, *args)\n    post_body = { 'method' => name, 'params' => args, 'id' => 'jsonrpc' }.to_json\n    resp = JSON.parse( http_post_request(post_body) )\n    raise JSONRPCError, resp['error'] if resp['error']\n    resp['result']\n  end\n\n  def http_post_request(post_body)\n    http    = Net::HTTP.new(@uri.host, @uri.port)\n    request = Net::HTTP::Post.new(@uri.request_uri)\n    request.basic_auth @uri.user, @uri.password\n    request.content_type = 'application/json'\n    request.body = post_body\n    http.request(request).body\n  end\n\n  class JSONRPCError < RuntimeError; end\nend\n\nif $0 ==\n  h = BitcoinRPC.new('http://user:password@127.0.0.1:22502')\n  p h.getbalance\n  p h.getinfo\n  p h.getnewaddress\n  p h.dumpprivkey( h.getnewaddress )\n  # also see: https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_Calls_list\nend\n")),(0,a.kt)("h3",{id:"erlang"},"Erlang"),(0,a.kt)("p",null,"Get the rebar dependency from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/edescourtis/ebitcoind"},"https://github.com/edescourtis/ebitcoind")," . By default the client will use the configuration in $HOME/.pcoin/pcoin.conf or you can instead specify a URI like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'ebitcoind:start_link(<<"http://user:password@localhost:22502/">>).\nHere is a usage example:\n\n1> {ok,Pid} = ebitcoind:start_link().\n{ok,<0.177.0>}\n2> ebitcoind:getbalance(Pid).\n8437.02478294\n3> ebitcoind:getinfo(Pid).\n{ok, #{<<"balance">> => 8437.02478294,\n  <<"blocks">> => 260404,\n  <<"connections">> => 8,\n  <<"difficulty">> => 148819199.80509263,\n  <<"errors">> => <<>>,\n  <<"keypoololdest">> => 1420307921,\n  <<"keypoolsize">> => 102,\n  <<"paytxfee">> => 0.0,\n  <<"protocolversion">> => 70002,\n  <<"proxy">> => <<>>,\n  <<"relayfee">> => 1.0e-5,\n  <<"testnet">> => false,\n  <<"timeoffset">> => -3,\n  <<"version">> => 90300,\n  <<"walletversion">> => 60000}}\n4> ebitcoind:setgenerate(Pid,true).\n{ok, null}\n5> ebitcoind:getblocktemplate(Pid, #{}).\n{ok,#{<<"bits">> => <<"181b0dca">>,\n      <<"coinbaseaux">> => #{<<"flags">> => <<"062f503253482f">>},\n      <<"coinbasevalue">> => 2518690558,\n      <<"curtime">> => 1420421249,\n      <<"height">> => 337533,\n      <<"mintime">> => 1420416332,\n      <<"mutable">> => [<<"time">>,<<"transactions">>,<<"prevblock">>],\n      <<"noncerange">> => <<"00000000ffffffff">>,\n      <<"previousblockhash">> => <<"000000000000000017ce0a0d328bf84cc597785844393e899e9a971a81679a5f">>,\n      <<"sigoplimit">> => 20000,\n      <<"sizelimit">> => 1000000,\n      <<"target">> => <<"00000000000000001b0dca00000000000000000000000000000000000000"...>>,\n      <<"transactions">> => [#{<<"data">> => <<"01000000049b47ce225d29bff7c18b7df7d7df4693523a52"...>>,\n         <<"depends">> => [],\n         <<"fee">> => 0,\n         <<"hash">> => <<"6d0d76e1f27b3a6f7325923710dcdb4107c9"...>>,\n         <<"sigops">> => 1},\n      ...\n')),(0,a.kt)("h3",{id:"php"},"PHP"),(0,a.kt)("p",null,"The JSON-RPC PHP library also makes it very easy to connect to PCOIN. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'  require_once \'jsonRPCClient.php\';\n\n  $pcoin = new jsonRPCClient(\'http://user:password@127.0.0.1:22502/\');\n\n  echo "<pre>\\n";\n  print_r($pcoin->getinfo()); echo "\\n";\n  echo "Received: ".$pcoin->getreceivedbylabel("Your Address")."\\n";\n  echo "</pre>";\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'The jsonRPCClient library uses fopen() and will throw an exception saying "Unable to connect" if it receives a 404 or 500 error from pcoind. This prevents you from being able to see error messages generated by pcoind (as they are sent with status 404 or 500). The EasyBitcoin-PHP library is similar in function to JSON-RPC PHP but does not have this issue.')),(0,a.kt)("h3",{id:"java"},"Java"),(0,a.kt)("p",null,"The easiest way to tell Java to use HTTP Basic authentication is to set a default Authenticator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  final String rpcuser ="...";\n  final String rpcpassword ="...";\n\n  Authenticator.setDefault(new Authenticator() {\n      protected PasswordAuthentication getPasswordAuthentication() {\n          return new PasswordAuthentication (rpcuser, rpcpassword.toCharArray());\n      }\n  });\n')),(0,a.kt)("p",null,"Once that is done, any JSON-RPC library for Java (or ordinary URL POSTs) may be used to communicate with the Bitcoin server."),(0,a.kt)("p",null,"Instead of writing your own implementation, consider using one of the existing wrappers like BitcoindClient4J, btcd-cli4j or Bitcoin-JSON-RPC-Client instead."),(0,a.kt)("h3",{id:"perl"},"Perl"),(0,a.kt)("p",null,"The JSON::RPC package from CPAN can be used to communicate with PCOIN. You must set the client's credentials; for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-perl"},"  use JSON::RPC::Client;\n  use Data::Dumper;\n\n  my $client = new JSON::RPC::Client;\n\n  $client->ua->credentials(\n     'localhost:22502', 'jsonrpc', 'user' => 'password'  # REPLACE WITH YOUR pcoin.conf rpcuser/rpcpassword\n      );\n\n  my $uri = 'http://localhost:22502/';\n  my $obj = {\n      method  => 'getinfo',\n      params  => [],\n   };\n\n  my $res = $client->call( $uri, $obj );\n\n  if ($res){\n      if ($res->is_error) { print \"Error : \", $res->error_message; }\n      else { print Dumper($res->result); }\n  } else {\n      print $client->status_line;\n  }\n")),(0,a.kt)("h3",{id:"go"},"Go"),(0,a.kt)("p",null,"The btcrpcclient package can be used to communicate with PCOIN. You must provide credentials to match the client you are communicating with."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/btcsuite/btcd/chaincfg"\n    "github.com/btcsuite/btcrpcclient"\n    "github.com/btcsuite/btcutil"\n    "log"\n)\n\nfunc main() {\n    // create new client instance\n    client, err := btcrpcclient.New(&btcrpcclient.ConnConfig{\n        HTTPPostMode: true,\n        DisableTLS:   true,\n        Host:         "127.0.0.1:22502",\n        User:         "rpcUsername",\n        Pass:         "rpcPassword",\n    }, nil)\n    if err != nil {\n        log.Fatalf("error creating new btc client: %v", err)\n    }\n\n    // list accounts\n    accounts, err := client.ListAccounts()\n    if err != nil {\n        log.Fatalf("error listing accounts: %v", err)\n    }\n    // iterate over accounts (map[string]btcutil.Amount) and write to stdout\n    for label, amount := range accounts {\n        log.Printf("%s: %s", label, amount)\n    }\n\n    // prepare a sendMany transaction\n    receiver1, err := btcutil.DecodeAddress("1someAddressThatIsActuallyReal", &chaincfg.MainNetParams)\n    if err != nil {\n        log.Fatalf("address receiver1 seems to be invalid: %v", err)\n    }\n    receiver2, err := btcutil.DecodeAddress("1anotherAddressThatsPrettyReal", &chaincfg.MainNetParams)\n    if err != nil {\n        log.Fatalf("address receiver2 seems to be invalid: %v", err)\n    }\n    receivers := map[btcutil.Address]btcutil.Amount{\n        receiver1: 42,  // 42 satoshi\n        receiver2: 100, // 100 satoshi\n    }\n\n    // create and send the sendMany tx\n    txSha, err := client.SendMany("some-account-label-from-which-to-send", receivers)\n    if err != nil {\n        log.Fatalf("error sendMany: %v", err)\n    }\n    log.Printf("sendMany completed! tx sha is: %s", txSha.String())\n}\n')),(0,a.kt)("h3",{id:"net-c"},".NET (C#)"),(0,a.kt)("p",null,"The communication with the RPC service can be achieved using the standard http request/response objects. A library for serializing and deserializing Json will make your life a lot easier:"),(0,a.kt)("p",null,"Json.NET ( ",(0,a.kt)("a",{parentName:"p",href:"http://james.newtonking.com/json"},"http://james.newtonking.com/json")," ) is a high performance JSON package for .NET. It is also available via NuGet from the package manager console ( Install-Package Newtonsoft.Json )."),(0,a.kt)("p",null,"The following example uses Json.NET:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},' HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create("http://localhost.:22502");\n webRequest.Credentials = new NetworkCredential("user", "pwd");\n /// important, otherwise the service can\'t desirialse your request properly\n webRequest.ContentType = "application/json-rpc";\n webRequest.Method = "POST";\n\n JObject joe = new JObject();\n joe.Add(new JProperty("jsonrpc", "1.0"));\n joe.Add(new JProperty("id", "1"));\n joe.Add(new JProperty("method", Method));\n // params is a collection values which the method requires..\n if (Params.Keys.Count == 0)\n {\n  joe.Add(new JProperty("params", new JArray()));\n }\n else\n {\n     JArray props = new JArray();\n     // add the props in the reverse order!\n     for (int i = Params.Keys.Count - 1; i >= 0; i--)\n     {\n        .... // add the params\n     }\n     joe.Add(new JProperty("params", props));\n     }\n\n     // serialize json for the request\n     string s = JsonConvert.SerializeObject(joe);\n     byte[] byteArray = Encoding.UTF8.GetBytes(s);\n     webRequest.ContentLength = byteArray.Length;\n     Stream dataStream = webRequest.GetRequestStream();\n     dataStream.Write(byteArray, 0, byteArray.Length);\n     dataStream.Close();\n\n\n     WebResponse webResponse = webRequest.GetResponse();\n\n     ... // deserialze the response\nThere is also a wrapper for Json.NET called Bitnet (https://sourceforge.net/projects/bitnet) implementing Bitcoin API in more convenient way:\n\n     BitnetClient bc = new BitnetClient("http://127.0.0.1:22502");\n     bc.Credentials = new NetworkCredential("user", "pass");\n\n     var p = bc.GetDifficulty();\n     Console.WriteLine("Difficulty:" + p.ToString());\n\n     var inf = bc.GetInfo();\n     Console.WriteLine("Balance:" + inf["balance"]);\n')),(0,a.kt)("p",null,"A more complete library and wrapper for Bitcoin (also for Litecoin and all Bitcoin clones) is BitcoinLib (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GeorgeKimionis/BitcoinLib"},"https://github.com/GeorgeKimionis/BitcoinLib"),") which is also available via NuGet from the package manager console (Install-Package BitcoinLib)."),(0,a.kt)("p",null,"Querying the daemon with BitcoinLib is as simple as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},"     IBitcoinService bitcoinService = new BitcoinService();\n\n     var networkDifficulty = bitcoinService.GetDifficulty();\n     var myBalance = bitcoinService.GetBalance();\n")),(0,a.kt)("h3",{id:"nodejs"},"Node.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"node-bitcoin (npm: bitcoin)\nExample using node-bitcoin:\nvar bitcoin = require('bitcoin');\nvar client = new bitcoin.Client({\n  host: 'localhost',\n  port: 22502,\n  user: 'user',\n  pass: 'pass'\n});\n\nclient.getDifficulty(function(err, difficulty) {\n  if (err) {\n    return console.error(err);\n  }\n\n  console.log('Difficulty: ' + difficulty);\n});\nExample using Kapitalize:\n\nvar client = require('kapitalize')()\n\nclient.auth('user', 'password')\n\nclient\n.getInfo()\n.getDifficulty(function(err, difficulty) {\n  console.log('Dificulty: ', difficulty)\n})\n")),(0,a.kt)("h3",{id:"command-line-curl"},"Command line (cURL)"),(0,a.kt)("p",null,"You can also send commands and see results using cURL or some other command-line HTTP-fetching utility; for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  curl --user user --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }\'\n    -H \'content-type: text/plain;\' http://127.0.0.1:22502/\n')),(0,a.kt)("p",null,"You will be prompted for your rpcpassword, and then will see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  {"result":{"balance":0.000000000000000,"blocks":59952,"connections":48,"proxy":"","generate":false,\n     "genproclimit":-1,"difficulty":16.61907875185736},"error":null,"id":"curltest"}\n')),(0,a.kt)("h3",{id:"clojure"},"Clojure"),(0,a.kt)("p",null,"clj-btc is a Clojure wrapper for the bitcoin API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'user=> (require \'[clj-btc.core :as btc])\nnil\nuser=> (btc/getinfo)\n{"timeoffset" 0, "protocolversion" 70001, "blocks" 111908, "errors" "",\n "testnet" true, "proxy" "", "connections" 4, "version" 80500,\n "keypoololdest" 1380388750, "paytxfee" 0E-8M,\n "difficulty" 4642.44443532M, "keypoolsize" 101, "balance" 0E-8M,\n "walletversion" 60000}\n')),(0,a.kt)("h3",{id:"c"},"C"),(0,a.kt)("p",null,"The C API for processing JSON is Jansson. C applications like libblkmaker use cURL for making the calls and Jansson for interpreting the JSON that cURL fetches."),(0,a.kt)("p",null,"For example basic usage (which can be easily modified for Bitcoin RPC), see the Jansson example github_commits.c and the associated tutorial."),(0,a.kt)("p",null,"The following does with libcurl what the cURL example above does:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <curl/curl.h>\n\nint main()\n{\n    CURL *curl = curl_easy_init();\n    struct curl_slist *headers = NULL;\n\n    if (curl) {\n    const char *data =\n        "{\\"jsonrpc\\": \\"1.0\\", \\"id\\":\\"curltest\\", \\"method\\": \\"getinfo\\", \\"params\\": [] }";\n\n    headers = curl_slist_append(headers, "content-type: text/plain;");\n    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n\n    curl_easy_setopt(curl, CURLOPT_URL, "http://127.0.0.1:22502/");\n\n    curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, (long) strlen(data));\n    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);\n\n    curl_easy_setopt(curl, CURLOPT_USERPWD,\n             "bitcoinrpcUSERNAME:bitcoinrpcPASSWORD");\n\n    curl_easy_setopt(curl, CURLOPT_USE_SSL, CURLUSESSL_TRY);\n\n    curl_easy_perform(curl);\n    }\n    return 0;\n}\n')),(0,a.kt)("p",null,"This output can be parsed with Jansson, \xe0 la the Jansson tutorial linked to above. (source: Bitcoin StackExchange)"),(0,a.kt)("h3",{id:"qtc"},"Qt/C++"),(0,a.kt)("p",null,"QJsonRpc is a Qt/C++ implementation of the JSON-RPC protocol. It integrates nicely with Qt, leveraging Qt's meta object system in order to provide services over the JSON-RPC protocol. QJsonRpc is licensed under the LGPLv2.1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'/*\n * Copyright (C) 2012-2013 Matt Broadstone\n * Contact: http://bitbucket.org/devonit/qjsonrpc\n *\n * This file is part of the QJsonRpc Library.\n *\n * This library is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 2.1 of the License, or (at your option) any later version.\n *\n * This library is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n */\ninclude <QCoreApplication>include <QAuthenticator>include <QStringList>include <QDebug>\n\ninclude "qjsonrpchttpclient.h"\n\nclass HttpClient : public QJsonRpcHttpClient\n{\n    Q_OBJECT\npublic:\n    HttpClient(const QString &endpoint, QObject *parent = 0)\n        : QJsonRpcHttpClient(endpoint, parent)\n    {\n        // defaults added for my local test server\n        m_username = "bitcoinrpc";\n        m_password = "232fb3276bbb7437d265298ea48bdc46";\n    }\n\n    void setUsername(const QString &username) {\n        m_username = username;\n    }\n\n    void setPassword(const QString &password) {\n        m_password = password;\n    }\n\nprivate Q_SLOTS:\n    virtual void handleAuthenticationRequired(QNetworkReply *reply, QAuthenticator * authenticator)\n    {\n        Q_UNUSED(reply)\n        authenticator->setUser(m_username);\n        authenticator->setPassword(m_password);\n    }\n\nprivate:\n    QString m_username;\n    QString m_password;\n\n};\n\nint main(int argc, char **argv)\n{\n    QCoreApplication app(argc, argv);\n    if (app.arguments().size() < 2) {\n        qDebug() << "usage: " << argv[0] << "[-u username] [-p password] <command> <arguments>";\n        return -1;\n    }\n\n    HttpClient client("http://127.0.0.1:22502");\n    if (app.arguments().contains("-u")) {\n        int idx = app.arguments().indexOf("-u");\n        app.arguments().removeAt(idx);\n        client.setUsername(app.arguments().takeAt(idx));\n    }\n\n    if (app.arguments().contains("-p")) {\n        int idx = app.arguments().indexOf("-p");\n        app.arguments().removeAt(idx);\n        client.setPassword(app.arguments().takeAt(idx));\n    }\n\n    QJsonRpcMessage message = QJsonRpcMessage::createRequest(app.arguments().at(1));\n    QJsonRpcMessage response = client.sendMessageBlocking(message);\n    if (response.type() == QJsonRpcMessage::Error) {\n        qDebug() << response.errorData();\n        return -1;\n    }\n\n    qDebug() << response.toJson();\n}\n')))}m.isMDXComponent=!0}}]);