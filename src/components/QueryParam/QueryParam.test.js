import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryParam, {
  QueryParamPropTypes,
  SupportedParamTypes,
  SupportedParamTypesAsString
} from "./QueryParam";

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

  it("Defines a set of supported param types", () => {
    const length = SupportedParamTypes.length;
    expect(length).toBeDefined();
  });

  it("Defines a set of supported param types as strings", () => {
    const length = SupportedParamTypesAsString.length;
    expect(length).toBeDefined();
  });
});
