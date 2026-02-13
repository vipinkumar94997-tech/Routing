import React from "react";
import { RouterProvider } from "react-router-dom";
import { AllRouter } from "./router/AllRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={AllRouter} />
    </div>
  );
};

export default App;
