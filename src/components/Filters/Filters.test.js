import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Filters, {
  FiltersPropTypes,
  SupportedFilters,
  displayFilters
} from "./Filters";

describe("The Filters component - behavior", function() {
  it("Displays the filters", () => {
    const { container } = render(<Filters />);
    expect(container.firstChild.firstChild).toHaveClass("Filter");
  });
});

describe("The Filters component - structure", function() {
  it("Renders a component with the `Filters` class name", () => {
    const { container } = render(<Filters />);
    expect(container.firstChild).toHaveClass("Filters");
  });

  it("Has a `filters` input prop", () => {
    const { filters } = FiltersPropTypes;
    expect(filters).toBeDefined();
  });

  it("Has a `renderers` input prop", () => {
    const { renderers } = FiltersPropTypes;
    expect(renderers).toBeDefined();
  });

  it("Defines a set of supported filters", () => {
    const length = SupportedFilters.length;
    expect(length).toBeDefined();
  });

  it("Offers a `displayFilters` function", () => {
    expect(displayFilters).toBeDefined();
  });
});
