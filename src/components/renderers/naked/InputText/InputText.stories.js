import React from "react";
import InputText from "./InputText";
import ApiDoc from "./InputText.md";

export default {
  component: InputText,
  title: "InputText",
  parameters: { notes: ApiDoc }
};

export const Default = () => <InputText />;
