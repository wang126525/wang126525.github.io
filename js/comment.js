(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comment"],{

/***/ "./source-src/js/comment.js":
/*!**********************************!*\
  !*** ./source-src/js/comment.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(/*! axios */ "./node_modules/_axios@0.19.2@axios/index.js");
// const AV = require('leancloud-storage')
window.AV = __webpack_require__(/*! leancloud-storage */ "./node_modules/_leancloud-storage@3.15.0@leancloud-storage/dist/av-min.js");
// const Valine = require('../lib/Valine.min')
/**
 * 使用根据Valine项目源代码重新打包
 * 可以支持对于AV对象的传参输入, 而不需要暴露全局变量
 * 但是缺少一些新功能
 */

Promise.all(/*! import() | valine */[__webpack_require__.e("vendors~valine"), __webpack_require__.e("valine")]).then(__webpack_require__.t.bind(null, /*! ../lib/Valine.min */ "./source-src/lib/Valine.min.js", 7)).then(function (_ref) {
  var Valine = _ref.default;

  // 从接口获取评论配置
  axios.get(window.themeConfig.root + 'api/common/config/valine_config').then(function (res) {
    var config = res.data;
    config.path = window.location.pathname;
    // config.av = AV
    new Valine(config);
  });
});

/***/ })

}]);
//# sourceMappingURL=comment.js.map