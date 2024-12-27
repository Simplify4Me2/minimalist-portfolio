import "./App.css";

import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { Bookmark, Fylo, Insure, Manage } from "./pages";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { lazy } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Overview = lazy(() => import("./pages/portfolio/Overview"));
const Contact = lazy(() => import("./pages/contact/Contact"));

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Outlet />}>
            <Route index element={<Overview />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="fylo" element={<Fylo />} />
            <Route path="insure" element={<Insure />} />
            <Route path="manage" element={<Manage />} />
          </Route>
          <Route path="contact" element={<Contact />} />
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
