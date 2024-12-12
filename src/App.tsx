import "./App.css";

import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { Contact, Home, Overview } from "./pages";
import { Header } from "./Header";
import { Footer } from "./Footer";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Outlet />}>
            <Route index element={<Overview />} />
            <Route path="bookmark" element={<span>YOLO bookmark</span>} />
            <Route path="fylo" element={<span>YOLO fylo</span>} />
            <Route path="insure" element={<span>YOLO insure</span>} />
            <Route path="manage" element={<span>YOLO manage</span>} />
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
