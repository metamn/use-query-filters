import React from "react";
import Filter from "./Filter";
import ApiDoc from "./Filter.md";

export default {
  component: Filter,
  title: "Filter",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Filter />;
