import React from "react";
import Input from "./Input";
import ApiDoc from "./Input.md";

export default {
  component: Input,
  title: "Input",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Input />;
