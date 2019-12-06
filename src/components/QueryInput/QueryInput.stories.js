import React from "react";
import QueryInput from "./QueryInput";
import ApiDoc from "./QueryInput.md";

export default {
  component: QueryInput,
  title: "QueryInput",
  parameters: { notes: ApiDoc }
};

export const Default = () => <QueryInput />;
