import InstructorsList from "../views/learner-dashboard/InstructorsList";
import { ScheduledMeetings } from "../views/learner-dashboard/ScheduledMeetings";
import { LearnerDashboard } from "../views/learner-dashboard/LearnerDashboard";
import { LearnerDashboardTab } from "../views/learner-dashboard/LearnerDashboardTab";
import ScheduleAMeeting from "../views/learner-dashboard/ScheduleAMeeting";
import { insDashboard, lnrDashboard } from "../utils/dataUtility";
import Workshops from "../views/learner-dashboard/Workshops";
import { InstructorDashboard } from "../views/instructor-dashboard/InstructorDashboard";
import { InstructorDashboardTab } from "../views/instructor-dashboard/InstructorDashboardTab";
import { OrganizeWorkshop } from "../views/instructor-dashboard/organize-workshop/OrganizeWorkshop";


export const DashboardRoutes = [
  {
    path: lnrDashboard,
    element: <LearnerDashboard />,
    children: [
      { path: "", element: <LearnerDashboardTab /> },
      { path: "instructors", element: <InstructorsList /> },
      {
        path: "schedule-a-meeting/:instructorName/:instructorId",
        element: <ScheduleAMeeting />,
      },
      { path: "scheduled-meetings", element: <ScheduledMeetings /> },
      { path: "workshops", element: <Workshops /> },
    ],
  },
  {
    path: insDashboard,
    element: <InstructorDashboard />,
    children: [
      { path: "", element: <InstructorDashboardTab /> },
      { path: "organize-workshop", element: <OrganizeWorkshop /> },
    ],
  },
];
