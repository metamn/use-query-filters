import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryFilter, {
  QueryFilterPropTypes,
  isFilterWellDefined
} from "./QueryFilter";

describe("The QueryFilter component", function() {
  it("Renders a component with the `QueryFilter` class name", () => {
    const { container } = render(<QueryFilter />);
    expect(container.firstChild).toHaveClass("QueryFilter");
  });

  it("Has a `label` input prop", () => {
    const { label } = QueryFilterPropTypes;
    expect(label).toBeDefined();
  });

  it("Has a `queryParam` input prop", () => {
    const { queryParam } = QueryFilterPropTypes;
    expect(queryParam).toBeDefined();
  });

  it("Has a `input` input prop", () => {
    const { input } = QueryFilterPropTypes;
    expect(input).toBeDefined();
  });

  it("Offers an `isFilterWellDefined` function", () => {
    expect(isFilterWellDefined).toBeDefined();
  });
});
