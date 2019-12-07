import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryFilters, {
  QueryFiltersPropTypes,
  SupportedFilters,
  displayQueryFilters
} from "./QueryFilters";

describe("The QueryFilters component - behavior", function() {
  it("Displays the filters", () => {
    const { container } = render(<QueryFilters />);
    expect(container.firstChild.firstChild).toHaveClass("QueryFilter");
  });
});

describe("The QueryFilters component - structure", function() {
  it("Renders a component with the `QueryFilters` class name", () => {
    const { container } = render(<QueryFilters />);
    expect(container.firstChild).toHaveClass("QueryFilters");
  });

  it("Has a `filters` input prop", () => {
    const { filters } = QueryFiltersPropTypes;
    expect(filters).toBeDefined();
  });

  it("Has a `renderers` input prop", () => {
    const { renderers } = QueryFiltersPropTypes;
    expect(renderers).toBeDefined();
  });

  it("Defines a set of supported filters", () => {
    const length = SupportedFilters.length;
    expect(length).toBeDefined();
  });

  it("Offers a `displayQueryFilters` function", () => {
    expect(displayQueryFilters).toBeDefined();
  });
});
