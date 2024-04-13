import InstructorsList from "../views/learner-dashboard/InstructorsList";
import { ScheduledMeetings } from "../views/learner-dashboard/ScheduleMeetings";
import { LearnerDashboard } from "../views/learner-dashboard/LearnerDashboard";
import DashboardContent from "../views/learner-dashboard/DashboardContent";
import ScheduleAMeeting from "../views/learner-dashboard/ScheduleAMeeting";
import { stDashboard } from "../utils/dataUtility";

export const DashboardRoutes = [
  {
    path: stDashboard,
    element: <LearnerDashboard />,
    children: [
      { path: "", element: <DashboardContent /> },
      { path: "instructors", element: <InstructorsList /> },
      {
        path: "schedule-a-meeting/:instructorName/:instructorId",
        element: <ScheduleAMeeting />,
      },
      { path: "scheduled-meetings", element: <ScheduledMeetings /> },
    ],
  },
];
