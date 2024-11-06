import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Portfolio } from "./pages";
import { Header } from "./Header";
import { Footer } from "./Footer";

const router = createBrowserRouter([
  {
    path: "/minimalist-portfolio/",
    element: <Home />,
  },
  {
    path: "/minimalist-portfolio/portfolio",
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
