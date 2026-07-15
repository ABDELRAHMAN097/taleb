import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import SelectRole from "@/pages/auth/SelectRole";
import Dashboard from "@/pages/dashboard/Dashboard";
import Assessments from "@/pages/dashboard/Assessments";
import Wallet from "@/pages/dashboard/Wallet";
import QuestionBank from "@/pages/dashboard/QuestionBank";
import Groups from "@/pages/dashboard/Groups";
import Reports from "@/pages/dashboard/Reports";
import Setting from "@/pages/dashboard/Setting";

export const routes = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/select-role",
        element: <SelectRole />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/assessments",
        element: <Assessments />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/question-bank",
        element: <QuestionBank />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
];

