import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryInput, {
  InputTextPropTypes,
  InputCheckboxPropTypes,
  InputSelectPropTypes,
  InputRadioPropTypes,
  InputRangeMultiHandlePropTypes
} from "./QueryInput";

describe("The QueryInput component", function() {
  it("Renders a component with the `QueryInput` class name", () => {
    const { container } = render(<QueryInput />);
    expect(container.firstChild).toHaveClass("QueryInput");
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
