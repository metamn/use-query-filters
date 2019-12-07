import React from "react";
import { render } from "@testing-library/react";
import InputText from "./InputText";

it("has a InputText component", () => {
  const { getByText } = render(<InputText />);
  expect(getByText("InputText")).toBeInTheDocument();
});
