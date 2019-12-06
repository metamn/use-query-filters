import React from "react";
import QueryParam from "./QueryParam";
import ApiDoc from "./QueryParam.md";

export default {
  component: QueryParam,
  title: "QueryParam",
  parameters: { notes: ApiDoc }
};

export const Default = () => <QueryParam />;
