import React from "react";
import { render } from "@testing-library/react";
import InputCheckbox from "./InputCheckbox";

it("has a InputCheckbox component", () => {
  const { getByText } = render(<InputCheckbox />);
  expect(getByText("InputCheckbox")).toBeInTheDocument();
});
