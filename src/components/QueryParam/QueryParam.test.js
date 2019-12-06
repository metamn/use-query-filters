import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryParam, { QueryParamPropTypes } from "./QueryParam";

describe("The QueryParam component", function() {
  it("Renders a component with the `QueryParam` class name", () => {
    const { container } = render(<QueryParam />);
    expect(container.firstChild).toHaveClass("QueryParam");
  });

  it("Has a `name` input prop", () => {
    const { name } = QueryParamPropTypes;
    expect(name).toBeDefined();
  });

  it("Has a `type` input prop", () => {
    const { type } = QueryParamPropTypes;
    expect(type).toBeDefined();
  });
});
