(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04ced163","chunk-b2996dc6","chunk-10e6c4e8","chunk-7759b4d3","chunk-2d0b6c4a","chunk-2d213dde","chunk-2d20e7ca","chunk-2d0e5bd1","chunk-2d0de2db","chunk-2d0b2ce9"],{"1f21":function(e,t,n){"use strict";function o(e){return function(t){var n=t||{},o=n.width?String(n.width):e.defaultWidth,r=e.formats[o]||e.formats[e.defaultWidth];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},"264c":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o={lastWeek:function(e){var t=e.getUTCDay(),n="'läschte";return 2!==t&&4!==t||(n+="n"),n+="' eeee 'um' p",n},yesterday:"'gëschter um' p",today:"'haut um' p",tomorrow:"'moien um' p",nextWeek:"eeee 'um' p",other:"P"};function r(e,t,n,r){var a=o[e];return"function"===typeof a?a(t):a}e.exports=t.default},"268b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("9686")),r=a(n("b028"));function a(e){return e&&e.__esModule?e:{default:e}}var i=/^(\d+)(\.)?/i,u=/\d+/i,d={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i},s={any:[/^v/i,/^n/i]},l={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},f={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i},c={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mä/i,/^ab/i,/^me/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},m={narrow:/^[smdf]/i,short:/^(so|mé|dë|më|do|fr|sa)/i,abbreviated:/^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i,wide:/^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i},g={any:[/^so/i,/^mé/i,/^dë/i,/^më/i,/^do/i,/^f/i,/^sa/i]},v={narrow:/^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,abbreviated:/^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,wide:/^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i},w={any:{am:/^m/i,pm:/^n/i,midnight:/^Mëtter/i,noon:/^mëttes/i,morning:/moies/i,afternoon:/nomëttes/i,evening:/owes/i,night:/nuets/i}},b={ordinalNumber:(0,o.default)({matchPattern:i,parsePattern:u,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:w,defaultParseWidth:"any"})},M=b;t.default=M,e.exports=t.default},7315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n("8519")),r=d(n("b566")),a=d(n("264c")),i=d(n("d468")),u=d(n("268b"));function d(e){return e&&e.__esModule?e:{default:e}}var s={code:"lb",formatDistance:o.default,formatLong:r.default,formatRelative:a.default,localize:i.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},l=s;t.default=l,e.exports=t.default},8519:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o={lessThanXSeconds:{standalone:{one:"manner wéi eng Sekonn",other:"manner wéi {{count}} Sekonnen"},withPreposition:{one:"manner wéi enger Sekonn",other:"manner wéi {{count}} Sekonnen"}},xSeconds:{standalone:{one:"eng Sekonn",other:"{{count}} Sekonnen"},withPreposition:{one:"enger Sekonn",other:"{{count}} Sekonnen"}},halfAMinute:{standalone:"eng hallef Minutt",withPreposition:"enger hallwer Minutt"},lessThanXMinutes:{standalone:{one:"manner wéi eng Minutt",other:"manner wéi {{count}} Minutten"},withPreposition:{one:"manner wéi enger Minutt",other:"manner wéi {{count}} Minutten"}},xMinutes:{standalone:{one:"eng Minutt",other:"{{count}} Minutten"},withPreposition:{one:"enger Minutt",other:"{{count}} Minutten"}},aboutXHours:{standalone:{one:"ongeféier eng Stonn",other:"ongeféier {{count}} Stonnen"},withPreposition:{one:"ongeféier enger Stonn",other:"ongeféier {{count}} Stonnen"}},xHours:{standalone:{one:"eng Stonn",other:"{{count}} Stonnen"},withPreposition:{one:"enger Stonn",other:"{{count}} Stonnen"}},xDays:{standalone:{one:"een Dag",other:"{{count}} Deeg"},withPreposition:{one:"engem Dag",other:"{{count}} Deeg"}},aboutXWeeks:{standalone:{one:"ongeféier eng Woch",other:"ongeféier {{count}} Wochen"},withPreposition:{one:"ongeféier enger Woche",other:"ongeféier {{count}} Wochen"}},xWeeks:{standalone:{one:"eng Woch",other:"{{count}} Wochen"},withPreposition:{one:"enger Woch",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"ongeféier ee Mount",other:"ongeféier {{count}} Méint"},withPreposition:{one:"ongeféier engem Mount",other:"ongeféier {{count}} Méint"}},xMonths:{standalone:{one:"ee Mount",other:"{{count}} Méint"},withPreposition:{one:"engem Mount",other:"{{count}} Méint"}},aboutXYears:{standalone:{one:"ongeféier ee Joer",other:"ongeféier {{count}} Joer"},withPreposition:{one:"ongeféier engem Joer",other:"ongeféier {{count}} Joer"}},xYears:{standalone:{one:"ee Joer",other:"{{count}} Joer"},withPreposition:{one:"engem Joer",other:"{{count}} Joer"}},overXYears:{standalone:{one:"méi wéi ee Joer",other:"méi wéi {{count}} Joer"},withPreposition:{one:"méi wéi engem Joer",other:"méi wéi {{count}} Joer"}},almostXYears:{standalone:{one:"bal ee Joer",other:"bal {{count}} Joer"},withPreposition:{one:"bal engem Joer",other:"bal {{count}} Joer"}}},r=["d","h","n","t","z"],a=["a,","e","i","o","u"],i=[0,1,2,3,8,9],u=[40,50,60,70];function d(e){var t=e.charAt(0).toLowerCase();if(-1!=a.indexOf(t)||-1!=r.indexOf(t))return!0;var n=e.split(" ")[0],o=parseInt(n);return!isNaN(o)&&-1!=i.indexOf(o%10)&&-1==u.indexOf(parseInt(n.substring(0,2)))}function s(e,t,n){n=n||{};var r,a=n.addSuffix?o[e].withPreposition:o[e].standalone;return r="string"===typeof a?a:1===t?a.one:a.other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"a"+(d(r)?"n":"")+" "+r:"viru"+(d(r)?"n":"")+" "+r:r}e.exports=t.default},9686:function(e,t,n){"use strict";function o(e){return function(t,n){var o=String(t),r=n||{},a=o.match(e.matchPattern);if(!a)return null;var i=a[0],u=o.match(e.parsePattern);if(!u)return null;var d=e.valueCallback?e.valueCallback(u[0]):u[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:o.slice(i.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},af03:function(e,t,n){"use strict";function o(e){return function(t,n){var o,r=n||{},a=r.context?String(r.context):"standalone";if("formatting"===a&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;o=e.formattingValues[u]||e.formattingValues[i]}else{var d=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;o=e.values[s]||e.values[d]}var l=e.argumentCallback?e.argumentCallback(t):t;return o[l]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},b028:function(e,t,n){"use strict";function o(e){return function(t,n){var o=String(t),i=n||{},u=i.width,d=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],s=o.match(d);if(!s)return null;var l,f=s[0],h=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(h)?a(h,(function(e){return e.test(f)})):r(h,(function(e){return e.test(f)})),l=e.valueCallback?e.valueCallback(l):l,l=i.valueCallback?i.valueCallback(l):l,{value:l,rest:o.slice(f.length)}}}function r(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function a(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},b566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var a={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.yy"},i={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},u={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},d={date:(0,o.default)({formats:a,defaultWidth:"full"}),time:(0,o.default)({formats:i,defaultWidth:"full"}),dateTime:(0,o.default)({formats:u,defaultWidth:"full"})},s=d;t.default=s,e.exports=t.default},d468:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var a={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["viru Christus","no Christus"]},i={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},u={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"]},d={narrow:["S","M","D","M","D","F","S"],short:["So","Mé","Dë","Më","Do","Fr","Sa"],abbreviated:["So.","Mé.","Dë.","Më.","Do.","Fr.","Sa."],wide:["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"]},s={narrow:{am:"mo.",pm:"nomë.",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"},abbreviated:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"},wide:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"}},l={narrow:{am:"mo.",pm:"nom.",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"},abbreviated:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"},wide:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"}};function f(e,t){var n=Number(e);return n+"."}var h={ordinalNumber:f,era:(0,o.default)({values:a,defaultWidth:"wide"}),quarter:(0,o.default)({values:i,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:u,defaultWidth:"wide"}),day:(0,o.default)({values:d,defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:s,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},c=h;t.default=c,e.exports=t.default}}]);
//# sourceMappingURL=chunk-04ced163.4fbffe1d.js.map