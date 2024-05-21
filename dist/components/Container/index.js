'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _Paper2 = _interopRequireDefault(require('@mui/material/Paper'));
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _excluded = ['forwardedRef'];
function Container(_ref) {
  var forwardedRef = _ref.forwardedRef,
    props = (0, _objectWithoutProperties2['default'])(_ref, _excluded);
  return /*#__PURE__*/ _react['default'].createElement(
    _Paper2['default'],
    (0, _extends2['default'])(
      {
        elevation: 2
      },
      props,
      {
        ref: forwardedRef
      }
    )
  );
}
var _default = (exports['default'] = /*#__PURE__*/ _react['default'].forwardRef(
  function ContainerRef(props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      Container,
      (0, _extends2['default'])({}, props, {
        forwardedRef: ref
      })
    );
  }
));
