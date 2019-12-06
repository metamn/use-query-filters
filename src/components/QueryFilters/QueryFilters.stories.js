import React from "react";
import QueryFilters from "./QueryFilters";
import ApiDoc from "./QueryFilters.md";

export default {
  component: QueryFilters,
  title: "QueryFilters",
  parameters: { notes: ApiDoc }
};

export const Default = () => <QueryFilters />;
