import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryFilters, {
  QueryFiltersPropTypes,
  displayQueryFilters
} from "./QueryFilters";

describe("The QueryFilters component", function() {
  it("Renders a component with the `QueryFilters` class name", () => {
    const { container } = render(<QueryFilters />);
    expect(container.firstChild).toHaveClass("QueryFilters");
  });

  it("Has a `filters` input prop", () => {
    const { filters } = QueryFiltersPropTypes;
    expect(filters).toBeDefined();
  });

  it("Offers a `displayQueryFilters` function", () => {
    expect(displayQueryFilters).toBeDefined();
  });
});
