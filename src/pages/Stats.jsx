import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const counts = {
    call: 0,
    text: 0,
    video: 0
  };

  timeline.forEach(item => {
    counts[item.type]++;
  });

  const data = [
    { name: "Text", value: counts.text },
    { name: "Call", value: counts.call },
    { name: "Video", value: counts.video }
  ];

  const COLORS = ["#7c3aed", "#14532d", "#22c55e"];

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Friendship Analytics
      </h1>

      {/* Card */}
      <div className="bg-white p-8 rounded-xl shadow">

        <h2 className="text-green-800 mb-6 font-medium">
          By Interaction Type
        </h2>

        {/* Center Chart */}
        <div className="flex justify-center items-center">

          <PieChart width={350} height={350}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={80} 
              outerRadius={120}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>

        </div>

      </div>
    </div>
  );
};

export default Stats;