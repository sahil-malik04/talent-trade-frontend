import InstructorsList from "../views/learner-dashboard/InstructorsList";
import { ScheduledMeetings } from "../views/learner-dashboard/ScheduledMeetings";
import { LearnerDashboard } from "../views/learner-dashboard/LearnerDashboard";
import DashboardContent from "../views/learner-dashboard/DashboardContent";
import ScheduleAMeeting from "../views/learner-dashboard/ScheduleAMeeting";
import { lnrDashboard } from "../utils/dataUtility";
import Workshops from "../views/learner-dashboard/Workshops";

export const DashboardRoutes = [
  {
    path: lnrDashboard,
    element: <LearnerDashboard />,
    children: [
      { path: "", element: <DashboardContent /> },
      { path: "instructors", element: <InstructorsList /> },
      {
        path: "schedule-a-meeting/:instructorName/:instructorId",
        element: <ScheduleAMeeting />,
      },
      { path: "scheduled-meetings", element: <ScheduledMeetings /> },
      { path: "workshops", element: <Workshops /> },
    ],
  },
];
