import { path } from "framer-motion/client";
import {
  LayoutDashboard,
  Building2,
  BookOpen,
  Users,
  CalendarDays,
  ClipboardCheck,
  FileText,
  FolderKanban,
  ClipboardList,
  BarChart3,
  Award,
  User,
  Settings,
  LogOut,
//   ShieldCheck,
  UserPlus,
  Activity,
} from "lucide-react";

export const SIDEBAR_CONFIG = {
  ADMIN: [
    {
      category: "Main",
      items: [
        { name: "Admin-Dashboard", icon: LayoutDashboard, path: "/admin" },
      ],
    },
    {
      category: "Management",
      items: [
        { name: "Departments", icon: Building2, path: "/admin/departments" },
        { name: "Courses", icon: BookOpen, path: "/admin/courses" },
        { name: "User", icon: Users, path: "/admin/user" },
         { name: "Team Member", icon: BarChart3, path: "/admin/Team-Member"},
        // { name: "Roles", icon: ShieldCheck, path: "/admin/roles" },
      ],
    },
    {
      category: "Reports",
      items: [
       
        { name: "Reports Analytics", icon: BarChart3, path: "/admin/reports-analytics" },
        { name: "Platform Usage", icon: Activity, path: "/admin/platform-usage" },
      ],
    },
    {
      category: "Account",
      items: [
        { name: "Settings", icon: Settings, path: "/admin/settings" },
        { name: "Logout", icon: LogOut, path: "/" },
      ],
    },
  ],


 HR: [
  {
    category: "Main",
    items: [
      { name: "HR Dashboard", icon: LayoutDashboard ,path: "/HR-dashboard" },
    ],
  },
  {
    category: "Training Management",
    items: [
      { name: "Training Programs", icon: BookOpen ,path: "/HR-dashboard/Training-Programs"},
      { name: "Create Batches", icon: CalendarDays,path: "/HR-dashboard/Create-Batches" },
      { name: "Training Schedule", icon: CalendarDays, path: "/HR-dashboard/Training-Schedule" },
      { name: "Attendance Management", icon: ClipboardCheck ,path: "/HR-dashboard/Attendance-Management" },
    ],
  },
  {
    category: "Employee Management",
    items: [
      { name: "Employees", icon: Users, path: "/HR-dashboard/Employees" },
      { name: "Assign Training", icon: UserPlus ,path: "/HR-dashboard/Assign-Training" },
      { name: "Progress Tracking", icon: BarChart3 ,path: "/HR-dashboard/Progress-Tracking"},
    ],
  },
  {
    category: "Reports & Certifications",
    items: [
      { name: "Performance Reports", icon: BarChart3,path: "/HR-dashboard/Performance-Reports" },
      { name: "Certifications", icon: Award,path: "/HR-dashboard/Certifications" },
    ],
  },
  {
    category: "Account",
    items: [
      { name: "Settingss", icon: Settings,path: "/HR-dashboard/Settingss" },
      { name: "Logout", icon: LogOut,  path: "/"  },
    ],
  },
],

  TRAINER: [
    {
      category: "Main",
      items: [
        { name: "Trainer-Dashboard", icon: LayoutDashboard, path: "/trainer" },
      ],
    },
    {
      category: "Batches",
      items: [
        { name: "My Batches", icon: Users, path: "/trainer/My-batches" },
        { name: "Schedules", icon: CalendarDays, path: "/trainer/schedules" },
        { name: "Attendances", icon: ClipboardCheck, path: "/trainer/attendances" },
      ],
    },
    {
      category: "Evaluation",
      items: [
        { name: "Assignment", icon: FileText, path: "/trainer/assignment" },
        { name: "Test", icon: ClipboardList, path: "/trainer/test" },
        { name: "Resultss", icon: BarChart3, path: "/trainer/resultss" },
      ],
    },
    {
      category: "Account",
      items: [{ name: "Logout", icon: LogOut, path: "/" }],
    },
  ],

  EMPLOYEE: [
    {
      category: "Main",
      items: [
        { name: "Employee-Dashboard", icon: LayoutDashboard, path: "/employee-trainee" },
      ],
    },
    {
      category: "Learning",
      items: [
        { name: "My Courses", icon: BookOpen, path: "/employee-trainee/My-courses" },
        { name: "Schedule", icon: CalendarDays, path: "/employee-trainee/schedule" },
        { name: "Attendance", icon: ClipboardCheck, path: "/employee-trainee/attendance" },
      ],
    },
    {
      category: "Tasks",
      items: [
        { name: "Assignments", icon: FileText, path: "/employee-trainee/assignments" },
        { name: "Projects", icon: FolderKanban, path: "/employee-trainee/projects" },
        { name: "Tests", icon: ClipboardList, path: "/employee-trainee/tests" },
      ],
    },
    {
      category: "Progress",
      items: [
        { name: "Report", icon: BarChart3, path: "/employee-trainee/report" },
        { name: "Certificates", icon: Award, path: "/employee-trainee/certificates" },
      ],
    },
    {
      category: "Account",
      items: [
        { name: "Profile", icon: User, path: "/employee-trainee/profile" },
        { name: "Logout", icon: LogOut, path: "/" },
      ],
    },
  ],
};