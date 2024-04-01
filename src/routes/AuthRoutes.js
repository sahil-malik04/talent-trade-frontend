import { Home } from "../views/Home";
import { Login } from "../views/auth/Login";
import { CreateAccountOptions } from "../views/auth/CreateAccount/CreateAccountOptions";
import { CreateAsInstructor } from "../views/auth/CreateAccount/instructor/CreateAsInstructor";
import { CreateAsLearnerUI } from "../views/auth/CreateAccount/learner/CreateAsLearnerUI";
import { SetNewPassword } from "../views/auth/SetNewPassword";
import { ForgotPassword } from "../views/auth/ForgotPassword";

export const AuthRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/create-account", element: <CreateAccountOptions /> },
  { path: "/create-as-learner", element: <CreateAsLearnerUI /> },
  { path: "/create-as-instructor", element: <CreateAsInstructor /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/set-new-password", element: <SetNewPassword /> },
];
