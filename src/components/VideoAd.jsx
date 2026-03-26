import { useEffect } from "react";

export default function VideoAd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tuckerclassesjackal.com/4d/9f/04/4d9f040ce9ab42f6085e21e45a76532f.js";
    script.async = true;

    document.getElementById("adsterra-video")?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="my-10 flex justify-center">
      <div id="adsterra-video"></div>
    </div>
  );
}