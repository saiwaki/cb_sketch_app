module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){var r=t(1);e.exports=r,e.exports.default=r,e.exports.version={sketch:BCSketchInfo.shared().metadata().appVersion,api:"2.0.0"}},function(e,n,t){"use strict";function r(){if(!__command.pluginBundle())throw new Error("It seems that the command is not running in a plugin. Bundle your command in a plugin to use the DataSupplier API.");return __command.pluginBundle().identifier()}function a(e,n,t){var a=AppController.sharedInstance().dataSupplierManager(),u=r(),i=__command.identifier();a.registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier(t,n,e,u,i)}function u(){var e=AppController.sharedInstance().dataSupplierManager(),n=r();e.deregisterDataSuppliersForPluginWithIdentifier(n)}function i(e,n){AppController.sharedInstance().dataSupplierManager().supplyData_forKey(n,e)}function o(e,n,t){AppController.sharedInstance().dataSupplierManager().supplyData_atIndex_forKey(n,t,e)}t.r(n),t.d(n,"registerDataSupplier",(function(){return a})),t.d(n,"deregisterDataSuppliers",(function(){return u})),t.d(n,"supplyData",(function(){return i})),t.d(n,"supplyDataAtIndex",(function(){return o}))}]);