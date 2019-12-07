import React from "react";
import { render } from "@testing-library/react";
import InputRadio from "./InputRadio";

it("has a InputRadio component", () => {
  const { getByText } = render(<InputRadio />);
  expect(getByText("InputRadio")).toBeInTheDocument();
});
