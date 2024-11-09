import useOnlineStatus from "../../hooks/useOnlineStatus";

export default function StatusBar() {
  const isOnline = useOnlineStatus();

  return (
    <h1 className="text-center p-6 bg-sky-400 w-32 mx-auto m-4 rounded-md shadow-md">
      {isOnline ? "✅ Online" : "❌ Disconnected"}
    </h1>
  );
}
