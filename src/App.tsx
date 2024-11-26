import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Contact, Home, PortfolioOverview } from "./pages";

const router = createHashRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/portfolio",
    element: <PortfolioOverview />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
