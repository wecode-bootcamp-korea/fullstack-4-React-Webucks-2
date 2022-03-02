import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



// import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
// import Signup from "./pages/Signup/Signup";
// import Main from "./pages/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/main" element={<Main />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;