import "./App.css";

import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { Contact, Home, PortfolioOverview } from "./pages";
import { Header } from "./Header";
import { Footer } from "./Footer";

// const router = createHashRouter([
//   {
//     path: "/*",
//     element: <Home />,
//   },
//   {
//     path: "/portfolio",
//     element: <PortfolioOverview />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<PortfolioOverview />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

function LayOut() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
