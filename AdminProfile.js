import { useState } from "react";

export default function AdminProfile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Admin Button */}
      <button
        className="flex items-center gap-2"
        onClick={() => setOpen(!open)}
      >
        <img
          src="/admin-avatar.png" // place your admin image in public folder
          alt="Admin"
          className="w-8 h-8 rounded-full"
        />
        <span>Admin</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
            Profile
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
            Settings
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-red-600"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
