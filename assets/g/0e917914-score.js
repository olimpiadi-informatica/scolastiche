/*! For licenses information, see LICENSES.txt */
import{t as E,j as x,c as L}from"../_virtual_quizms-routes-43c24d3c.js";import{t as i}from"../y/4b12a8dc-toString.js";function M(u,e,r,a){for(var n=-1,t=u==null?0:u.length;++n<t;)r=e(r,u[n],n,u);return r}function j(u){return function(e){return u?.[e]}}var k={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},z=j(k),D=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,I="\\u0300-\\u036f",N="\\ufe20-\\ufe2f",Z="\\u20d0-\\u20ff",$=I+N+Z,W="["+$+"]",T=RegExp(W,"g");function y(u){return u=i(u),u&&u.replace(D,z).replace(T,"")}var H=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function J(u){return u.match(H)||[]}var G=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function F(u){return G.test(u)}var b="\\ud800-\\udfff",P="\\u0300-\\u036f",V="\\ufe20-\\ufe2f",Y="\\u20d0-\\u20ff",q=P+V+Y,g="\\u2700-\\u27bf",l="a-z\\xdf-\\xf6\\xf8-\\xff",B="\\xac\\xb1\\xd7\\xf7",_="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",K="\\u2000-\\u206f",Q=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",m="A-Z\\xc0-\\xd6\\xd8-\\xde",X="\\ufe0e\\ufe0f",p=B+_+K+Q,R="['’]",s="["+p+"]",u0="["+q+"]",A="\\d+",e0="["+g+"]",h="["+l+"]",C="[^"+b+p+A+g+l+m+"]",r0="\\ud83c[\\udffb-\\udfff]",n0="(?:"+u0+"|"+r0+")",o0="[^"+b+"]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",o="["+m+"]",a0="\\u200d",f="(?:"+h+"|"+C+")",x0="(?:"+o+"|"+C+")",d="(?:"+R+"(?:d|ll|m|re|s|t|ve))?",c="(?:"+R+"(?:D|LL|M|RE|S|T|VE))?",w=n0+"?",S="["+X+"]?",t0="(?:"+a0+"(?:"+[o0,O,v].join("|")+")"+S+w+")*",s0="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",f0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",d0=S+w+t0,c0="(?:"+[e0,O,v].join("|")+")"+d0,i0=RegExp([o+"?"+h+"+"+d+"(?="+[s,o,"$"].join("|")+")",x0+"+"+c+"(?="+[s,o+f,"$"].join("|")+")",o+"?"+f+"+"+d,o+"+"+c,f0,s0,A,c0].join("|"),"g");function b0(u){return u.match(i0)||[]}function g0(u,e,r){return u=i(u),e=e,e===void 0?F(u)?b0(u):J(u):u.match(e)||[]}var l0="['’]",m0=RegExp(l0,"g");function p0(u){return function(e){return M(g0(y(e).replace(m0,"")),u,"")}}var R0=p0(function(u,e,r){return u+(r?"-":"")+e.toLowerCase()});function A0(u){return+E(u)>Date.now()}function O0({edition:u}){const e=`${window.location.pathname}${R0(u)}/`,r=JSON.parse(localStorage.getItem("quizms")??"{}")[e];if(!r)return;if(r.finishedAt&&A0(r.finishedAt))return x.jsx("div",{className:"rounded-lg px-2 text-sm bg-warning text-warning-content",children:"in corso..."});const a=r.score,n=r.maxScore;if(!a||!n)return;const U=["bg-red-400 text-error-content","bg-orange-400 text-warning-content","bg-yellow-400 text-warning-content","bg-lime-400 text-warning-content","bg-green-400 text-success-content"][Math.floor(a/n*4)];return x.jsxs("div",{className:L("rounded-lg px-2 text-sm",U),children:[Math.round(a)," ",n&&x.jsxs(x.Fragment,{children:["/ ",n]})]})}export{O0 as S,R0 as k};
//# sourceMappingURL=0e917914-score.js.map
