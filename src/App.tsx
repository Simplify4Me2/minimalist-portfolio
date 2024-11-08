import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home, Portfolio } from "./pages";
import { Header } from "./Header";
import { Footer } from "./Footer";

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
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
