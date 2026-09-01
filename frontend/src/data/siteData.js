export const siteMetrics = [
  { label: "Coaching Centers", count: "500+", detail: "Across 24 states" },
  { label: "Enrolled Students", count: "50K+", detail: "Active learners" },
  { label: "Verified Courses", count: "100+", detail: "Industry curated" },
  { label: "Learning Hours", count: "1M+", detail: "Tracked in real-time" }
];

export const heroStats = {
  totalCoachings: 42,
  totalStudents: 4250,
  totalTeachers: 95,
  activeCourses: 8,
  registrationRevenue: "₹18,45,000",
  certificateRevenue: "₹4,82,000",
  studentPerformanceAvg: "88.4%",
  coachingGrowthRate: "+24.5%"
};

export const floatingNotifications = [
  { id: 1, text: "+12 New Students Enrolled", type: "student", time: "Just now" },
  { id: 2, text: "Certificate #AIS-9942 Generated", type: "certificate", time: "2 min ago" },
  { id: 3, text: "New Coaching Franchise Approved", type: "franchise", time: "15 min ago" },
  { id: 4, text: "₹45,000 Fees Collected", type: "revenue", time: "1 hr ago" }
];

export const servicesList = [
  {
    id: "franchise-management",
    iconName: "Building2",
    title: "Franchise Management",
    description: "Manage multiple coaching centers, regional branches, and franchisee operations effortlessly from one centralized master dashboard."
  },
  {
    id: "course-management",
    iconName: "BookOpen",
    title: "Course Management",
    description: "Create standardized course curricula, structured modules, weekly topics, assignments, and digital study materials distributed across centers."
  },
  {
    id: "student-management",
    iconName: "GraduationCap",
    title: "Student Management",
    description: "End-to-end student lifecycle handling from registration, batch allocation, attendance tracking to performance evaluation."
  },
  {
    id: "teacher-management",
    iconName: "Users",
    title: "Teacher Management",
    description: "Assign faculty to specific batches, track lecture hours, manage attendance, process salaries, and monitor student rating feedback."
  },
  {
    id: "fee-management",
    iconName: "CreditCard",
    title: "Fee Management",
    description: "Automate fee structures, payment reminders, registration receipts, certificate fees, and franchise revenue sharing calculations."
  },
  {
    id: "certificate-management",
    iconName: "Award",
    title: "Certificate Management",
    description: "Generate tamper-proof digital certificates automatically upon course completion with unique serial IDs and instant QR code verification."
  },
  {
    id: "reports-analytics",
    iconName: "BarChart3",
    title: "Reports & Analytics",
    description: "Deep data insights into franchise growth, revenue streams, top-performing coaching centers, student passing ratios, and teacher efficacy."
  },
  {
    id: "notification-system",
    iconName: "Bell",
    title: "Notification System",
    description: "Send instant updates, exam schedules, fee reminders, and circulars via push notifications, SMS, and WhatsApp integrations."
  }
];

