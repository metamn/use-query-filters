import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import Filters from "./components/Filters";

const App = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Filters />
      </QueryParamProvider>
    </Router>
  );
};

export default App;
