import React from "react";
import { render } from "@testing-library/react";
import Test from "./Test";

it("has a Test component", () => {
  const { getByText } = render(<Test />);
  expect(getByText("Test")).toBeInTheDocument();
});
