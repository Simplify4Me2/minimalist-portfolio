import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home, PortfolioOverview } from "./pages";

const router = createHashRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/portfolio",
    element: <PortfolioOverview />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
