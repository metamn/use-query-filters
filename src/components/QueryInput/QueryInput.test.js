import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryInput from "./QueryInput";

it("has a QueryInput component", () => {
  const { getByText } = render(<QueryInput />);
  expect(getByText("QueryInput")).toBeInTheDocument();
});
