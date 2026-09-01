export const ROLES = {
  SUPER_ADMIN: "super_admin",
  COACHING_ADMIN: "coaching_admin",
  TEACHER: "teacher",
  STUDENT: "student",
  FRANCHISE_OWNER: "franchise_owner",
};

export const DASHBOARD_ROUTES = {
  [ROLES.SUPER_ADMIN]: "/admin/dashboard",
  [ROLES.COACHING_ADMIN]: "/dashboard/coaching-admin",
  [ROLES.TEACHER]: "/dashboard/teacher",
  [ROLES.STUDENT]: "/dashboard/student",
  [ROLES.FRANCHISE_OWNER]: "/dashboard/franchise-owner",
};

export const ROLE_LABELS = {
  [ROLES.SUPER_ADMIN]: "Super Admin",
  [ROLES.COACHING_ADMIN]: "Coaching Admin",
  [ROLES.TEACHER]: "Teacher",
  [ROLES.STUDENT]: "Student",
  [ROLES.FRANCHISE_OWNER]: "Franchise Owner",
};

