import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryFilters from "./QueryFilters";

it("has a QueryFilters component", () => {
  const { getByText } = render(<QueryFilters />);
  expect(getByText("QueryFilters")).toBeInTheDocument();
});
