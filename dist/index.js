'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'ALL_COLUMNS', {
  enumerable: true,
  get: function get() {
    return _constants.ALL_COLUMNS;
  }
});
Object.defineProperty(exports, 'MTableAction', {
  enumerable: true,
  get: function get() {
    return _components.MTableAction;
  }
});
Object.defineProperty(exports, 'MTableActions', {
  enumerable: true,
  get: function get() {
    return _components.MTableActions;
  }
});
Object.defineProperty(exports, 'MTableBody', {
  enumerable: true,
  get: function get() {
    return _components.MTableBody;
  }
});
Object.defineProperty(exports, 'MTableBodyRow', {
  enumerable: true,
  get: function get() {
    return _components.MTableBodyRow;
  }
});
Object.defineProperty(exports, 'MTableCell', {
  enumerable: true,
  get: function get() {
    return _components.MTableCell;
  }
});
Object.defineProperty(exports, 'MTableEditCell', {
  enumerable: true,
  get: function get() {
    return _components.MTableEditCell;
  }
});
Object.defineProperty(exports, 'MTableEditField', {
  enumerable: true,
  get: function get() {
    return _components.MTableEditField;
  }
});
Object.defineProperty(exports, 'MTableEditRow', {
  enumerable: true,
  get: function get() {
    return _components.MTableEditRow;
  }
});
Object.defineProperty(exports, 'MTableFilterRow', {
  enumerable: true,
  get: function get() {
    return _components.MTableFilterRow;
  }
});
Object.defineProperty(exports, 'MTableGroupRow', {
  enumerable: true,
  get: function get() {
    return _components.MTableGroupRow;
  }
});
Object.defineProperty(exports, 'MTableGroupbar', {
  enumerable: true,
  get: function get() {
    return _components.MTableGroupbar;
  }
});
Object.defineProperty(exports, 'MTableHeader', {
  enumerable: true,
  get: function get() {
    return _components.MTableHeader;
  }
});
Object.defineProperty(exports, 'MTablePagination', {
  enumerable: true,
  get: function get() {
    return _components.MTablePagination;
  }
});
Object.defineProperty(exports, 'MTableSteppedPagination', {
  enumerable: true,
  get: function get() {
    return _components.MTableSteppedPagination;
  }
});
Object.defineProperty(exports, 'MTableToolbar', {
  enumerable: true,
  get: function get() {
    return _components.MTableToolbar;
  }
});
exports['default'] = void 0;
Object.defineProperty(exports, 'useLocalizationStore', {
  enumerable: true,
  get: function get() {
    return _LocalizationStore.useLocalizationStore;
  }
});
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _defaults = require('./defaults');
var _propTypes = require('./prop-types');
var _materialTable = _interopRequireDefault(require('./material-table'));
var _styles = require('@mui/material/styles');
var _LocalizationStore = require('./store/LocalizationStore');
var _components = require('./components');
var _constants = require('./utils/constants');
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          (0, _defineProperty2['default'])(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
_materialTable['default'].propTypes = _propTypes.propTypes;
var _default = (exports['default'] = (0, _LocalizationStore.withContext)(
  function (userProps) {
    var props = _objectSpread(
      _objectSpread({}, _defaults.defaultProps),
      userProps
    );
    var theme = (0, _styles.useTheme)();
    var _useMergeProps = (0, _LocalizationStore.useMergeProps)(props),
      localization = _useMergeProps.localization,
      options = _useMergeProps.options,
      components = _useMergeProps.components;
    return /*#__PURE__*/ _react['default'].createElement(
      _materialTable['default'],
      (0, _extends2['default'])({}, props, {
        theme: theme,
        options: options,
        components: components,
        localization: localization,
        ref: props.tableRef
      })
    );
  }
));
