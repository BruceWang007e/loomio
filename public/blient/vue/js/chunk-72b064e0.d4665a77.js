(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72b064e0","chunk-b26ee102","chunk-10e94100","chunk-774335f6","chunk-2d0b6c4a","chunk-2d213dde","chunk-2d20e7ca","chunk-2d0e5bd1","chunk-2d0de8e4","chunk-2d0e26aa"],{"1c36":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t("af03"));function i(a){return a&&a.__esModule?a:{default:a}}var r={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Hz. İsa'dan öncə","Anno Domini"]},u={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3cü kvartal","4cü kvartal"]},d={narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},o={narrow:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],short:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],abbreviated:["Baz","Baz.e","Çər.a","Çər","Cüm.a","Cüm","Şə"],wide:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},l={narrow:{am:"am",pm:"pm",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},c={narrow:{am:"a",pm:"p",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},s={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};function f(a){if(0===a)return a+"-ıncı";var e=a%10,t=a%100-e,n=a>=100?100:null;return s[e]||s[t]||s[n]}function m(a,e){var t=Number(a),n=f(t);return t+n}var h={ordinalNumber:m,era:(0,n.default)({values:r,defaultWidth:"wide"}),quarter:(0,n.default)({values:u,defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,n.default)({values:d,defaultWidth:"wide"}),day:(0,n.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:c,defaultFormattingWidth:"wide"})},v=h;e.default=v,a.exports=e.default},"1f21":function(a,e,t){"use strict";function n(a){return function(e){var t=e||{},n=t.width?String(t.width):a.defaultWidth,i=a.formats[n]||a.formats[a.defaultWidth];return i}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,a.exports=e.default},"7f38":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var n={lastWeek:"'sonuncu' eeee p -'də'",yesterday:"'dünən' p -'də'",today:"'bugün' p -'də'",tomorrow:"'sabah' p -'də'",nextWeek:"eeee p -'də'",other:"P"};function i(a,e,t,i){return n[a]}a.exports=e.default},"85c4":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var n={lessThanXSeconds:{one:"bir saniyədən az",other:"{{count}} bir saniyədən az"},xSeconds:{one:"1 saniyə",other:"{{count}} saniyə"},halfAMinute:"yarım dəqiqə",lessThanXMinutes:{one:"bir dəqiqədən az",other:"{{count}} bir dəqiqədən az"},xMinutes:{one:"bir dəqiqə",other:"{{count}} dəqiqə"},aboutXHours:{one:"təxminən 1 saat",other:"təxminən {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"təxminən 1 həftə",other:"təxminən {{count}} həftə"},xWeeks:{one:"1 həftə",other:"{{count}} həftə"},aboutXMonths:{one:"təxminən 1 ay",other:"təxminən {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"təxminən 1 il",other:"təxminən {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ildən çox",other:"{{count}} ildən çox"},almostXYears:{one:"demək olar ki 1 il",other:"demək olar ki {{count}} il"}};function i(a,e,t){var i;return t=t||{},i="string"===typeof n[a]?n[a]:1===e?n[a].one:n[a].other.replace("{{count}}",e),t.addSuffix?t.comparison>0?i+" əvvəl":i+" sonra":i}a.exports=e.default},"8c47":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(t("85c4")),i=o(t("fac3")),r=o(t("7f38")),u=o(t("1c36")),d=o(t("a056"));function o(a){return a&&a.__esModule?a:{default:a}}var l={code:"az",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},c=l;e.default=c,a.exports=e.default},9686:function(a,e,t){"use strict";function n(a){return function(e,t){var n=String(e),i=t||{},r=n.match(a.matchPattern);if(!r)return null;var u=r[0],d=n.match(a.parsePattern);if(!d)return null;var o=a.valueCallback?a.valueCallback(d[0]):d[0];return o=i.valueCallback?i.valueCallback(o):o,{value:o,rest:n.slice(u.length)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,a.exports=e.default},a056:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t("9686")),i=r(t("b028"));function r(a){return a&&a.__esModule?a:{default:a}}var u=/^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i,d=/\d+/i,o={narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(Hz. İsa'dan öncə|ümumi eradan əvvəl|anno domini|ümumi dövr)$/i},l={any:[/^b$/i,/^(a|c)$/i]},c={narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},s={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},m={narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},h={narrow:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,short:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,abbreviated:/^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,wide:/^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i},v={narrow:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i],abbreviated:[/^Baz\.e$/i,/^Çər$/i,/^Çər\.a$/i,/^Cüm$/i,/^Cüm\.a$/i,/^Şə$/i],wide:[/^Bazar$/i,/^Bazar ertəsi$/i,/^Çərşənbə axşamı$/i,/^Çərşənbə$/i,/^Cümə axşamı$/i,/^Cümə$/i,/^Şənbə$/i],any:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i]},b={narrow:/^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i},g={any:{am:/^a$/i,pm:/^p$/i,midnight:/^gecəyarı$/i,noon:/^gün$/i,morning:/səhər$/i,afternoon:/gündüz$/i,evening:/axşam$/i,night:/gecə$/i}},y={ordinalNumber:(0,n.default)({matchPattern:u,parsePattern:d,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:g,defaultParseWidth:"any"})},$=y;e.default=$,a.exports=e.default},af03:function(a,e,t){"use strict";function n(a){return function(e,t){var n,i=t||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&a.formattingValues){var u=a.defaultFormattingWidth||a.defaultWidth,d=i.width?String(i.width):u;n=a.formattingValues[d]||a.formattingValues[u]}else{var o=a.defaultWidth,l=i.width?String(i.width):a.defaultWidth;n=a.values[l]||a.values[o]}var c=a.argumentCallback?a.argumentCallback(e):e;return n[c]}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,a.exports=e.default},b028:function(a,e,t){"use strict";function n(a){return function(e,t){var n=String(e),u=t||{},d=u.width,o=d&&a.matchPatterns[d]||a.matchPatterns[a.defaultMatchWidth],l=n.match(o);if(!l)return null;var c,s=l[0],f=d&&a.parsePatterns[d]||a.parsePatterns[a.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(f)?r(f,(function(a){return a.test(s)})):i(f,(function(a){return a.test(s)})),c=a.valueCallback?a.valueCallback(c):c,c=u.valueCallback?u.valueCallback(c):c,{value:c,rest:n.slice(s.length)}}}function i(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function r(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,a.exports=e.default},fac3:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t("1f21"));function i(a){return a&&a.__esModule?a:{default:a}}var r={full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},u={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},d={full:"{{date}} {{time}} - 'də'",long:"{{date}} {{time}} - 'də'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o={date:(0,n.default)({formats:r,defaultWidth:"full"}),time:(0,n.default)({formats:u,defaultWidth:"full"}),dateTime:(0,n.default)({formats:d,defaultWidth:"full"})},l=o;e.default=l,a.exports=e.default}}]);
//# sourceMappingURL=chunk-72b064e0.d4665a77.js.map