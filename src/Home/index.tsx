import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { supabase } from "../data/Client";

import "./index.css";

export default function Home() {
  let navigate = useNavigate();

  const user = supabase.auth.user();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
