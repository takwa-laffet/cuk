import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from "./auth/Login";
import Recl from "./auth/Signup";
import SignUp from "./adminstrture/SignUp";
import Home from "./Page/";
import Fingerprint from "./auth/FingerPrint";
import Adminstrture from "./adminstrture";
import "@ionic/react/css/core.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Page from "./adminstrture/Page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fingerprint" element={<Fingerprint />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      <Route path="/ff" element={<Home/>}></Route>
        <Route path="/admin" element={<Adminstrture />} />
        <Route path="/sign" element={<Recl />} />
        <Route path="/page" element={<Page />} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}
