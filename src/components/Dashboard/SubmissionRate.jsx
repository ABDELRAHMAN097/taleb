import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const chartData = [
  {
    name: "Absent",
    value: 15,
    color: "#E2E5EC",
  },
  {
    name: "Attended",
    value: 85,
    color: "#27418F",
  },
];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const isAttended = percent > 0.5;

  return (
    <text
      x={x}
      y={y}
      fill={isAttended ? "#FFFFFF" : "#64748B"}
      textAnchor="middle"
      dominantBaseline="central"
      className="font-semibold"
    >
      <tspan
        x={x}
        dy="-5"
        fontSize="10"
      >
        {`${Math.round(percent * 100)}%`}
      </tspan>

      <tspan
        x={x}
        dy="12"
        fontSize="8"
      >
        {isAttended ? "Attended" : "Absent"}
      </tspan>
    </text>
  );
};

export default function SubmissionRate() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100/50 shadow-sm">
      
      <div className="pb-4 border-b border-gray-100">
        <h4 className="text-xl font-bold text-primary-color mb-1">
          Submission Rate
        </h4>

        <span className="text-XL font-bold text-gray-400">
          5000 Student
        </span>
      </div>

      <div className="flex items-center justify-center gap-3 mt-5">

        <div className="w-[300px] h-[300px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>

              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius="0%"
                outerRadius="90%"
                dataKey="value"
                startAngle={27}
                endAngle={-333}
                paddingAngle={0}
                stroke="none"
                labelLine={false}
                label={renderCustomLabel}
                isAnimationActive={true}
                animationDuration={800}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>

            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-3 min-w-[75px]">

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#27418F]" />

            <span className="text-xl text-gray-600">
              Attended
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E2E5EC]" />

            <span className="text-xl text-gray-600">
              Absent
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}