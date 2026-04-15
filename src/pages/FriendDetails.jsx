import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addEntry } = useContext(TimelineContext);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id == id);
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <p className="p-6">Loading...</p>;

  const handleAction = (type) => {
    addEntry(type.toLowerCase(), friend.name);
    toast.success(`${type} added!`);
  };

  const statusColor = {
    overdue: "bg-red-500",
    "almost due": "bg-yellow-400 text-black",
    "on-track": "bg-green-700",
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

      {/* LEFT SIDE */}
      <div className="bg-white p-6 rounded-xl shadow text-center">

        <img
          src={friend.picture}
          className="w-24 h-24 rounded-full mx-auto"
        />

        <h2 className="text-2xl font-bold mt-3 text-gray-800">
          {friend.name}
        </h2>

        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${
            statusColor[friend.status]
          }`}
        >
          {friend.status === "almost due"
            ? "Almost Due"
            : friend.status === "on-track"
            ? "On-Track"
            : "Overdue"}
        </span>

        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {(friend.tags || []).map((tag, i) => (
            <span
              key={i}
              className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-gray-600">{friend.bio}</p>
        <p className="mt-2 text-sm text-gray-400">{friend.email}</p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <button className="bg-yellow-300 py-2 rounded-md">
            ⏰ Snooze 2 Weeks
          </button>
          <button className="bg-gray-200 py-2 rounded-md">
            📦 Archive
          </button>
          <button className="bg-red-500 text-white py-2 rounded-md">
            🗑️ Delete
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-5">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Days</p>
            <h3 className="font-bold text-lg">
              {friend.days_since_contact}
            </h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Goal</p>
            <h3 className="font-bold text-lg">
              {friend.goal}
            </h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Next</p>
            <h3 className="font-bold text-sm">
              {friend.next_due_date}
            </h3>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold text-gray-700">
            Relationship Goal
          </h3>

          <p className="mt-2 text-gray-600">
            Contact every {friend.goal} days
          </p>

          <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded">
            Edit
          </button>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3 text-gray-700">
            Quick Check-In
          </h3>

          <div className="flex gap-3">
            <button
              onClick={() => handleAction("Call")}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              📞 Call
            </button>

            <button
              onClick={() => handleAction("Text")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              💬 Text
            </button>

            <button
              onClick={() => handleAction("Video")}
              className="bg-purple-500 text-white px-4 py-2 rounded-md"
            >
              🎥 Video
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;