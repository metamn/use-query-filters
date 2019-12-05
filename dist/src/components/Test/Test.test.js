"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Test = _interopRequireDefault(require("./Test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it("has a Test component", function () {
  var _render = (0, _react2.render)(_react.default.createElement(_Test.default, null)),
      getByText = _render.getByText;

  expect(getByText("Test")).toBeInTheDocument();
});

//# sourceMappingURL=Test.test.js.map