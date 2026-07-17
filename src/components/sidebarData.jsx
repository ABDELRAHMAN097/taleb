import {
  HiOutlineChartSquareBar,
  HiOutlineClipboardList,
  HiOutlineCreditCard,
} from "react-icons/hi";

import { GoInbox } from "react-icons/go";
import { BiGroup } from "react-icons/bi";
import { TbFileText, TbSettings } from "react-icons/tb";

export const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: HiOutlineChartSquareBar,
  },
  {
    name: "Assessments",
    path: "/assessments",
    icon: HiOutlineClipboardList,
    hasSubmenu: true,
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: HiOutlineCreditCard,
    hasSubmenu: true,
  },
  {
    name: "Question Bank",
    path: "/question-bank",
    icon: GoInbox,
  },
  {
    name: "Groups",
    path: "/groups",
    icon: BiGroup,
    hasSubmenu: true,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: TbFileText,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: TbSettings,
    hasSubmenu: true,
  },
];

export const pageTitles = {
  "/dashboard": "Dashboard",
  "/assessments": "Assessments",
  "/wallet": "Wallet",
  "/question-bank": "Question Bank",
  "/groups": "Groups",
  "/reports": "Reports",
  "/setting": "Setting",
};