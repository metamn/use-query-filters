import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { InputCheckbox } from "./InputCheckbox";

describe("The InputCheckbox component - structure", function() {
  it("Renders a component with the `InputCheckbox` class name", () => {
    const { container } = render(<InputCheckbox />);
    expect(container.firstChild).toHaveClass("InputCheckbox");
  });
});
