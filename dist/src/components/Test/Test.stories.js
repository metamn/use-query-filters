"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Test = _interopRequireDefault(require("./Test"));

var _Test2 = _interopRequireDefault(require("./Test.md"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Test.default,
  title: "Test",
  parameters: {
    notes: _Test2.default
  }
};
exports.default = _default;

var Default = function Default() {
  return _react.default.createElement(_Test.default, null);
};

exports.Default = Default;

//# sourceMappingURL=Test.stories.js.map