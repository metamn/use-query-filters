import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Input, {
  InputTextPropTypes,
  InputCheckboxPropTypes,
  InputSelectPropTypes,
  InputRadioPropTypes,
  InputRangeMultiHandlePropTypes
} from "./Input";

describe("The Input component", function() {
  it("Renders nothing", () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toBeNull();
  });

  it("Defines input types for Text", () => {
    expect(InputTextPropTypes).toBeDefined();
  });

  it("Defines input types for Checkbox", () => {
    expect(InputCheckboxPropTypes).toBeDefined();
  });

  it("Defines input types for Select", () => {
    expect(InputSelectPropTypes).toBeDefined();
  });

  it("Defines input types for Radio", () => {
    expect(InputRadioPropTypes).toBeDefined();
  });

  it("Defines input types for RangeMultiHandle", () => {
    expect(InputRangeMultiHandlePropTypes).toBeDefined();
  });
});
