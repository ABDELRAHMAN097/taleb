import {
  LuUserRoundPlus,
  LuClock3,
  LuCircleAlert,
  LuUserRoundCheck,
  LuUserRoundX,
} from "react-icons/lu";

const activities = [
  {
    type: "join",
    title: "New Join Request",
    description: "Ahmed Mohamed wants to join Group B.",
    time: "10:30 PM",
  },
  {
    type: "exam",
    title: "Exam Closed",
    description: "Time is up for Mechanics 101 quiz.",
    time: "10:30 PM",
  },
  {
    type: "wallet",
    title: "Low Wallet Balance",
    description: "Top up now to avoid pausing active exams.",
    time: "10:30 PM",
  },
];

export default function RecentActivities() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100/50 shadow-sm overflow-hidden p-6">
      
      <div className="px-5 py-4 border-b border-gray-100">
        <h4 className="text-lg font-bold text-[#173675]">
          Recent Activities
        </h4>
      </div>

      <div>
        {activities.map((activity, index) => {
          const isJoin = activity.type === "join";
          const isExam = activity.type === "exam";

          return (
            <div
              key={index}
              className={`
                flex gap-3 px-5 py-3.5
                ${index !== activities.length - 1
                  ? "border-b border-gray-100"
                  : ""
                }
              `}
            >

              <div
                className={`
                  w-8 h-8
                  shrink-0
                  rounded-lg
                  flex items-center justify-center
                  ${
                    isJoin
                      ? "bg-[#EEF2FA] text-[#173675]"
                      : isExam
                      ? "bg-[#EEF2FA] text-[#173675]"
                      : "bg-[#FFF0F0] text-[#FF6B6B]"
                  }
                `}
              >
                {isJoin && (
                  <LuUserRoundPlus
                    size={16}
                    strokeWidth={1.8}
                  />
                )}

                {isExam && (
                  <LuClock3
                    size={16}
                    strokeWidth={1.8}
                  />
                )}

                {!isJoin && !isExam && (
                  <LuCircleAlert
                    size={16}
                    strokeWidth={1.8}
                  />
                )}
              </div>

              <div className="flex-1 min-w-0">

                <div className="flex items-start justify-between gap-3">

                  <h5 className="text-sm font-medium text-[#173675] leading-5">
                    {activity.title}
                  </h5>

                  <span className="text-[10px] text-[#94A3B8] whitespace-nowrap pt-0.5">
                    {activity.time}
                  </span>

                </div>

                <p className="text-xs text-[#94A3B8] mt-0.5 leading-5">
                  {activity.description}
                </p>

                {isJoin && (
                  <div className="flex items-center gap-2 mt-2">

                    <button
                      type="button"
                      className="
                        w-8
                        h-8
                        rounded-lg
                        border
                        border-gray-100
                        bg-white
                        flex
                        items-center
                        justify-center
                        text-[#EF4444]
                        hover:bg-red-50
                        transition-colors
                        cursor-pointer
                      "
                      title="Reject"
                    >
                      <LuUserRoundX
                        size={15}
                        strokeWidth={1.8}
                      />
                    </button>

                    <button
                      type="button"
                      className="
                        w-8
                        h-8
                        rounded-lg
                        border
                        border-gray-100
                        bg-white
                        flex
                        items-center
                        justify-center
                        text-[#22C55E]
                        hover:bg-green-50
                        transition-colors
                        cursor-pointer
                      "
                      title="Accept"
                    >
                      <LuUserRoundCheck
                        size={15}
                        strokeWidth={1.8}
                      />
                    </button>

                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}