(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7746dd4b","chunk-2d213dde"],{"9d87":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("af03"));function i(e){return e&&e.__esModule?e:{default:e}}var r={narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},d={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},o={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},u={narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},l={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},f={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}};function g(e,n){var t=Number(e),a=n||{},i=String(a.unit);return"date"===i?t+"日":"year"===i?t+"年":t}var m={ordinalNumber:g,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:o,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},h=m;n.default=h,e.exports=n.default},af03:function(e,n,t){"use strict";function a(e){return function(n,t){var a,i=t||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):d;a=e.formattingValues[o]||e.formattingValues[d]}else{var u=e.defaultWidth,l=i.width?String(i.width):e.defaultWidth;a=e.values[l]||e.values[u]}var f=e.argumentCallback?e.argumentCallback(n):n;return a[f]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a,e.exports=n.default}}]);
//# sourceMappingURL=chunk-7746dd4b.8efa4555.js.map