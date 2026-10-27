import proj1 from '../assets/projects/project1.jpg';
import proj2 from '../assets/projects/project2.jpg';
import proj3 from '../assets/projects/project3.jpg';
import cinemaImg from '../assets/projects/cinema_mgmt.jpg';
import hotelImg from '../assets/projects/hotel_mgmt.jpg';
import schoolImg from '../assets/projects/school_mgmt.jpg';

// User-Provided Project Photos & Assets
import qrHomeImg from '../assets/projects/qr-generator/homePage.png';
import qrOptionsImg from '../assets/projects/qr-generator/options.png';
import qrPreviewImg from '../assets/projects/qr-generator/generatePreview.png';

import hrAdminImg from '../assets/projects/hrPlatform/adminDashboard.png';
import hrHomeImg from '../assets/projects/hrPlatform/homePage.png';
import hrJobImg from '../assets/projects/hrPlatform/jobSeeking.png';

export interface ProjectMetric {
  value: string;
  desc: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleTop?: string;
  titleBottom?: string;
  category: string;
  status: 'In Progress' | 'Completed' | 'Concept';
  isPinned: boolean;
  type: 'main' | 'management';
  shortDesc: string;
  desc: string;
  tech: string[];
  image: string;
  gallery?: string[];
  link: string;
  liveDemo?: string;
  features?: string[];
  role?: string;
  year?: string;
  metrics?: ProjectMetric[];
}

