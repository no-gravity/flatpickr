!function(q){var z="object"==typeof window&&window||"object"==typeof self&&self;"undefined"==typeof exports?z&&(z.hljs=q({}),"function"==typeof define&&define.amd&&define([],function(){return z.hljs})):q(exports)}(function(q){function z(ha){return ha.replace(/[&<>]/gm,function(ia){return ga[ia]})}function A(ha){return ha.nodeName.toLowerCase()}function D(ha,ia){var ja=ha&&ha.exec(ia);return ja&&0===ja.index}function F(ha){return ba.test(ha)}function G(ha){var ia,ja,ka,la,ma=ha.className+" ";if(ma+=ha.parentNode?ha.parentNode.className:"",ja=ca.exec(ma))return Y(ja[1])?ja[1]:"no-highlight";for(ma=ma.split(/\s+/),ia=0,ka=ma.length;ka>ia;ia++)if(la=ma[ia],F(la)||Y(la))return la}function H(ha,ia){var ja,ka={};for(ja in ha)ka[ja]=ha[ja];if(ia)for(ja in ia)ka[ja]=ia[ja];return ka}function J(ha){var ia=[];return function ja(ka,la){for(var ma=ka.firstChild;ma;ma=ma.nextSibling)3===ma.nodeType?la+=ma.nodeValue.length:1===ma.nodeType&&(ia.push({event:"start",offset:la,node:ma}),la=ja(ma,la),A(ma).match(/br|hr|img|input/)||ia.push({event:"stop",offset:la,node:ma}));return la}(ha,0),ia}function K(ha,ia,ja){function ka(){return ha.length&&ia.length?ha[0].offset===ia[0].offset?"start"===ia[0].event?ha:ia:ha[0].offset<ia[0].offset?ha:ia:ha.length?ha:ia}function la(sa){pa+="<"+A(sa)+Z.map.call(sa.attributes,function(ua){return" "+ua.nodeName+"=\""+z(ua.value)+"\""}).join("")+">"}function ma(sa){pa+="</"+A(sa)+">"}function na(sa){("start"===sa.event?la:ma)(sa.node)}for(var oa=0,pa="",qa=[];ha.length||ia.length;){var ra=ka();if(pa+=z(ja.substr(oa,ra[0].offset-oa)),oa=ra[0].offset,ra===ha){qa.reverse().forEach(ma);do na(ra.splice(0,1)[0]),ra=ka();while(ra===ha&&ra.length&&ra[0].offset===oa);qa.reverse().forEach(la)}else"start"===ra[0].event?qa.push(ra[0].node):qa.pop(),na(ra.splice(0,1)[0])}return pa+z(ja.substr(oa))}function P(ha){function ia(la){return la&&la.source||la}function ja(la,ma){return new RegExp(ia(la),"m"+(ha.cI?"i":"")+(ma?"g":""))}function ka(la,ma){if(!la.compiled){if(la.compiled=!0,la.k=la.k||la.bK,la.k){var na={},oa=function(ra,sa){ha.cI&&(sa=sa.toLowerCase()),sa.split(" ").forEach(function(ta){var ua=ta.split("|");na[ua[0]]=[ra,ua[1]?+ua[1]:1]})};"string"==typeof la.k?oa("keyword",la.k):$(la.k).forEach(function(ra){oa(ra,la.k[ra])}),la.k=na}la.lR=ja(la.l||/\w+/,!0),ma&&(la.bK&&(la.b="\\b("+la.bK.split(" ").join("|")+")\\b"),la.b||(la.b=/\B|\b/),la.bR=ja(la.b),la.e||la.eW||(la.e=/\B|\b/),la.e&&(la.eR=ja(la.e)),la.tE=ia(la.e)||"",la.eW&&ma.tE&&(la.tE+=(la.e?"|":"")+ma.tE)),la.i&&(la.iR=ja(la.i)),null==la.r&&(la.r=1),la.c||(la.c=[]);var pa=[];la.c.forEach(function(ra){ra.v?ra.v.forEach(function(sa){pa.push(H(ra,sa))}):pa.push("self"===ra?la:ra)}),la.c=pa,la.c.forEach(function(ra){ka(ra,la)}),la.starts&&ka(la.starts,ma);var qa=la.c.map(function(ra){return ra.bK?"\\.?("+ra.b+")\\.?":ra.b}).concat([la.tE,la.i]).map(ia).filter(Boolean);la.t=qa.length?ja(qa.join("|"),!0):{exec:function(){return null}}}}ka(ha)}function Q(ha,ia,ja,ka){function la(Fa,Ga){var Ha,Ia;for(Ha=0,Ia=Ga.c.length;Ia>Ha;Ha++)if(D(Ga.c[Ha].bR,Fa))return Ga.c[Ha]}function ma(Fa,Ga){if(D(Fa.eR,Ga)){for(;Fa.endsParent&&Fa.parent;)Fa=Fa.parent;return Fa}return Fa.eW?ma(Fa.parent,Ga):void 0}function na(Fa,Ga){return!ja&&D(Ga.iR,Fa)}function oa(Fa,Ga){var Ha=va.cI?Ga[0].toLowerCase():Ga[0];return Fa.k.hasOwnProperty(Ha)&&Fa.k[Ha]}function pa(Fa,Ga,Ha,Ia){var Ja=Ia?"":fa.classPrefix,Ka="<span class=\""+Ja,La=Ha?"":ea;return Ka+=Fa+"\">",Ka+Ga+La}function qa(){var Fa,Ga,Ha,Ia;if(!xa.k)return z(Aa);for(Ia="",Ga=0,xa.lR.lastIndex=0,Ha=xa.lR.exec(Aa);Ha;)Ia+=z(Aa.substr(Ga,Ha.index-Ga)),Fa=oa(xa,Ha),Fa?(Ba+=Fa[1],Ia+=pa(Fa[0],z(Ha[0]))):Ia+=z(Ha[0]),Ga=xa.lR.lastIndex,Ha=xa.lR.exec(Aa);return Ia+z(Aa.substr(Ga))}function ra(){var Fa="string"==typeof xa.sL;if(Fa&&!_[xa.sL])return z(Aa);var Ga=Fa?Q(xa.sL,Aa,!0,ya[xa.sL]):S(Aa,xa.sL.length?xa.sL:void 0);return 0<xa.r&&(Ba+=Ga.r),Fa&&(ya[xa.sL]=Ga.top),pa(Ga.language,Ga.value,!1,!0)}function sa(){za+=null==xa.sL?qa():ra(),Aa=""}function ta(Fa){za+=Fa.cN?pa(Fa.cN,"",!0):"",xa=Object.create(Fa,{parent:{value:xa}})}function ua(Fa,Ga){if(Aa+=Fa,null==Ga)return sa(),0;var Ha=la(Ga,xa);if(Ha)return Ha.skip?Aa+=Ga:(Ha.eB&&(Aa+=Ga),sa(),Ha.rB||Ha.eB||(Aa=Ga)),ta(Ha,Ga),Ha.rB?0:Ga.length;var Ia=ma(xa,Ga);if(Ia){var Ja=xa;Ja.skip?Aa+=Ga:(Ja.rE||Ja.eE||(Aa+=Ga),sa(),Ja.eE&&(Aa=Ga));do xa.cN&&(za+=ea),xa.skip||(Ba+=xa.r),xa=xa.parent;while(xa!==Ia.parent);return Ia.starts&&ta(Ia.starts,""),Ja.rE?0:Ga.length}if(na(Ga,xa))throw new Error("Illegal lexeme \""+Ga+"\" for mode \""+(xa.cN||"<unnamed>")+"\"");return Aa+=Ga,Ga.length||1}var va=Y(ha);if(!va)throw new Error("Unknown language: \""+ha+"\"");P(va);var wa,xa=ka||va,ya={},za="";for(wa=xa;wa!==va;wa=wa.parent)wa.cN&&(za=pa(wa.cN,"",!0)+za);var Aa="",Ba=0;try{for(var Ca,Da,Ea=0;;){if(xa.t.lastIndex=Ea,Ca=xa.t.exec(ia),!Ca)break;Da=ua(ia.substr(Ea,Ca.index-Ea),Ca[0]),Ea=Ca.index+Da}for(ua(ia.substr(Ea)),wa=xa;wa.parent;wa=wa.parent)wa.cN&&(za+=ea);return{r:Ba,value:za,language:ha,top:xa}}catch(Fa){if(Fa.message&&-1!==Fa.message.indexOf("Illegal"))return{r:0,value:z(ia)};throw Fa}}function S(ha,ia){ia=ia||fa.languages||$(_);var ja={r:0,value:z(ha)},ka=ja;return ia.filter(Y).forEach(function(la){var ma=Q(la,ha,!1);ma.language=la,ma.r>ka.r&&(ka=ma),ma.r>ja.r&&(ka=ja,ja=ma)}),ka.language&&(ja.second_best=ka),ja}function U(ha){return fa.tabReplace||fa.useBR?ha.replace(da,function(ia,ja){return fa.useBR&&"\n"===ia?"<br>":fa.tabReplace?ja.replace(/\t/g,fa.tabReplace):void 0}):ha}function V(ha,ia,ja){var ka=ia?aa[ia]:ja,la=[ha.trim()];return ha.match(/\bhljs\b/)||la.push("hljs"),-1===ha.indexOf(ka)&&la.push(ka),la.join(" ").trim()}function W(ha){var ia,ja,ka,la,ma,na=G(ha);F(na)||(fa.useBR?(ia=document.createElementNS("http://www.w3.org/1999/xhtml","div"),ia.innerHTML=ha.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):ia=ha,ma=ia.textContent,ka=na?Q(na,ma,!0):S(ma),ja=J(ia),ja.length&&(la=document.createElementNS("http://www.w3.org/1999/xhtml","div"),la.innerHTML=ka.value,ka.value=K(ja,J(la),ma)),ka.value=U(ka.value),ha.innerHTML=ka.value,ha.className=V(ha.className,na,ka.language),ha.result={language:ka.language,re:ka.r},ka.second_best&&(ha.second_best={language:ka.second_best.language,re:ka.second_best.r}))}function X(){if(!X.called){X.called=!0;var ha=document.querySelectorAll("pre code");Z.forEach.call(ha,W)}}function Y(ha){return ha=(ha||"").toLowerCase(),_[ha]||_[aa[ha]]}var Z=[],$=Object.keys,_={},aa={},ba=/^(no-?highlight|plain|text)$/i,ca=/\blang(?:uage)?-([\w-]+)\b/i,da=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,ea="</span>",fa={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},ga={"&":"&amp;","<":"&lt;",">":"&gt;"};return q.highlight=Q,q.highlightAuto=S,q.fixMarkup=U,q.highlightBlock=W,q.configure=function(ia){fa=H(fa,ia)},q.initHighlighting=X,q.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",X,!1),addEventListener("load",X,!1)},q.registerLanguage=function(ia,ja){var ka=_[ia]=ja(q);ka.aliases&&ka.aliases.forEach(function(la){aa[la]=ia})},q.listLanguages=function(){return $(_)},q.getLanguage=Y,q.inherit=H,q.IR="[a-zA-Z]\\w*",q.UIR="[a-zA-Z_]\\w*",q.NR="\\b\\d+(\\.\\d+)?",q.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",q.BNR="\\b(0b[01]+)",q.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",q.BE={b:"\\\\[\\s\\S]",r:0},q.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[q.BE]},q.QSM={cN:"string",b:"\"",e:"\"",i:"\\n",c:[q.BE]},q.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},q.C=function(ha,ia,ja){var ka=q.inherit({cN:"comment",b:ha,e:ia,c:[]},ja||{});return ka.c.push(q.PWM),ka.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),ka},q.CLCM=q.C("//","$"),q.CBCM=q.C("/\\*","\\*/"),q.HCM=q.C("#","$"),q.NM={cN:"number",b:q.NR,r:0},q.CNM={cN:"number",b:q.CNR,r:0},q.BNM={cN:"number",b:q.BNR,r:0},q.CSSNM={cN:"number",b:q.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},q.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[q.BE,{b:/\[/,e:/\]/,r:0,c:[q.BE]}]},q.TM={cN:"title",b:q.IR,r:0},q.UTM={cN:"title",b:q.UIR,r:0},q.METHOD_GUARD={b:"\\.\\s*"+q.UIR,r:0},q}),hljs.registerLanguage("http",function(){var q="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+q,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+q+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:q},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}}),hljs.registerLanguage("css",function(q){var z={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[q.ASM,q.QSM]}]},q.CSSNM,q.QSM,q.ASM,q.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[q.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[q.ASM,q.QSM,q.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[q.CBCM,z]}]}}),hljs.registerLanguage("xml",function(q){var z={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},q.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[z],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[z],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},z]}]}}),hljs.registerLanguage("json",function(q){var z={literal:"true false null"},A=[q.QSM,q.CNM],D={e:",",eW:!0,eE:!0,c:A,k:z},F={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[q.BE],i:"\\n"},q.inherit(D,{b:/:/})],i:"\\S"},G={b:"\\[",e:"\\]",c:[q.inherit(D)],i:"\\S"};return A.splice(A.length,0,F,G),{c:A,k:z,i:"\\S"}}),hljs.registerLanguage("javascript",function(q){var z="[A-Za-z$_][0-9A-Za-z$_]*",A={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},D={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:q.CNR}],r:0},F={cN:"subst",b:"\\$\\{",e:"\\}",k:A,c:[]},G={cN:"string",b:"`",e:"`",c:[q.BE,F]};F.c=[q.ASM,q.QSM,G,D,q.RM];var H=F.c.concat([q.CBCM,q.CLCM]);return{aliases:["js","jsx"],k:A,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},q.ASM,q.QSM,G,q.CLCM,q.CBCM,D,{b:/[{,]\s*/,r:0,c:[{b:z+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:z,r:0}]}]},{b:"("+q.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[q.CLCM,q.CBCM,q.RM,{cN:"function",b:"(\\(.*?\\)|"+z+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:z},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:A,c:H}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[q.inherit(q.TM,{b:z}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:H}],i:/\[|%/},{b:/\$[(.]/},q.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},q.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});
var calendars=document.getElementsByClassName("flatpickr").flatpickr();flatpickr("#example-defaultDate",{enableTime:!0,defaultDate:1477697199863}),document.getElementById("disableRange").flatpickr({disable:[{from:"2016-08-16",to:"2016-08-19"},"2016-08-24",new Date().fp_incr(30)// 30 days from now
]}),document.getElementById("disableOddDays").flatpickr({disable:[function(a){return a.getDate()%2}// disable odd days
]}),document.getElementById("enableNextSeven").flatpickr({enable:[{from:"today",to:new Date().fp_incr(7)}]}),document.getElementById("enableCustom").flatpickr({enable:[function(a){return 0!=a.getDay()%6&&2016===a.getFullYear()}]}),flatpickr("#range-disabled",{mode:"range",disable:[function(a){return 0==a.getDate()%6}]});// Event API
var events=document.getElementById("events");function showHook(a){return function(b,c){events.innerHTML+="<b>"+a+"</b> (<code>"+b+"</code>, <code>"+c+"</code> )<br>",events.scrollTop=events.offsetTop}}document.getElementById("events-api-example").flatpickr({minDate:"today",enableTime:!0,onChange:showHook("onChange"),onOpen:showHook("onOpen"),onClose:showHook("onClose"),onMonthChange:showHook("onMonthChange"),onYearChange:showHook("onYearChange"),onReady:showHook("onReady")}),flatpickr("#dayCreate",{onDayCreate:function(a,b,c,d){0.15>Math.random()?d.innerHTML+="<span class='event'></span>":0.85<Math.random()&&(d.innerHTML+="<span class='event busy'></span>")}}),document.getElementById("fiscal").flatpickr({weekNumbers:!0,getWeek:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();b.setMonth(7),b.setDate(28);var d=Math.floor(Math.round((c-b)/8.64e7)/7)+2;return 1>d&&(d=52+d),"FW"+("0"+d).slice(-2)}});// Date format
var formatOutput=document.getElementById("dateFormatOutput"),fp=new Flatpickr(document.createElement("input")),now=new Date;document.getElementById("dateFormatComposer").addEventListener("keyup",function(a){formatOutput.textContent=fp.formatDate(a.target.value,now)}),hljs.initHighlighting();
const theme_sel=document.getElementById("themes"),stylesheet=document.getElementById("cal_style"),themes=["dark","material_blue","material_red","material_orange","material_green","airbnb","confetti"];//theme_sel.href = "dist/flatpickr" + themes[Math.floor(Math.random()*themes.length)] + ".min.css";
for(let a=0;a<themes.length;a++){const b=document.createElement("option");b.className=themes[a],b.value=themes[a],b.innerText=themes[a].replace(/_/g," "),theme_sel.appendChild(b)}theme_sel.addEventListener("change",function(a){return theme_sel.blur(),a.target.value&&"default"!==a.target.value?void(stylesheet.href="bower_components/flatpickr/dist/themes/"+a.target.value+".css"):stylesheet.href="bower_components/flatpickr/dist/flatpickr.css"});
