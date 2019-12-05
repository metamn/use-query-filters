"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestDefaultProps = exports.TestPropTypes = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Defines the prop types
 */
var propTypes = {};
/**
 * Defines the default props
 */

exports.TestPropTypes = propTypes;
var defaultProps = {};
/**
 * Displays the component
 */

exports.TestDefaultProps = defaultProps;

var Test = function Test(props) {
  return _react.default.createElement("div", {
    className: "Test"
  }, "Test");
};

Test.propTypes = propTypes;
Test.defaultProps = defaultProps;
var _default = Test;
exports.default = _default;

//# sourceMappingURL=Test.js.map