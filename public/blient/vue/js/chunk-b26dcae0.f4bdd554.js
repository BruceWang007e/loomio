(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b26dcae0","chunk-2d20e7ca","chunk-2d0e5bd1"],{9686:function(a,e,t){"use strict";function i(a){return function(e,t){var i=String(e),r=t||{},n=i.match(a.matchPattern);if(!n)return null;var o=n[0],l=i.match(a.parsePattern);if(!l)return null;var d=a.valueCallback?a.valueCallback(l[0]):l[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:i.slice(o.length)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,a.exports=e.default},b028:function(a,e,t){"use strict";function i(a){return function(e,t){var i=String(e),o=t||{},l=o.width,d=l&&a.matchPatterns[l]||a.matchPatterns[a.defaultMatchWidth],u=i.match(d);if(!u)return null;var s,c=u[0],m=l&&a.parsePatterns[l]||a.parsePatterns[a.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(m)?n(m,(function(a){return a.test(c)})):r(m,(function(a){return a.test(c)})),s=a.valueCallback?a.valueCallback(s):s,s=o.valueCallback?o.valueCallback(s):s,{value:s,rest:i.slice(c.length)}}}function r(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function n(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,a.exports=e.default},b65b:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t("9686")),r=n(t("b028"));function n(a){return a&&a.__esModule?a:{default:a}}var o=/^(\d+)(º)?/i,l=/\d+/i,d={narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},u={any:[/^a/i,/^(d|e)/i]},s={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},c={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},f={narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},g={narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},h={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},v={narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},p={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:l,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:g,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},P=p;e.default=P,a.exports=e.default}}]);
//# sourceMappingURL=chunk-b26dcae0.f4bdd554.js.map