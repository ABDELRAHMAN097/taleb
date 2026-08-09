import { Navigate } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ResetPassword from "@/pages/auth/ResetPassword";
import VerifyCode from "@/pages/auth/VerifyCode";
import SelectRole from "@/pages/auth/SelectRole";

import Dashboard from "@/pages/dashboard/Dashboard";
import Assessments from "@/pages/dashboard/Assessments";
import Wallet from "@/pages/dashboard/Wallet";
import QuestionBank from "@/pages/dashboard/QuestionBank";
import Groups from "@/pages/dashboard/Groups";
import Reports from "@/pages/dashboard/Reports";
import Setting from "@/pages/dashboard/Setting";
import Exams from "@/pages/dashboard/Exams";

import { DEFAULT_LOCALE } from "./i18n/i18n/constant";
import I18nProvider from "./i18n/i18n/I18nProvider";

export const routes = [
  {
    path: "/",
    element: <Navigate to={`/${DEFAULT_LOCALE}`} replace />,
  },

  {
    path: "/:locale",
    element: <I18nProvider />,
    children: [
      // =========================
      // Auth Routes
      // =========================
      {
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "reset-password",
            element: <ResetPassword />,
          },
          {
            path: "verify-code",
            element: <VerifyCode />,
          },
          {
            path: "select-role",
            element: <SelectRole />,
          },
        ],
      },

      // =========================
      // Dashboard Routes
      // =========================
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "assessments",
            element: <Assessments />,
          },
          {
            path: "exams",
            element: <Exams />,
          },
          {
            path: "wallet",
            element: <Wallet />,
          },
          {
            path: "question-bank",
            element: <QuestionBank />,
          },
          {
            path: "groups",
            element: <Groups />,
          },
          {
            path: "reports",
            element: <Reports />,
          },
          {
            path: "setting",
            element: <Setting />,
          },
        ],
      },
    ],
  },
];