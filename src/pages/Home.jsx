import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import Loader from "../components/Loader";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data || []);
        setLoading(false);
      })
      .catch(() => {
        setFriends([]);
        setLoading(false);
      });
  }, []);

  //  SAFE STATUS COUNT
  const overdue = friends.filter(f => f?.status === "overdue").length;
  const almost = friends.filter(f => f?.status === "almost due").length;
  const onTrack = friends.filter(f => f?.status === "on-track").length;

  return (
    <div className="p-6">

      {/*  Banner */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Your personal shelf of meaningful connections.
        </p>

        <button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md">
          + Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-green-800">
            {friends.length}
          </h3>
          <p className="text-gray-500">Total Friends</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-green-800">
            {onTrack}
          </h3>
          <p className="text-gray-500">On Track</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-green-800">
            {almost}
          </h3>
          <p className="text-gray-500">Need Attention</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-green-800">
            12
          </h3>
          <p className="text-gray-500">Interactions This Month</p>
        </div>

      </div>

      {/* Section Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Your Friends
      </h2>

      {/* Friends Grid */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(friends || []).map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Home;