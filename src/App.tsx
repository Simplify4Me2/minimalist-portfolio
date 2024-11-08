import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home, Portfolio } from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
