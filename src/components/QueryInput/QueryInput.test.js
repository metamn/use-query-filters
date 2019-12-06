import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryInput, { CommonInputPropTypes } from "./QueryInput";

describe("The QueryInput component", function() {
  it("Renders a component with the `QueryInput` class name", () => {
    const { container } = render(<QueryInput />);
    expect(container.firstChild).toHaveClass("QueryInput");
  });

  it("Defines a set of common input types", () => {
    const obj = typeof CommonInputPropTypes;
    expect(obj).toBeDefined();
  });
});
