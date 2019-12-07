import React from "react";
import { render } from "@testing-library/react";
import InputRangeMultiHandle from "./InputRangeMultiHandle";

it("has a InputRangeMultiHandle component", () => {
  const { getByText } = render(<InputRangeMultiHandle />);
  expect(getByText("InputRangeMultiHandle")).toBeInTheDocument();
});
