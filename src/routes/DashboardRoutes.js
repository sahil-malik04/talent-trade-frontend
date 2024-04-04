import InstructorsList from "../views/learner-dashboard/InstructorsList";
import { ScheduledMeetings } from "../views/learner-dashboard/ScheduleMeetings";
import { LearnerDashboard } from "../views/learner-dashboard/LearnerDashboard";
import DashboardContent from "../views/learner-dashboard/DashboardContent";

export const DashboardRoutes = [
  {
    path: "/dashboard/st",
    element: <LearnerDashboard />,
    children: [
      { path: "", element: <DashboardContent /> },
      { path: "instructors", element: <InstructorsList /> },
      { path: "schedule-meeting", element: <ScheduledMeetings /> },
    ],
  },
];
