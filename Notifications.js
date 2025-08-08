import { useState, useEffect } from "react";

export default function Notifications() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (open) {
      fetch("http://localhost:5000/api/notifications") // your Node.js backend API
        .then((res) => res.json())
        .then((data) => setNotifications(data))
        .catch(() => setNotifications([]));
    }
  }, [open]);

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        className="relative"
        onClick={() => setOpen(!open)}
      >
        🔔
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-2 z-50">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-sm">No new notifications</p>
          ) : (
            notifications.map((note, i) => (
              <div key={i} className="border-b py-2 text-sm">
                {note.message}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
