import React from "react";
import Footer2 from "../../components/Footer2";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-5xl mx-auto px-6 py-16 leading-relaxed">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <p className="mb-4">
          This privacy policy describes how{" "}
          <strong>JEAN - STEPH TECH</strong> collects, uses, protects and shares
your personal information when you use the site{" "}
          <a
            href="https://lordobitotech.xyz"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            JEAN - STEPH TECH
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Information collected
        </h2>
        <p className="mb-4">
          We collect various pieces of information when you browse our site or interact with its features. :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Adresse IP</li>
          <li>Device type and browser</li>
          <li>Pages viewed and visit duration</li>
          <li>Cookies and similar technologies to improve the user experience</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. Data usage
        </h2>
        <p className="mb-4">Les données collectées sont utilisées pour :</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Improve the user experience and navigation on the site</li>
          <li>Analyze website traffic and improve its services</li>
          <li>Strengthen site security</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies</h2>
        <p className="mb-4">
          This site uses cookies to improve navigation, measure audience and display advertisements tailored to your interests.
        </p>

       {/* <h2 className="text-xl font-semibold mt-8 mb-3">4. Google AdSense</h2>
        <p className="mb-4">
          Google peut utiliser des cookies (comme le cookie DoubleClick) pour afficher des annonces personnalisées en fonction de vos visites sur ce site et d’autres sites.
        </p>
        <p className="mb-4">
          Vous pouvez désactiver la personnalisation des annonces via :{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://adssettings.google.com
          </a>
        </p>*/}

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Data security</h2>
        <p className="mb-4">
          We implement technical measures to protect your personal information from loss, unauthorized access, or disclosure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Your rights</h2>
        <p className="mb-4">
          You have the right to access, modify and delete your personal data.  
          Regarding your information collected via Google, you can also withdraw access at any time by deleting your Google account or by signing out.  
          To exercise your rights, contact us at the address below.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Contact</h2>
        <p className="font-semibold mb-4">
          📧{" "}
          <a
            href="mailto:support@lordobitotech.xyz"
            className="text-blue-600 hover:underline"
          >
            SUPPORT
          </a>
        </p>

        {/* Back button */}
        <div className="mt-6">
          <Link
            to="/home"
            className="text-blue-600 hover:underline font-semibold"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer2 />
    </div>
  );
          }
