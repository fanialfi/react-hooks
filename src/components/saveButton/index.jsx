import useOnlineStatus from "../../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button
      disabled={!isOnline}
      onClick={handleSaveClick}
      className="border p-2 m-4 w-36 "
    >
      {isOnline ? "Save Progress" : "Reconecting..."}
    </button>
  );
}
