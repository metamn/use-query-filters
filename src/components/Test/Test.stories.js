import React from "react";
import Test from "./Test";
import ApiDoc from "./Test.md";

export default {
  component: Test,
  title: "Test",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Test />;
