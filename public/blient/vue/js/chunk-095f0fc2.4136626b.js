(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-095f0fc2","chunk-b296abce","chunk-10d0f64f","chunk-7758c67b","chunk-2d0b6c4a","chunk-2d213dde","chunk-2d20e7ca","chunk-2d0e5bd1","chunk-2d0ac5ad","chunk-2d0a4f7b"],{"0962":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=o;var n={lastWeek:"'el' eeee 'pasado a la' LT",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},r={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"};function o(e,a,t,o){return 1!==a.getUTCHours()?r[e]:n[e]}e.exports=a.default},"18d4":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;var n={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}};function r(e,a,t){var r;return t=t||{},r="string"===typeof n[e]?n[e]:1===a?n[e].one:n[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"en "+r:"hace "+r:r}e.exports=a.default},"1f21":function(e,a,t){"use strict";function n(e){return function(a){var t=a||{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},"260f":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var o={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},d={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},i={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,n.default)({formats:o,defaultWidth:"full"}),time:(0,n.default)({formats:d,defaultWidth:"full"}),dateTime:(0,n.default)({formats:i,defaultWidth:"full"})},s=u;a.default=s,e.exports=a.default},"579a":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t("9686")),r=o(t("b028"));function o(e){return e&&e.__esModule?e:{default:e}}var d=/^(\d+)(º)?/i,i=/\d+/i,u={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},s={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},l={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},m={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},f={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},h={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|sa)/i,abbreviated:/^(dom|lun|mar|mie|jue|vie|sab)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},v={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},b={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},p={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},g={ordinalNumber:(0,n.default)({matchPattern:d,parsePattern:i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},w=g;a.default=w,e.exports=a.default},9686:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),r=t||{},o=n.match(e.matchPattern);if(!o)return null;var d=o[0],i=n.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];return u=r.valueCallback?r.valueCallback(u):u,{value:u,rest:n.slice(d.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},af03:function(e,a,t){"use strict";function n(e){return function(a,t){var n,r=t||{},o=r.context?String(r.context):"standalone";if("formatting"===o&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):d;n=e.formattingValues[i]||e.formattingValues[d]}else{var u=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;n=e.values[s]||e.values[u]}var l=e.argumentCallback?e.argumentCallback(a):a;return n[l]}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},b028:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),d=t||{},i=d.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=n.match(u);if(!s)return null;var l,m=s[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(c)?o(c,(function(e){return e.test(m)})):r(c,(function(e){return e.test(m)})),l=e.valueCallback?e.valueCallback(l):l,l=d.valueCallback?d.valueCallback(l):l,{value:l,rest:n.slice(m.length)}}}function r(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function o(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},b1e0:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var o={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},d={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},i={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},u={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sa"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},s={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},l={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}};function m(e){var a=Number(e);return a+"º"}var c={ordinalNumber:m,era:(0,n.default)({values:o,defaultWidth:"wide"}),quarter:(0,n.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:i,defaultWidth:"wide"}),day:(0,n.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:s,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},f=c;a.default=f,e.exports=a.default},fd2d:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t("18d4")),r=u(t("260f")),o=u(t("0962")),d=u(t("b1e0")),i=u(t("579a"));function u(e){return e&&e.__esModule?e:{default:e}}var s={code:"es",formatDistance:n.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},l=s;a.default=l,e.exports=a.default}}]);
//# sourceMappingURL=chunk-095f0fc2.4136626b.js.map