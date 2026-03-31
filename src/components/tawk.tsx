// TawkChat.tsx
import { useEffect } from "react";

const TawkChat: React.FC = () => {
  useEffect(() => {
    // Avoid loading the script multiple times
    if ((window as any).Tawk_API) return;

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/69cbc3214cdcf71c377f4221/1jl1v4ese";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    // Optional cleanup if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // You can wrap this in a div with Tailwind classes if needed
  return <div className="fixed bottom-8 left-4 z-50"></div>;
};

export default TawkChat;