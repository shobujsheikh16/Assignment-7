import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const statusStyle = {
    "overdue": "bg-red-500",
    "almost due": "bg-yellow-400 text-black",
    "on-track": "bg-green-700"
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"
    >
      <img
        src={friend.picture}
        className="w-16 h-16 rounded-full mx-auto"
      />

      <h3 className="mt-3 font-semibold text-gray-800">
        {friend.name}
      </h3>

      <p className="text-sm text-gray-400">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex justify-center gap-2 mt-3 flex-wrap">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <div className="mt-3">
        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${statusStyle[friend.status]}`}
        >
          {friend.status === "almost due"
            ? "Almost Due"
            : friend.status === "on-track"
            ? "On-Track"
            : "Overdue"}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;