export const allProjects: ProjectItem[] = [
  // ─── MAIN / PINNED PROJECTS ───
  {
    id: 'cv-builder',
    title: 'CV Builder',
    titleTop: 'CV BUILDER',
    titleBottom: 'ATS SUITE',
    category: 'Productivity Tool',
    status: 'In Progress',
    isPinned: true,
    type: 'main',
    role: 'Full-Stack Developer',
    year: '2025',
    shortDesc: 'Create structured, ATS-ready resumes with instant formatted PDF export and live responsive layout previewing.',
    desc: 'A modern web application that allows users to create professional, ATS-friendly CVs by entering personal information, educational background, skills, and work experience. The system structures the submitted information into formatted resume templates, helping job seekers prepare CVs quickly and reliably.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Node.js', 'Express.js', 'PostgreSQL'],
    metrics: [
      { value: '0', desc: 'Latency on client-side formatted PDF generation and print styling' },
      { value: '6+', desc: 'Modular ATS sections: experience, education, skills, and certifications' },
      { value: '100%', desc: 'Parsed structure optimized for applicant tracking system ingestion' },
    ],
    features: [
      'Interactive form sections for profile, work experience, and education',
      'Instant structured layout rendering with clean typography',
      'PostgreSQL data layer for saving and managing multiple resume versions',
      'Print & PDF export-ready styling for application submissions',
    ],
    image: proj2,
    link: 'https://github.com/palorkjork168',
  },
  {
    id: 'qr-generator',
    title: 'QR Code Generator',
    titleTop: 'QR CODE',
    titleBottom: 'STUDIO 2D',
    category: 'Developer & Utility Tool',
    status: 'Completed',
    isPinned: true,
    type: 'main',
    role: 'Frontend & UI Developer',
    year: '2025',
    shortDesc: 'Customizable high-resolution QR generator with live color palette tuning and instant vector export.',
    desc: 'A fast, responsive web application for generating customized, high-resolution QR codes from user URLs and text. Features real-time parameter tweaking, custom color palettes, embedded logo icons, and instant vector (SVG) or raster (PNG) exports for seamless digital and print sharing.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    metrics: [
      { value: '0s', desc: 'Server delay: codes are synthesized and rendered entirely in browser' },
      { value: '2', desc: 'Vector SVG and high-resolution raster PNG export formats' },
      { value: '100%', desc: 'Live color palette tweaking with center logo icon integration' },
    ],
    features: [
      'Real-time QR code generation from URL or text input',
      'Customizable color schemes, margins, and center logo placement',
      'Instant high-resolution downloads in SVG and PNG formats',
      'Mobile-optimized interface with zero setup requirements',
    ],
    image: qrHomeImg,
    gallery: [qrHomeImg, qrOptionsImg, qrPreviewImg],
    link: 'https://github.com/palorkjork168/qr-studio-app',
    liveDemo: 'https://qr-studio-app-sepia.vercel.app/',
  },
  {
    id: 'employee-attendance',
    title: 'NectarHub — Employee Tracking & HR Platform',
    titleTop: 'NECTARHUB',
    titleBottom: 'HR PLATFORM',
    category: 'HR Technology & Workforce',
    status: 'In Progress',
    isPinned: true,
    type: 'main',
    role: 'Lead Full-Stack Developer',
    year: '2025',
    shortDesc: 'Workforce tracking system with check-in/out logs, admin dashboard, job boards, and real-time analytics.',
    desc: 'A comprehensive workforce tracking and HR management system featuring centralized administrative dashboards, employee check-in and check-out logs, job board portals, and attendance analytics for modern company operations.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM', 'JWT'],
    metrics: [
      { value: '24/7', desc: 'Automated digital check-in and check-out timestamps logging' },
      { value: '4', desc: 'Integrated portals: admin dashboard, attendance log, jobs & candidate pipeline' },
      { value: '100%', desc: 'Secure JWT authentication with role-based permission safeguards' },
    ],
    features: [
      'Centralized administration dashboard with real-time employee counts',
      'Biometric and digital check-in / check-out attendance records',
      'Job board portal for candidate applications and pipeline monitoring',
      'Secure JWT authentication with role-based permission safeguards',
    ],
    image: hrAdminImg,
    gallery: [hrAdminImg, hrHomeImg, hrJobImg],
    link: 'https://github.com/palorkjork168/nectar-hub',
  },

  // ─── MANAGEMENT SYSTEMS ───
  {
    id: 'employee-mgmt',
    title: 'Employee Management System',
    titleTop: 'STAFF DIRECTORY',
    titleBottom: 'ENTERPRISE',
    category: 'HR & Workforce Management',
    status: 'In Progress',
    isPinned: false,
    type: 'management',
    role: 'Backend & Frontend Developer',
    year: '2024 - 2025',
    shortDesc: 'Enterprise staff directory with department management, search filters, and role-based permissions.',
    desc: 'A web-based enterprise application for managing employee directories, department hierarchies, and workforce records. Built with role-based access control for administrators, HR coordinators, and general staff members.',
    tech: ['React 19', 'TypeScript', 'TanStack React Query', 'Node.js', 'Express.js 5', 'PostgreSQL', 'Sequelize ORM', 'JWT Authentication'],
    metrics: [
      { value: '3', desc: 'Permission tiers: enterprise admin, department manager, and general staff' },
      { value: '100%', desc: 'Background cache synchronization using TanStack React Query' },
      { value: '0s', desc: 'Instant search filtering across departments and employee roles' },
    ],
    features: [
      'Staff and department directory with multi-field search and filtering',
      'Role-based permissions (Administrator, HR Specialist, Staff)',
      'TanStack React Query integration for background data syncing and caching',
      'Sequelize ORM data layer ensuring relational database consistency',
    ],
    image: proj3,
    link: 'https://github.com/palorkjork168',
  },
  {
    id: 'pos-system',
    title: 'Mini Mart POS System',
    titleTop: 'MINI MART',
    titleBottom: 'POS SYSTEM',
    category: 'Retail & Point of Sale',
    status: 'In Progress',
    isPinned: false,
    type: 'management',
    role: 'Full-Stack Developer',
    year: '2024',
    shortDesc: 'Point-of-sale checkout system with real-time stock deductions, receipt printing, and sales analytics.',
    desc: 'A high-speed point-of-sale system engineered for small and medium retail businesses to manage product inventory, barcode scanning, cashier transactions, receipts, and daily sales performance.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Node.js', 'Express.js 5', 'PostgreSQL', 'Sequelize ORM', 'Recharts'],
    metrics: [
      { value: '0ms', desc: 'Checkout delay: total, discounts and sales taxes calculated instantly' },
      { value: '3', desc: 'Integrated dashboards: cashier register, stock monitor, and sales charts' },
      { value: '100%', desc: 'Real-time inventory deduction on every item barcode scan' },
    ],
    features: [
      'Rapid cashier checkout flow with instant total and tax calculation',
      'Real-time inventory deduction and low-stock alerting',
      'Visual sales analytics and revenue charts using Recharts',
      'Receipt generation and cashier shift transaction summaries',
    ],
    image: proj1,
    link: 'https://github.com/palorkjork168',
  },
  {
    id: 'school-mgmt',
    title: 'School Management System',
    titleTop: 'ACADEMIC',
    titleBottom: 'SCHOOL HUB',
    category: 'Education Technology',
    status: 'In Progress',
    isPinned: false,
    type: 'management',
    role: 'Full-Stack Developer',
    year: '2024',
    shortDesc: 'Academic platform for student records, class scheduling, teacher assignments, and attendance tracking.',
    desc: 'An educational management web application designed to organize academic data, including student enrollment profiles, teacher directories, classroom scheduling, and attendance monitoring.',
    tech: ['React 19', 'TypeScript', 'React Router', 'Node.js', 'Express.js 5', 'PostgreSQL', 'Sequelize ORM', 'JWT Authentication'],
    metrics: [
      { value: '360°', desc: 'Student profile tracking: enrollment, transcripts, and daily attendance' },
      { value: '3', desc: 'Integrated portals for school admins, subject teachers, and students' },
      { value: '100%', desc: 'Relational data integrity across semester terms and classrooms' },
    ],
    features: [
      'Student profile management with academic history and contact details',
      'Teacher course assignment and classroom scheduling modules',
      'Daily attendance tracking for classes and subject periods',
      'Multi-level authorization ensuring confidential student record protection',
    ],
    image: schoolImg,
    link: 'https://github.com/palorkjork168',
  },
  {
    id: 'cinema-mgmt',
    title: 'Cinema Management System',
    titleTop: 'CINEMA',
    titleBottom: 'SEAT BOOKING',
    category: 'Booking & Entertainment',
    status: 'In Progress',
    isPinned: false,
    type: 'management',
    role: 'Full-Stack Developer',
    year: '2024',
    shortDesc: 'Movie ticketing web system with screening schedules and interactive seat bookings.',
    desc: 'An entertainment management application for organizing movie schedules, theater halls, screening times, live interactive seat bookings, and ticket checkout workflows.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    metrics: [
      { value: '100%', desc: 'Interactive visual theater seat map with real-time selection states' },
      { value: '3', desc: 'Operational roles: manager scheduler, box office cashier & viewer' },
      { value: '50ms', desc: 'Fast relational query responses for live showtime reservations' },
    ],
    features: [
      'Movie catalog with poster media, genres, and synopsis management',
      'Screening hall schedule planner with showtime slots',
      'Interactive visual seat selection grid with live booking state',
      'Digital ticket confirmation and customer booking summaries',
    ],
    image: cinemaImg,
    link: 'https://github.com/palorkjork168',
  },
  {
    id: 'hotel-mgmt',
    title: 'Hotel Management System',
    titleTop: 'HOTEL',
    titleBottom: 'RESERVATION',
    category: 'Hospitality & Booking',
    status: 'In Progress',
    isPinned: false,
    type: 'management',
    role: 'Full-Stack Developer',
    year: '2024',
    shortDesc: 'Hospitality platform for room inventory, reservation calendar, and automated guest check-in.',
    desc: 'A hospitality management web application for organizing hotel rooms, guest reservations, occupancy status, and automated check-in and check-out workflows.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    metrics: [
      { value: '50+', desc: 'Live room states tracked across luxury, standard & suite tiers' },
      { value: '2', desc: 'Instant workflows: one-click guest check-in and checkout billing' },
      { value: '100%', desc: 'Data accuracy for daily occupancy and revenue accounting' },
    ],
    features: [
      'Room catalog management by category, bed count, and pricing tiers',
      'Guest reservation booking timeline with real-time room availability',
      'Streamlined front-desk check-in and check-out processing',
      'Billing statements and invoice calculation per stay duration',
    ],
    image: hotelImg,
    link: 'https://github.com/palorkjork168',
  },
];
