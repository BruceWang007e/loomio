(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-545befda","chunk-b2999560","chunk-10d2b99c","chunk-775aa6b3","chunk-2d0b6c4a","chunk-2d213dde","chunk-2d20e7ca","chunk-2d0e5bd1","chunk-2d0de715","chunk-2d0aecdb"],{"0c2d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"};function i(e,t,n,i){return a[e]}e.exports=t.default},"1f21":function(e,t,n){"use strict";function a(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth,i=e.formats[a]||e.formats[e.defaultWidth];return i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default},2113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("9686")),i=r(n("b028"));function r(e){return e&&e.__esModule?e:{default:e}}var o=/^(\d+)(\.)?/i,u=/\d+/i,d={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},s={any:[/^v/i,/^n/i]},l={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},h={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mär|apr|mai|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},f={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},m={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},g={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},v={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},w={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},M={ordinalNumber:(0,a.default)({matchPattern:o,parsePattern:u,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:w,defaultParseWidth:"any"})},b=M;t.default=b,e.exports=t.default},"627b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("1f21"));function i(e){return e&&e.__esModule?e:{default:e}}var r={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM. y",short:"dd.MM.y"},o={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},u={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},d={date:(0,a.default)({formats:r,defaultWidth:"full"}),time:(0,a.default)({formats:o,defaultWidth:"full"}),dateTime:(0,a.default)({formats:u,defaultWidth:"full"})},s=d;t.default=s,e.exports=t.default},"6e0c":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n("8656")),i=d(n("627b")),r=d(n("0c2d")),o=d(n("f5ad")),u=d(n("2113"));function d(e){return e&&e.__esModule?e:{default:e}}var s={code:"de",formatDistance:a.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},l=s;t.default=l,e.exports=t.default},8656:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a={lessThanXSeconds:{standalone:{one:"weniger als eine Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als einer Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"eine Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"einer Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als eine Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als einer Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"eine Minute",other:"{{count}} Minuten"},withPreposition:{one:"einer Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa eine Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa einer Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"eine Stunde",other:"{{count}} Stunden"},withPreposition:{one:"einer Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"ein Tag",other:"{{count}} Tage"},withPreposition:{one:"einem Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa ein Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa einem Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"ein Woche",other:"{{count}} Wochen"},withPreposition:{one:"einem Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa ein Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa einem Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"ein Monat",other:"{{count}} Monate"},withPreposition:{one:"einem Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa ein Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa einem Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"ein Jahr",other:"{{count}} Jahre"},withPreposition:{one:"einem Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als ein Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als einem Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast ein Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast einem Jahr",other:"fast {{count}} Jahren"}}};function i(e,t,n){n=n||{};var i,r=n.addSuffix?a[e].withPreposition:a[e].standalone;return i="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+i:"vor "+i:i}e.exports=t.default},9686:function(e,t,n){"use strict";function a(e){return function(t,n){var a=String(t),i=n||{},r=a.match(e.matchPattern);if(!r)return null;var o=r[0],u=a.match(e.parsePattern);if(!u)return null;var d=e.valueCallback?e.valueCallback(u[0]):u[0];return d=i.valueCallback?i.valueCallback(d):d,{value:d,rest:a.slice(o.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default},af03:function(e,t,n){"use strict";function a(e){return function(t,n){var a,i=n||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,u=i.width?String(i.width):o;a=e.formattingValues[u]||e.formattingValues[o]}else{var d=e.defaultWidth,s=i.width?String(i.width):e.defaultWidth;a=e.values[s]||e.values[d]}var l=e.argumentCallback?e.argumentCallback(t):t;return a[l]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default},b028:function(e,t,n){"use strict";function a(e){return function(t,n){var a=String(t),o=n||{},u=o.width,d=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],s=a.match(d);if(!s)return null;var l,h=s[0],c=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(c)?r(c,(function(e){return e.test(h)})):i(c,(function(e){return e.test(h)})),l=e.valueCallback?e.valueCallback(l):l,l=o.valueCallback?o.valueCallback(l):l,{value:l,rest:a.slice(h.length)}}}function i(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function r(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default},f5ad:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("af03"));function i(e){return e&&e.__esModule?e:{default:e}}var r={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},u={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},d={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},s={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},l={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}};function h(e,t){var n=Number(e);return n+"."}var c={ordinalNumber:h,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:o,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:u,defaultWidth:"wide"}),day:(0,a.default)({values:d,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:s,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},f=c;t.default=f,e.exports=t.default}}]);
//# sourceMappingURL=chunk-545befda.db36acab.js.map