(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81b89500","chunk-b29318b0","chunk-10e72fd0","chunk-7759bcdc","chunk-2d0b6c4a","chunk-2d213dde","chunk-2d20e7ca","chunk-2d0e5bd1","chunk-2d0c7a94","chunk-2d0af869"],{"0f63":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i={lastWeek:"'өнгөрсөн' eeee 'гарагийн' p 'цагт'",yesterday:"'өчигдөр' p 'цагт'",today:"'өнөөдөр' p 'цагт'",tomorrow:"'маргааш' p 'цагт'",nextWeek:"'ирэх' eeee 'гарагийн' p 'цагт'",other:"P"};function r(e,t,a,r){return i[e]}e.exports=t.default},"1f21":function(e,t,a){"use strict";function i(e){return function(t){var a=t||{},i=a.width?String(a.width):e.defaultWidth,r=e.formats[i]||e.formats[e.defaultWidth];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},5223:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i={lessThanXSeconds:{one:"секунд хүрэхгүй",other:"{{count}} секунд хүрэхгүй"},xSeconds:{one:"1 секунд",other:"{{count}} секунд"},halfAMinute:"хагас минут",lessThanXMinutes:{one:"минут хүрэхгүй",other:"{{count}} минут хүрэхгүй"},xMinutes:{one:"1 минут",other:"{{count}} минут"},aboutXHours:{one:"ойролцоогоор 1 цаг",other:"ойролцоогоор {{count}} цаг"},xHours:{one:"1 цаг",other:"{{count}} цаг"},xDays:{one:"1 өдөр",other:"{{count}} өдөр"},aboutXWeeks:{one:"ойролцоогоор 1 долоо хоног",other:"ойролцоогоор {{count}} долоо хоног"},xWeeks:{one:"1 долоо хоног",other:"{{count}} долоо хоног"},aboutXMonths:{one:"ойролцоогоор 1 сар",other:"ойролцоогоор {{count}} сар"},xMonths:{one:"1 сар",other:"{{count}} сар"},aboutXYears:{one:"ойролцоогоор 1 жил",other:"ойролцоогоор {{count}} жил"},xYears:{one:"1 жил",other:"{{count}} жил"},overXYears:{one:"1 жил гаран",other:"{{count}} жил гаран"},almostXYears:{one:"бараг 1 жил",other:"бараг {{count}} жил"}};function r(e,t,a){var r;if(a=a||{},r="string"===typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),a.addSuffix){var n=r.split(" "),u=n.pop();switch(r=n.join(" "),u){case"секунд":r+=" секундийн";break;case"минут":r+=" минутын";break;case"цаг":r+=" цагийн";break;case"өдөр":r+=" өдрийн";break;case"сар":r+=" сарын";break;case"жил":r+=" жилийн";break;case"хоног":r+=" хоногийн";break;case"гаран":r+=" гараны";break;case"хүрэхгүй":r+=" хүрэхгүй хугацааны";break;default:r+=u+"-н"}return a.comparison>0?r+" дараа":r+" өмнө"}return r}e.exports=t.default},"5ecc":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(a("5223")),r=d(a("c1d1")),n=d(a("0f63")),u=d(a("d69b")),o=d(a("9574"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"mn",formatDistance:i.default,formatLong:r.default,formatRelative:n.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},f=l;t.default=f,e.exports=t.default},9574:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("9686")),r=n(a("b028"));function n(e){return e&&e.__esModule?e:{default:e}}var u=/\d+/i,o=/\d+/i,d={narrow:/^(нтө|нт)/i,abbreviated:/^(нтө|нт)/i,wide:/^(нийтийн тооллын өмнө|нийтийн тооллын)/i},l={any:[/^(нтө|нийтийн тооллын өмнө)/i,/^(нт|нийтийн тооллын)/i]},f={narrow:/^(iv|iii|ii|i)/i,abbreviated:/^(iv|iii|ii|i) улирал/i,wide:/^[1-4]-р улирал/i},s={any:[/^(i(\s|$)|1)/i,/^(ii(\s|$)|2)/i,/^(iii(\s|$)|3)/i,/^(iv(\s|$)|4)/i]},c={narrow:/^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,abbreviated:/^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,wide:/^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i},h={narrow:[/^i$/i,/^ii$/i,/^iii$/i,/^iv$/i,/^v$/i,/^vi$/i,/^vii$/i,/^viii$/i,/^ix$/i,/^x$/i,/^xi$/i,/^xii$/i],any:[/^(1|нэгдүгээр)/i,/^(2|хоёрдугаар)/i,/^(3|гуравдугаар)/i,/^(4|дөрөвдүгээр)/i,/^(5|тавдугаар)/i,/^(6|зургаадугаар)/i,/^(7|долоодугаар)/i,/^(8|наймдугаар)/i,/^(9|есдүгээр)/i,/^(10|аравдугаар)/i,/^(11|арван нэгдүгээр)/i,/^(12|арван хоёрдугаар)/i]},v={narrow:/^[ндмлпбб]/i,short:/^(ня|да|мя|лх|пү|ба|бя)/i,abbreviated:/^(ням|дав|мяг|лха|пүр|баа|бям)/i,wide:/^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i},m={narrow:[/^н/i,/^д/i,/^м/i,/^л/i,/^п/i,/^б/i,/^б/i],any:[/^ня/i,/^да/i,/^мя/i,/^лх/i,/^пү/i,/^ба/i,/^бя/i]},b={narrow:/^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,any:/^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i},p={any:{am:/^ү\.ө\./i,pm:/^ү\.х\./i,midnight:/^шөнө дунд/i,noon:/^үд дунд/i,morning:/өглөө/i,afternoon:/өдөр/i,evening:/орой/i,night:/шөнө/i}},w={ordinalNumber:(0,i.default)({matchPattern:u,parsePattern:o,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},I=w;t.default=I,e.exports=t.default},9686:function(e,t,a){"use strict";function i(e){return function(t,a){var i=String(t),r=a||{},n=i.match(e.matchPattern);if(!n)return null;var u=n[0],o=i.match(e.parsePattern);if(!o)return null;var d=e.valueCallback?e.valueCallback(o[0]):o[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:i.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},af03:function(e,t,a){"use strict";function i(e){return function(t,a){var i,r=a||{},n=r.context?String(r.context):"standalone";if("formatting"===n&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):u;i=e.formattingValues[o]||e.formattingValues[u]}else{var d=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;i=e.values[l]||e.values[d]}var f=e.argumentCallback?e.argumentCallback(t):t;return i[f]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},b028:function(e,t,a){"use strict";function i(e){return function(t,a){var i=String(t),u=a||{},o=u.width,d=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],l=i.match(d);if(!l)return null;var f,s=l[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(c)?n(c,(function(e){return e.test(s)})):r(c,(function(e){return e.test(s)})),f=e.valueCallback?e.valueCallback(f):f,f=u.valueCallback?u.valueCallback(f):f,{value:f,rest:i.slice(s.length)}}}function r(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},c1d1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var n={full:"y 'оны' MMMM'ын' d, EEEE 'гараг'",long:"y 'оны' MMMM'ын' d",medium:"y 'оны' MMM'ын' d",short:"y.MM.dd"},u={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},o={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},d={date:(0,i.default)({formats:n,defaultWidth:"full"}),time:(0,i.default)({formats:u,defaultWidth:"full"}),dateTime:(0,i.default)({formats:o,defaultWidth:"full"})},l=d;t.default=l,e.exports=t.default},d69b:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var n={narrow:["НТӨ","НТ"],abbreviated:["НТӨ","НТ"],wide:["нийтийн тооллын өмнөх","нийтийн тооллын"]},u={narrow:["I","II","III","IV"],abbreviated:["I улирал","II улирал","III улирал","IV улирал"],wide:["1-р улирал","2-р улирал","3-р улирал","4-р улирал"]},o={narrow:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],abbreviated:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],wide:["Нэгдүгээр сар","Хоёрдугаар сар","Гуравдугаар сар","Дөрөвдүгээр сар","Тавдугаар сар","Зургаадугаар сар","Долоодугаар сар","Наймдугаар сар","Есдүгээр сар","Аравдугаар сар","Арваннэгдүгээр сар","Арван хоёрдугаар сар"]},d={narrow:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],abbreviated:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],wide:["нэгдүгээр сар","хоёрдугаар сар","гуравдугаар сар","дөрөвдүгээр сар","тавдугаар сар","зургаадугаар сар","долоодугаар сар","наймдугаар сар","есдүгээр сар","аравдугаар сар","арваннэгдүгээр сар","арван хоёрдугаар сар"]},l={narrow:["Н","Д","М","Л","П","Б","Б"],short:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],abbreviated:["Ням","Дав","Мяг","Лха","Пүр","Баа","Бям"],wide:["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"]},f={narrow:["Н","Д","М","Л","П","Б","Б"],short:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],abbreviated:["Ням","Дав","Мяг","Лха","Пүр","Баа","Бям"],wide:["ням","даваа","мягмар","лхагва","пүрэв","баасан","бямба"]},s={narrow:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"},abbreviated:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"},wide:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"}};function c(e,t){var a=Number(e);return a}var h={ordinalNumber:c,era:(0,i.default)({values:n,defaultWidth:"wide"}),quarter:(0,i.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:o,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"}),day:(0,i.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"}),dayPeriod:(0,i.default)({values:s,defaultWidth:"wide"})},v=h;t.default=v,e.exports=t.default}}]);
//# sourceMappingURL=chunk-81b89500.3c337693.js.map