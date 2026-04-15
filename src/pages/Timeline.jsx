import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";

const Timeline = () => {
  const { timeline = [] } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const iconMap = {
    call: "📞",
    text: "💬",
    video: "📹",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      <select
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 border px-4 py-2 rounded-md"
      >
        <option value="all">All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      <div className="space-y-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow flex gap-4"
          >
            <div className="text-2xl">{iconMap[item.type]}</div>
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;