export const solutionsRoles = [
  {
    id: "super-admin",
    roleTitle: "Super Admin",
    tagline: "Control your entire franchise network.",
    dashboardPath: "/dashboard/super-admin",
    color: "#F59E0B",
    features: [
      "All Coachings Oversight",
      "Network Student Analytics",
      "Master Course Creation",
      "Global Teacher Roster",
      "Fee & Revenue Pooling",
      "Master Certificate Dispenser",
      "System Financial Reports",
      "Franchise Approval & Settings"
    ],
    summary: "As a Super Admin, you hold executive oversight across all regional franchise hubs, financial balances, content licensing, and system permissions."
  },
  {
    id: "coaching-admin",
    roleTitle: "Coaching Admin",
    tagline: "Manage your coaching center.",
    dashboardPath: "/dashboard/coaching-admin",
    color: "#3B82F6",
    features: [
      "Center Student Roster",
      "Batch Scheduling & Timetables",
      "Local Teacher Allocation",
      "Daily Student Attendance",
      "Fee Collection & Receipts",
      "Center Performance Index",
      "Local Audit Reports"
    ],
    summary: "Coaching Admins operate individual franchise centers, managing student admissions, batch timetables, local faculty schedules, and fee collections."
  },
  {
    id: "teacher",
    roleTitle: "Teacher",
    tagline: "Teach, track and improve.",
    dashboardPath: "/dashboard/teacher",
    color: "#10B981",
    features: [
      "Assigned Batches & Timetables",
      "Student Class Rosters",
      "Live Attendance Taker",
      "Assignment Upload & Grading",
      "Mock Tests & Marks Entry",
      "Student Progress Notes"
    ],
    summary: "Empower educators with intuitive tools for daily attendance, batch syllabus tracking, assignment evaluations, and student performance scoring."
  },
  {
    id: "student",
    roleTitle: "Student",
    tagline: "Learn and track your progress.",
    dashboardPath: "/dashboard/student",
    color: "#8B5CF6",
    features: [
      "My Active Enrolled Courses",
      "Digital Study Materials & PDFs",
      "Assignment Submissions",
      "Online Tests & Scorecards",
      "Attendance & Performance Metrics",
      "Verified Certificate Download"
    ],
    summary: "Students get a personalized learning dashboard to view syllabus modules, submit coursework, track test scores, and claim QR-verified certificates."
  },
  {
    id: "franchise-owner",
    roleTitle: "Franchise Owner",
    tagline: "Grow your coaching business.",
    dashboardPath: "/dashboard/franchise-owner",
    color: "#EC4899",
    features: [
      "Student Admission Growth",
      "Franchise Revenue Streams",
      "Teacher Productivity Ratings",
      "Course Profitability Analysis",
      "Business Intelligence Reports"
    ],
    summary: "Franchise investors and business owners track financial yield, student enrollment trajectories, expansion metrics, and ROI."
  }
];

export const allFeaturesList = [
  { title: "Multi-Franchise Management", desc: "Centralized control for multi-location coaching operations.", category: "Core" },
  { title: "Role Based Access Control", desc: "Granular permissions for Admins, Teachers, Students & Owners.", category: "Security" },
  { title: "Course Management", desc: "Design structured curricula and standardize course delivery.", category: "Academic" },
  { title: "Module Management", desc: "Break down courses into progressive learning modules.", category: "Academic" },
  { title: "Topic Management", desc: "Detail topic-level objectives and daily learning agendas.", category: "Academic" },
  { title: "Study Material", desc: "Upload and share PDFs, videos, and study reference files.", category: "Academic" },
  { title: "Batch Management", desc: "Create time-bound batches, capacity limits, and schedules.", category: "Core" },
  { title: "Student Enrollment", desc: "Seamless registration workflow with automated student IDs.", category: "Student" },
  { title: "Teacher Assignment", desc: "Assign specialized faculty to specific batches and subjects.", category: "Faculty" },
  { title: "Attendance Tracking", desc: "Real-time digital attendance marking for students and staff.", category: "Operations" },
  { title: "Assignment Management", desc: "Publish assignments with automated due-date notifications.", category: "Academic" },
  { title: "Test Management", desc: "Conduct online quizzes, mock tests, and batch examinations.", category: "Academic" },
  { title: "Student Performance", desc: "Visual graphs tracking individual and batch score trends.", category: "Analytics" },
  { title: "Teacher Performance", desc: "Monitor lecture completion, attendance, and student feedback.", category: "Analytics" },
  { title: "Fee Tracking", desc: "Track paid, pending, and installment fee records effortlessly.", category: "Finance" },
  { title: "Salary Management", desc: "Calculate teacher payouts based on lecture hours and base pay.", category: "Finance" },
  { title: "Certificate Generation", desc: "Automated single-click issuing of course completion certificates.", category: "Certification" },
  { title: "QR Verification", desc: "Instant public verification of certificates via embedded QR codes.", category: "Certification" },
  { title: "Notifications", desc: "Broadcast alerts via In-App, SMS, and WhatsApp messages.", category: "Communication" },
  { title: "Reports & Analytics", desc: "Exportable financial, academic, and operational data reports.", category: "Analytics" }
];

