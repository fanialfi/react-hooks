import { useEffect } from "react";
import { useState } from "react";

export default function ProductsPage() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <h1 className="text-center p-6 bg-sky-400 w-32 mx-auto m-4 rounded-md shadow-md">
      {isOnline ? "✅ Online" : "❌ Disconnected"}
    </h1>
  );
}
