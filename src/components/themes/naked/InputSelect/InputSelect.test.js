import React from "react";
import { render } from "@testing-library/react";
import InputSelect from "./InputSelect";

it("has a InputSelect component", () => {
  const { getByText } = render(<InputSelect />);
  expect(getByText("InputSelect")).toBeInTheDocument();
});
