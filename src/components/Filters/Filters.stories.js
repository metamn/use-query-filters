import React from "react";
import Filters from "./Filters";
import ApiDoc from "./Filters.md";

export default {
  component: Filters,
  title: "Filters",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Filters />;
