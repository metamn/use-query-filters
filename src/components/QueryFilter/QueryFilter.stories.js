import React from "react";
import QueryFilter from "./QueryFilter";
import ApiDoc from "./QueryFilter.md";

export default {
  component: QueryFilter,
  title: "QueryFilter",
  parameters: { notes: ApiDoc }
};

export const Default = () => <QueryFilter />;