export const workflowSteps = [
  { step: "01", title: "Course Creation", desc: "AI Scholar designs standardized courses, modules, and study materials.", icon: "BookOpen" },
  { step: "02", title: "Franchise Publishing", desc: "Courses become instantly available across all accredited coaching centers.", icon: "Globe" },
  { step: "03", title: "Batch Scheduling", desc: "Coaching Admins form regional student batches and set session timetables.", icon: "Calendar" },
  { step: "04", title: "Faculty Assignment", desc: "Certified teachers are assigned to conduct batch classes and modules.", icon: "UserCheck" },
  { step: "05", title: "Student Admissions", desc: "Students enroll into batches and gain portal credentials.", icon: "UserPlus" },
  { step: "06", title: "Classes & Materials", desc: "Daily classes take place with access to digital reference content.", icon: "FileText" },
  { step: "07", title: "Attendance & Tests", desc: "Attendance is logged daily while mock exams test concept clarity.", icon: "CheckSquare" },
  { step: "08", title: "Performance Evaluation", desc: "AI-driven analytics calculate student grade trajectories and attendance percentage.", icon: "LineChart" },
  { step: "09", title: "Course Completion", desc: "System verifies 100% module coverage and required passing scores.", icon: "Award" },
  { step: "10", title: "Verified Certificate", desc: "Tamper-proof digital certificate with QR verification is generated automatically.", icon: "QrCode" }
];

export const franchiseBenefits = [
  { title: "Ready-to-use Courses", desc: "Access 100+ industry-aligned curriculum packages ready for enrollment." },
  { title: "Centralized LMS", desc: "No need to build your software—use AI Scholar's high-performance cloud portal." },
  { title: "Automated Certification", desc: "Issue branded certificates with instant QR verification." },
  { title: "Comprehensive Analytics", desc: "Monitor center growth, revenue, and teacher performance in real time." },
  { title: "Marketing & Tech Support", desc: "Dedicated guidance to scale your student base and brand reach." }
];

export const hierarchyNodes = [
  { title: "AI SCHOLAR", sub: "Parent Company", level: 1, color: "bg-amber-500 text-white" },
  { title: "Coaching Franchises", sub: "Regional Franchise Centers", level: 2, color: "bg-gray-900 text-white" },
  { title: "Students + Teachers", sub: "Users & Educators", level: 3, color: "bg-amber-100 text-amber-900 border border-amber-300" },
  { title: "Courses + Batches", sub: "Standardized Learning", level: 4, color: "bg-white text-gray-900 border border-gray-200" },
  { title: "Learning & Performance", sub: "Analytics & Tracking", level: 5, color: "bg-white text-gray-900 border border-gray-200" },
  { title: "Certificates", sub: "QR Code Verified Credentials", level: 6, color: "bg-amber-500 text-white" }
];

export const faqList = [
  { q: "What is AI Scholar?", a: "AI Scholar is a complete Franchise Management System (FMS) and LMS platform designed for education hubs, coaching franchises, and skill institutes." },
  { q: "Can a coaching center operate multiple branches?", a: "Yes! AI Scholar supports multi-franchise management, allowing franchise owners to monitor multiple centers under one account." },
  { q: "How does QR Code Certificate verification work?", a: "Every certificate issued contains a unique serial hash and embedded QR code that anyone can scan to verify authentic student achievement." },
  { q: "What roles are available in the platform?", a: "AI Scholar includes dedicated interfaces for Super Admin, Coaching Center Admin, Teacher, Student, and Franchise Owner." }
];

