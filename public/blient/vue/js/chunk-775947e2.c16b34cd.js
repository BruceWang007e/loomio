(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-775947e2","chunk-2d213dde"],{af03:function(t,a,n){"use strict";function e(t){return function(a,n){var e,i=n||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,d=i.width?String(i.width):o;e=t.formattingValues[d]||t.formattingValues[o]}else{var u=t.defaultWidth,g=i.width?String(i.width):t.defaultWidth;e=t.values[g]||t.values[u]}var m=t.argumentCallback?t.argumentCallback(a):a;return e[m]}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=e,t.exports=a.default},c64b:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i(n("af03"));function i(t){return t&&t.__esModule?t:{default:t}}var r={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},d={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},u={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},g={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},m={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}};function h(t,a){var n=Number(t);return n+"."}var l={ordinalNumber:h,era:(0,e.default)({values:r,defaultWidth:"wide"}),quarter:(0,e.default)({values:o,defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,e.default)({values:d,defaultWidth:"wide"}),day:(0,e.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,e.default)({values:g,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},s=l;a.default=s,t.exports=a.default}}]);
//# sourceMappingURL=chunk-775947e2.c16b34cd.js.map