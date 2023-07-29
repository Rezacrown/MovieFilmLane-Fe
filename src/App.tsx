// import react, { useState } from 'react'

import Detail_pages from "./pages/Detail";
import Main_pages from "./pages/Main";
import Signin_Page from "./pages/Signin/index.";
import Signup_Page from './pages/Signup/index';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main_pages />} />
        <Route path="/detail" element={<Detail_pages />} />
        <Route path="/signup" element={<Signup_Page />} />
        <Route path="/signin" element={<Signin_Page />} />
      </Routes>
    </>
  );
}

export default App;
