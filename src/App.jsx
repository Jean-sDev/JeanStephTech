import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Terms from "./pages/legal/Terms";
import Legal from "./pages/legal/Legal";
import ContactPage from "./pages/legal/Contact";

import CookieBanner, { readConsent } from "./components/CookieBanner";

export default function App() {

  // ✅ On loading: if the user has already accepted, the scripts are reloaded.
  useEffect(() => {
    const consent = readConsent();
    if (consent && consent.accepted) {
      loadPrivacyScripts();
    }
  }, []);

  // ✅ When the user clicks "Accept"
  function onCookieAccept(payload) {
    if (payload.accepted) {
      loadPrivacyScripts();
    }
  }

   // ✅ Secure loading of scripts (AdSense, Analytics, etc.)
  {/*function loadPrivacyScripts() {
    if (!document.getElementById("google-ads-script")) {
      const script = document.createElement("script");
      script.id = "google-ads-script";
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.setAttribute("data-ad-client", "ca-pub-XXXXXXXXXXXXXXX"); 
      // ⬆️ remplace par ton vrai ID AdSense
      document.head.appendChild(script);
    }

    // You can also load Google Analytics here if you want to later.
  }*/}

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 transition-colors duration-500">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* ✅ Global footer on all pages */}
      

      {/* ✅ Cookie banner for 3 weeks */}
      <CookieBanner onAccept={onCookieAccept} />
    </div>
  );
        }
