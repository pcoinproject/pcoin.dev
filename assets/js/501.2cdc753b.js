/*! For license information please see 501.2cdc753b.js.LICENSE.txt */
(self.webpackChunkpcoin_website=self.webpackChunkpcoin_website||[]).push([[501],{6755:function(e){e.exports=function(){"use strict";var e={symbol:{iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform:{iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]}},t={ceil:Math.ceil,floor:Math.floor,round:Math.round};function n(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.bits,o=void 0!==i&&i,u=r.pad,a=void 0!==u&&u,c=r.base,s=void 0===c?10:c,l=r.round,f=void 0===l?2:l,d=r.locale,v=void 0===d?"":d,b=r.localeOptions,h=void 0===b?{}:b,g=r.separator,p=void 0===g?"":g,y=r.spacer,w=void 0===y?" ":y,m=r.symbols,M=void 0===m?{}:m,E=r.standard,k=void 0===E?"iec":E,R=r.output,B=void 0===R?"string":R,z=r.fullform,O=void 0!==z&&z,T=r.fullforms,x=void 0===T?[]:T,S=r.exponent,C=void 0===S?-1:S,V=r.roundingMethod,I=void 0===V?"round":V,P=r.precision,L=void 0===P?0:P,D=C,N=Number(n),F=[],j=0,A="",G=10===s?1e3:1024,Z=!0===O,_=N<0,K=t[I];if(isNaN(n))throw new TypeError("Invalid number");if(_&&(N=-N),(-1===D||isNaN(D))&&(D=Math.floor(Math.log(N)/Math.log(G)))<0&&(D=0),D>8&&(L>0&&(L+=8-D),D=8),"exponent"===B)return D;if(0===N)F[0]=0,A=F[1]=e.symbol[k][o?"bits":"bytes"][D];else{j=N/(2===s?Math.pow(2,10*D):Math.pow(1e3,D)),o&&(j*=8)>=G&&D<8&&(j/=G,D++);var W=Math.pow(10,D>0?f:0);F[0]=K(j*W)/W,F[0]===G&&D<8&&-1===C&&(F[0]=1,D++),A=F[1]=e.symbol[k][o?"bits":"bytes"][D]}if(_&&(F[0]=-F[0]),L>0&&(F[0]=F[0].toPrecision(L)),F[1]=M[F[1]]||F[1],!0===v?F[0]=F[0].toLocaleString():v.length>0?F[0]=F[0].toLocaleString(v,h):p.length>0&&(F[0]=F[0].toString().replace(".",p)),a&&!1===Number.isInteger(F[0])&&f>0){var Y=p||".",q=F[0].toString().split(Y),J=q[1]||"",$=J.length,H=f-$;F[0]="".concat(q[0]).concat(Y).concat(J.padEnd($+H,"0"))}return Z&&(F[1]=x[D]?x[D]:e.fullform[k][D]+(o?"bit":"byte")+(1===F[0]?"":"s")),"array"===B?F:"object"===B?{value:F[0],symbol:F[1],exponent:D,unit:A}:F.join(w)}return n.partial=function(e){return function(t){return n(t,e)}},n}()},859:function(e,t,n){"use strict";n.d(t,{Doe:function(){return u},EL:function(){return o},pCI:function(){return i}});var r=n(8357);function i(e){return(0,r.w_)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M23.023 17.093c-0.033-3.259 2.657-4.822 2.777-4.901-1.512-2.211-3.867-2.514-4.705-2.548-2.002-0.204-3.91 1.18-4.926 1.18-1.014 0-2.583-1.15-4.244-1.121-2.185 0.033-4.199 1.271-5.323 3.227-2.269 3.936-0.58 9.769 1.631 12.963 1.081 1.561 2.37 3.318 4.061 3.254 1.63-0.064 2.245-1.055 4.215-1.055s2.524 1.055 4.248 1.021c1.753-0.032 2.864-1.591 3.936-3.159 1.24-1.814 1.751-3.57 1.782-3.659-0.038-0.017-3.416-1.312-3.451-5.202zM19.783 7.53c0.897-1.089 1.504-2.602 1.34-4.108-1.294 0.053-2.861 0.86-3.79 1.948-0.832 0.965-1.561 2.502-1.365 3.981 1.444 0.112 2.916-0.734 3.816-1.821z"}}]})(e)}function o(e){return(0,r.w_)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M15.534 8.411c0 0.102-0.102 0.102-0.102 0.102h-0.102c-0.102 0-0.102-0.102-0.204-0.204 0 0-0.102-0.102-0.102-0.204s0-0.102 0.102-0.102l0.204 0.102c0.102 0.102 0.204 0.204 0.204 0.306zM13.698 7.391c0-0.51-0.204-0.816-0.51-0.816 0 0 0 0.102-0.102 0.102v0.204h0.306c0 0.204 0.102 0.306 0.102 0.51h0.204zM17.268 6.881c0.204 0 0.306 0.204 0.408 0.51h0.204c-0.102-0.102-0.102-0.204-0.102-0.306s0-0.204-0.102-0.306-0.204-0.204-0.306-0.204c0 0-0.102 0.102-0.204 0.102 0 0.102 0.102 0.102 0.102 0.204zM14.208 8.513c-0.102 0-0.102 0-0.102-0.102s0-0.204 0.102-0.306c0.204 0 0.306-0.102 0.306-0.102 0.102 0 0.102 0.102 0.102 0.102 0 0.102-0.102 0.204-0.306 0.408h-0.102zM13.086 8.411c-0.408-0.204-0.51-0.51-0.51-1.020 0-0.306 0-0.51 0.204-0.714 0.102-0.204 0.306-0.306 0.51-0.306s0.306 0.102 0.51 0.306c0.102 0.306 0.204 0.612 0.204 0.918v0.204h0.102v-0.102c0.102 0 0.102-0.204 0.102-0.612 0-0.306 0-0.612-0.204-0.918s-0.408-0.51-0.816-0.51c-0.306 0-0.612 0.204-0.714 0.51-0.204 0.408-0.245 0.714-0.245 1.224 0 0.408 0.143 0.816 0.551 1.224 0.102-0.102 0.204-0.102 0.306-0.204zM25.834 22.791c0.102 0 0.102-0.041 0.102-0.133 0-0.224-0.102-0.489-0.408-0.785-0.306-0.306-0.816-0.5-1.428-0.581-0.102-0.010-0.204-0.010-0.204-0.010-0.102-0.020-0.102-0.020-0.204-0.020-0.102-0.010-0.306-0.031-0.408-0.051 0.306-0.949 0.408-1.785 0.408-2.519 0-1.020-0.204-1.734-0.612-2.346s-0.816-0.918-1.326-1.020c-0.102 0.102-0.102 0.102-0.102 0.204 0.51 0.204 1.020 0.612 1.326 1.224 0.306 0.714 0.408 1.326 0.408 2.040 0 0.571-0.102 1.418-0.51 2.499-0.408 0.163-0.816 0.54-1.122 1.132 0 0.092 0 0.143 0.102 0.143 0 0 0.102-0.092 0.204-0.265 0.204-0.173 0.306-0.347 0.51-0.52 0.306-0.173 0.51-0.265 0.816-0.265 0.51 0 1.020 0.071 1.326 0.214 0.408 0.133 0.612 0.275 0.714 0.439 0.102 0.153 0.204 0.296 0.306 0.428 0 0.132 0.102 0.194 0.102 0.194zM16.452 8.003c-0.102-0.102-0.102-0.306-0.102-0.51 0-0.408 0-0.612 0.204-0.918 0.204-0.204 0.408-0.306 0.612-0.306 0.306 0 0.51 0.204 0.714 0.408 0.102 0.306 0.204 0.51 0.204 0.816 0 0.51-0.204 0.816-0.612 0.918 0 0 0.102 0.102 0.204 0.102 0.204 0 0.306 0.102 0.51 0.204 0.102-0.612 0.204-1.020 0.204-1.53 0-0.612-0.102-1.020-0.306-1.326-0.306-0.306-0.612-0.408-1.020-0.408-0.306 0-0.612 0.102-0.918 0.306-0.204 0.306-0.306 0.51-0.306 0.816 0 0.51 0.102 0.918 0.306 1.326 0.102 0 0.204 0.102 0.306 0.102zM17.676 9.635c-1.326 0.918-2.346 1.326-3.162 1.326-0.714 0-1.428-0.306-2.040-0.816 0.102 0.204 0.204 0.408 0.306 0.51l0.612 0.612c0.408 0.408 0.918 0.612 1.428 0.612 0.714 0 1.53-0.408 2.55-1.122l0.918-0.612c0.204-0.204 0.408-0.408 0.408-0.714 0-0.102 0-0.204-0.102-0.204-0.102-0.204-0.612-0.51-1.632-0.816-0.918-0.408-1.632-0.612-2.040-0.612-0.306 0-0.816 0.204-1.53 0.612-0.612 0.408-1.020 0.816-1.020 1.224 0 0 0.102 0.102 0.204 0.306 0.612 0.51 1.224 0.816 1.836 0.816 0.816 0 1.836-0.408 3.162-1.428v0.204c0.102-0 0.102 0.102 0.102 0.102zM20.021 30.236c0.408 0.767 1.122 1.152 1.938 1.152 0.204 0 0.408-0.031 0.612-0.092 0.204-0.041 0.408-0.112 0.51-0.194 0.102-0.071 0.204-0.143 0.306-0.224 0.204-0.071 0.204-0.122 0.306-0.173l1.734-1.499c0.408-0.325 0.816-0.61 1.326-0.857 0.408-0.245 0.816-0.408 1.020-0.5 0.306-0.082 0.51-0.204 0.714-0.367 0.102-0.153 0.204-0.347 0.204-0.592 0-0.296-0.204-0.52-0.408-0.683s-0.408-0.275-0.612-0.347-0.408-0.235-0.714-0.51c-0.204-0.265-0.408-0.632-0.51-1.112l-0.102-0.591c-0.102-0.275-0.102-0.479-0.204-0.592 0-0.031 0-0.041-0.102-0.041s-0.306 0.092-0.408 0.265c-0.204 0.173-0.408 0.367-0.612 0.571-0.102 0.204-0.408 0.387-0.612 0.561-0.306 0.173-0.612 0.265-0.816 0.265-0.816 0-1.224-0.224-1.53-0.663-0.204-0.326-0.306-0.704-0.408-1.132-0.204-0.173-0.306-0.265-0.51-0.265-0.51 0-0.714 0.53-0.714 1.601v3.172c0 0.092-0.102 0.296-0.102 0.612-0.102 0.316-0.102 0.675-0.102 1.081l-0.204 1.132v0.017zM5.233 29.693c0.948 0.139 2.040 0.435 3.274 0.888 1.234 0.449 1.989 0.683 2.264 0.683 0.714 0 1.306-0.316 1.795-0.927 0.102-0.198 0.102-0.43 0.102-0.698 0-0.964-0.581-2.183-1.744-3.661l-0.694-0.928c-0.143-0.194-0.316-0.49-0.54-0.887-0.214-0.398-0.408-0.704-0.561-0.918-0.133-0.235-0.347-0.469-0.622-0.704-0.265-0.235-0.571-0.387-0.908-0.469-0.428 0.082-0.724 0.224-0.867 0.418s-0.224 0.408-0.245 0.632c-0.031 0.214-0.092 0.357-0.194 0.428-0.102 0.061-0.275 0.112-0.51 0.163-0.051 0-0.143 0-0.275 0.010h-0.275c-0.541 0-0.908 0.061-1.101 0.163-0.255 0.296-0.388 0.632-0.388 0.989 0 0.163 0.041 0.439 0.122 0.826 0.082 0.377 0.122 0.683 0.122 0.897 0 0.418-0.122 0.836-0.377 1.254-0.255 0.439-0.388 0.765-0.388 0.997 0.102 0.396 0.775 0.674 2.009 0.837zM8.629 20.42c0-0.704 0.184-1.479 0.561-2.397 0.367-0.918 0.734-1.53 1.091-1.938-0.020-0.102-0.071-0.102-0.153-0.102l-0.102-0.102c-0.296 0.306-0.653 1.020-1.081 2.040-0.428 0.918-0.653 1.764-0.653 2.387 0 0.459 0.112 0.857 0.316 1.203 0.224 0.337 0.765 0.826 1.622 1.448l1.081 0.704c1.152 1 1.764 1.693 1.764 2.101 0 0.214-0.102 0.428-0.408 0.663-0.204 0.245-0.479 0.367-0.714 0.367-0.020 0-0.031 0.020-0.031 0.071 0 0.010 0.102 0.214 0.316 0.612 0.428 0.581 1.346 0.867 2.57 0.867 2.244 0 3.977-0.918 5.303-2.754 0-0.51 0-0.826-0.102-0.959v-0.377c0-0.663 0.102-1.163 0.306-1.489s0.408-0.479 0.714-0.479c0.204 0 0.408 0.071 0.612 0.224 0.102-0.785 0.102-1.469 0.102-2.081 0-0.928 0-1.693-0.204-2.407-0.102-0.612-0.306-1.122-0.51-1.53-0.204-0.306-0.408-0.612-0.612-0.918s-0.306-0.612-0.51-0.918c-0.102-0.408-0.204-0.714-0.204-1.224-0.306-0.51-0.51-1.020-0.816-1.53-0.204-0.51-0.408-1.020-0.612-1.428l-0.918 0.714c-1.020 0.714-1.836 1.020-2.55 1.020-0.612 0-1.122-0.102-1.428-0.51l-0.612-0.51c0 0.306-0.102 0.714-0.306 1.122l-0.643 1.224c-0.286 0.714-0.438 1.122-0.469 1.428-0.041 0.204-0.071 0.408-0.092 0.408l-0.765 1.53c-0.826 1.53-1.244 2.947-1.244 4.12 0 0.235 0.020 0.479 0.061 0.724-0.459-0.316-0.683-0.755-0.683-1.326zM15.932 30.068c-1.326 0-2.346 0.18-3.060 0.535v-0.031c-0.51 0.612-1.081 0.928-1.877 0.928-0.5 0-1.285-0.194-2.346-0.581-1.071-0.367-2.019-0.649-2.845-0.834-0.082-0.023-0.265-0.058-0.561-0.105-0.286-0.046-0.551-0.093-0.785-0.14-0.214-0.046-0.459-0.115-0.724-0.209-0.255-0.081-0.459-0.186-0.612-0.313-0.141-0.129-0.21-0.273-0.21-0.436s0.035-0.337 0.104-0.523c0.065-0.112 0.137-0.224 0.208-0.326 0.071-0.112 0.133-0.214 0.173-0.316 0.061-0.092 0.102-0.184 0.143-0.286 0.041-0.092 0.082-0.184 0.102-0.296 0.020-0.102 0.041-0.204 0.041-0.306s-0.041-0.408-0.122-0.948c-0.082-0.53-0.122-0.867-0.122-1.010 0-0.449 0.102-0.806 0.326-1.061s0.439-0.388 0.663-0.388h1.173c0.092 0 0.235-0.051 0.449-0.173 0.071-0.163 0.133-0.296 0.173-0.418 0.051-0.122 0.071-0.214 0.092-0.255 0.020-0.061 0.041-0.122 0.061-0.173 0.041-0.071 0.092-0.153 0.163-0.235-0.082-0.102-0.122-0.235-0.122-0.398 0-0.112 0-0.214 0.020-0.275 0-0.367 0.173-0.887 0.54-1.571l0.357-0.643c0.296-0.551 0.52-0.959 0.683-1.367 0.173-0.408 0.357-1.020 0.561-1.836 0.163-0.714 0.551-1.428 1.163-2.142l0.765-0.918c0.53-0.612 0.877-1.122 1.071-1.53s0.296-0.918 0.296-1.326c0-0.204-0.051-0.816-0.163-1.836-0.102-1.020-0.153-2.040-0.153-2.958 0-0.714 0.061-1.224 0.194-1.734s0.367-1.020 0.714-1.428c0.306-0.408 0.714-0.816 1.326-1.020s1.326-0.306 2.142-0.306c0.306 0 0.612 0 0.918 0.102 0.306 0 0.714 0.102 1.224 0.306 0.408 0.204 0.816 0.408 1.122 0.714 0.408 0.306 0.714 0.816 1.020 1.326 0.204 0.612 0.408 1.224 0.51 2.040 0.102 0.51 0.102 1.020 0.204 1.734 0 0.612 0.102 1.020 0.102 1.326 0.102 0.306 0.102 0.714 0.204 1.224 0.102 0.408 0.204 0.816 0.408 1.122 0.204 0.408 0.408 0.816 0.714 1.224 0.306 0.51 0.714 1.020 1.122 1.632 0.918 1.020 1.632 2.142 2.040 3.263 0.51 1.020 0.816 2.346 0.816 3.763 0 0.704-0.102 1.387-0.306 2.050 0.204 0 0.306 0.082 0.408 0.224s0.204 0.449 0.306 0.928l0.102 0.755c0.102 0.224 0.204 0.439 0.51 0.622 0.204 0.184 0.408 0.337 0.714 0.459 0.204 0.102 0.51 0.245 0.714 0.428 0.204 0.204 0.306 0.418 0.306 0.642 0 0.347-0.102 0.602-0.306 0.785-0.204 0.204-0.408 0.347-0.714 0.439-0.204 0.102-0.612 0.306-1.224 0.594-0.51 0.302-1.020 0.668-1.53 1.101l-1.020 0.868c-0.408 0.398-0.816 0.683-1.122 0.857-0.306 0.184-0.714 0.275-1.122 0.275l-0.714-0.082c-0.816-0.214-1.326-0.622-1.632-1.244-1.632-0.198-2.958-0.296-3.774-0.296z"}}]})(e)}function u(e){return(0,r.w_)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M13.821 15.761h-9.038v-7.747l9.038-1.291zM27.217 15.761h-12.185v-9.198l12.185-1.777zM13.821 16.81h-9.038v7.747l9.038 1.291zM27.217 16.81h-12.185v9.198l12.185 1.777z"}}]})(e)}},8100:function(e,t,n){"use strict";n.d(t,{ZP:function(){return H}});var r=n(7294);function i(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var u,a=function(){},c=a(),s=Object,l=function(e){return e===c},f=function(e){return"function"==typeof e},d=function(e,t){return s.assign({},e,t)},v="undefined",b=function(){return typeof window!=v},h=new WeakMap,g=0,p=function(e){var t,n,r=typeof e,i=e&&e.constructor,o=i==Date;if(s(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=h.get(e))return t;if(t=++g+"~",h.set(e,t),i==Array){for(t="@",n=0;n<e.length;n++)t+=p(e[n])+",";h.set(e,t)}if(i==s){t="#";for(var u=s.keys(e).sort();!l(n=u.pop());)l(e[n])||(t+=n+":"+p(e[n])+",");h.set(e,t)}}return t},y=!0,w=b(),m=typeof document!=v,M=w&&window.addEventListener?window.addEventListener.bind(window):a,E=m?document.addEventListener.bind(document):a,k=w&&window.removeEventListener?window.removeEventListener.bind(window):a,R=m?document.removeEventListener.bind(document):a,B={isOnline:function(){return y},isVisible:function(){var e=m&&document.visibilityState;return l(e)||"hidden"!==e}},z={initFocus:function(e){return E("visibilitychange",e),M("focus",e),function(){R("visibilitychange",e),k("focus",e)}},initReconnect:function(e){var t=function(){y=!0,e()},n=function(){y=!1};return M("online",t),M("offline",n),function(){k("online",t),k("offline",n)}}},O=!b()||"Deno"in window,T=function(e){return b()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},x=O?r.useEffect:r.useLayoutEffect,S="undefined"!=typeof navigator&&navigator.connection,C=!O&&S&&(["slow-2g","2g"].includes(S.effectiveType)||S.saveData),V=function(e){if(f(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?p(e):"",t,e?"$swr$"+e:""]},I=new WeakMap,P=function(e,t,n,r,i,o,u){void 0===u&&(u=!0);var a=I.get(e),c=a[0],s=a[1],l=a[3],f=c[t],d=s[t];if(u&&d)for(var v=0;v<d.length;++v)d[v](n,r,i);return o&&(delete l[t],f&&f[0])?f[0](2).then((function(){return e.get(t)})):e.get(t)},L=0,D=function(){return++L},N=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(void 0,void 0,void 0,(function(){var t,n,r,i,u,a,s,v,b,h,g,p,y,w,m,M,E,k,R,B,z;return o(this,(function(o){switch(o.label){case 0:if(t=e[0],n=e[1],r=e[2],i=e[3],a=!!l((u="boolean"==typeof i?{revalidate:i}:i||{}).populateCache)||u.populateCache,s=!1!==u.revalidate,v=!1!==u.rollbackOnError,b=u.optimisticData,h=V(n),g=h[0],p=h[2],!g)return[2];if(y=I.get(t),w=y[2],e.length<3)return[2,P(t,g,t.get(g),c,c,s,!0)];if(m=r,E=D(),w[g]=[E,0],k=!l(b),R=t.get(g),k&&(B=f(b)?b(R):b,t.set(g,B),P(t,g,B)),f(m))try{m=m(t.get(g))}catch(O){M=O}return m&&f(m.then)?[4,m.catch((function(e){M=e}))]:[3,2];case 1:if(m=o.sent(),E!==w[g][0]){if(M)throw M;return[2,m]}M&&k&&v&&(a=!0,m=R,t.set(g,R)),o.label=2;case 2:return a&&(M||(f(a)&&(m=a(m,R)),t.set(g,m)),t.set(p,d(t.get(p),{error:M}))),w[g][1]=D(),[4,P(t,g,m,M,c,s,!!a)];case 3:if(z=o.sent(),M)throw M;return[2,a?z:m]}}))}))},F=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},j=function(e,t){if(!I.has(e)){var n=d(z,t),r={},i=N.bind(c,e),o=a;if(I.set(e,[r,{},{},{},i]),!O){var u=n.initFocus(setTimeout.bind(c,F.bind(c,r,0))),s=n.initReconnect(setTimeout.bind(c,F.bind(c,r,1)));o=function(){u&&u(),s&&s(),I.delete(e)}}return[e,i,o]}return[e,I.get(e)[4]]},A=j(new Map),G=A[0],Z=A[1],_=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,t,n,r,i){var o=n.errorRetryCount,u=i.retryCount,a=~~((Math.random()+.5)*(1<<(u<8?u:8)))*n.errorRetryInterval;!l(o)&&u>o||setTimeout(r,a,i)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:C?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:C?5e3:3e3,compare:function(e,t){return p(e)==p(t)},isPaused:function(){return!1},cache:G,mutate:Z,fallback:{}},B),K=function(e,t){var n=d(e,t);if(t){var r=e.use,i=e.fallback,o=t.use,u=t.fallback;r&&o&&(n.use=r.concat(o)),i&&u&&(n.fallback=d(i,u))}return n},W=(0,r.createContext)({}),Y=function(e){return f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},q=function(){return d(_,(0,r.useContext)(W))},J=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},$={dedupe:!0},H=(s.defineProperty((function(e){var t=e.value,n=K((0,r.useContext)(W),t),i=t&&t.provider,o=(0,r.useState)((function(){return i?j(i(n.cache||G),t):c}))[0];return o&&(n.cache=o[0],n.mutate=o[1]),x((function(){return o?o[2]:c}),[]),(0,r.createElement)(W.Provider,d(e,{value:n}))}),"default",{value:_}),u=function(e,t,n){var u=n.cache,a=n.compare,s=n.fallbackData,v=n.suspense,b=n.revalidateOnMount,h=n.refreshInterval,g=n.refreshWhenHidden,p=n.refreshWhenOffline,y=I.get(u),w=y[0],m=y[1],M=y[2],E=y[3],k=V(e),R=k[0],B=k[1],z=k[2],S=(0,r.useRef)(!1),C=(0,r.useRef)(!1),L=(0,r.useRef)(R),F=(0,r.useRef)(t),j=(0,r.useRef)(n),A=function(){return j.current},G=function(){return A().isVisible()&&A().isOnline()},Z=function(e){return u.set(z,d(u.get(z),e))},_=u.get(R),K=l(s)?n.fallback[R]:s,W=l(_)?K:_,Y=u.get(z)||{},q=Y.error,H=!S.current,Q=function(){return H&&!l(b)?b:!A().isPaused()&&(v?!l(W)&&n.revalidateIfStale:l(W)||n.revalidateIfStale)},U=!(!R||!t)&&(!!Y.isValidating||H&&Q()),X=function(e,t){var n=(0,r.useState)({})[1],i=(0,r.useRef)(e),o=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),u=(0,r.useCallback)((function(e){var r=!1,u=i.current;for(var a in e){var c=a;u[c]!==e[c]&&(u[c]=e[c],o.current[c]&&(r=!0))}r&&!t.current&&n({})}),[]);return x((function(){i.current=e})),[i,o.current,u]}({data:W,error:q,isValidating:U},C),ee=X[0],te=X[1],ne=X[2],re=(0,r.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var t,r,i,s,d,v,b,h,g,p,y,w,m;return o(this,(function(o){switch(o.label){case 0:if(t=F.current,!R||!t||C.current||A().isPaused())return[2,!1];s=!0,d=e||{},v=!E[R]||!d.dedupe,b=function(){return!C.current&&R===L.current&&S.current},h=function(){var e=E[R];e&&e[1]===i&&delete E[R]},g={isValidating:!1},p=function(){Z({isValidating:!1}),b()&&ne(g)},Z({isValidating:!0}),ne({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),v&&(P(u,R,ee.current.data,ee.current.error,!0),n.loadingTimeout&&!u.get(R)&&setTimeout((function(){s&&b()&&A().onLoadingSlow(R,n)}),n.loadingTimeout),E[R]=[t.apply(void 0,B),D()]),m=E[R],r=m[0],i=m[1],[4,r];case 2:return r=o.sent(),v&&setTimeout(h,n.dedupingInterval),E[R]&&E[R][1]===i?(Z({error:c}),g.error=c,y=M[R],!l(y)&&(i<=y[0]||i<=y[1]||0===y[1])?(p(),v&&b()&&A().onDiscarded(R),[2,!1]):(a(ee.current.data,r)?g.data=ee.current.data:g.data=r,a(u.get(R),r)||u.set(R,r),v&&b()&&A().onSuccess(r,R,n),[3,4])):(v&&b()&&A().onDiscarded(R),[2,!1]);case 3:return w=o.sent(),h(),A().isPaused()||(Z({error:w}),g.error=w,v&&b()&&(A().onError(w,R,n),("boolean"==typeof n.shouldRetryOnError&&n.shouldRetryOnError||f(n.shouldRetryOnError)&&n.shouldRetryOnError(w))&&G()&&A().onErrorRetry(w,R,n,re,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return s=!1,p(),b()&&v&&P(u,R,g.data,g.error,!1),[2,!0]}}))}))}),[R]),ie=(0,r.useCallback)(N.bind(c,u,(function(){return L.current})),[]);if(x((function(){F.current=t,j.current=n})),x((function(){if(R){var e=R!==L.current,t=re.bind(c,$),n=0,r=J(R,m,(function(e,t,n){ne(d({error:t,isValidating:n},a(ee.current.data,e)?c:{data:e}))})),i=J(R,w,(function(e){if(0==e){var r=Date.now();A().revalidateOnFocus&&r>n&&G()&&(n=r+A().focusThrottleInterval,t())}else if(1==e)A().revalidateOnReconnect&&G()&&t();else if(2==e)return re()}));return C.current=!1,L.current=R,S.current=!0,e&&ne({data:W,error:q,isValidating:U}),Q()&&(l(W)||O?t():T(t)),function(){C.current=!0,r(),i()}}}),[R,re]),x((function(){var e;function t(){var t=f(h)?h(W):h;t&&-1!==e&&(e=setTimeout(n,t))}function n(){ee.current.error||!g&&!A().isVisible()||!p&&!A().isOnline()?t():re($).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[h,g,p,re]),(0,r.useDebugValue)(W),v&&l(W)&&R)throw F.current=t,j.current=n,C.current=!1,l(q)?re($):q;return{mutate:ie,get data(){return te.data=!0,W},get error(){return te.error=!0,q},get isValidating(){return te.isValidating=!0,U}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=q(),r=Y(e),i=r[0],o=r[1],a=r[2],c=K(n,a),s=u,l=c.use;if(l)for(var f=l.length;f-- >0;)s=l[f](s);return s(i,o||c.fetcher,c)})}}]);