(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-774633b3","chunk-2d213dde"],{"971e":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var d={narrow:["fvt","vt"],abbreviated:["f.v.t.","v.t."],wide:["før vesterlandsk tidsregning","vesterlandsk tidsregning"]},i={narrow:["1","2","3","4"],abbreviated:["1. kvt.","2. kvt.","3. kvt.","4. kvt."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},o={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},m={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn.","man.","tir.","ons.","tor.","fre.","lør."],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},u={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"}},g={narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"}};function f(e){var n=Number(e);return n+"."}var l={ordinalNumber:f,era:(0,t.default)({values:d,defaultWidth:"wide"}),quarter:(0,t.default)({values:i,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,t.default)({values:o,defaultWidth:"wide"}),day:(0,t.default)({values:m,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:u,defaultWidth:"wide",formattingValues:g,defaultFormattingWidth:"wide"})},v=l;n.default=v,e.exports=n.default},af03:function(e,n,a){"use strict";function t(e){return function(n,a){var t,r=a||{},d=r.context?String(r.context):"standalone";if("formatting"===d&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;t=e.formattingValues[o]||e.formattingValues[i]}else{var m=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;t=e.values[u]||e.values[m]}var g=e.argumentCallback?e.argumentCallback(n):n;return t[g]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=t,e.exports=n.default}}]);
//# sourceMappingURL=chunk-774633b3.f7f2c479.js.map