export const PROJECTS = [
  {
    num: '1',
    title: 'Weather Application',
    desc: 'Real-time weather forecasting app with interactive maps and personalized alerts.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    icon: 'FC',
    img: '/weatherapp.png',
    status: 'finished',
  },
  {
    num: '2',
    title: 'Task Management System',
    desc: 'A simple and efficient task management application for organizing and tracking daily activities.',
    tags: ['React', 'Php', 'MySql', 'JWT'],
    icon: 'SC',
    img: '/task.png',
    status: 'finished',
  },
  {
    num: '3',
    title: 'Medicinal Plant Database',
    desc: 'A comprehensive database for storing and managing information about various medicinal plants.',
    tags: ['React', 'Php', 'Mysql', 'Kanban'],
    icon: 'CM',
    img: '/pmdbs.png',
    status: 'finished',
  },
  {
    num: '4',
    title: 'MaslogCare: Automated Appointment & Scheduling for Barangay Maslog Healthcare',
    desc: 'A web-based application designed to streamline appointment scheduling and management for healthcare services in Barangay Maslog, Legazpi City.',
    tags: ['React Native', 'Express', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    icon: 'VA',
    img: '/mc.png',
    status: 'ongoing',
  },
  {
    num: '5',
    title: 'Attendance Monitoring',
    desc: 'Distributed job scheduling system capable of handling millions of time-based tasks with retry logic and monitoring.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'k8s'],
    icon: 'CS',
    img: '/attendance.png',
    status: 'finished',
  },
  {
    num: '6',
    title: 'Quiz App',
    desc: 'A dynamic quiz application that allows users to create, share, and take quizzes on various topics with real-time scoring and leaderboards.',
    tags: ['Next.js', 'PostgreSQL'],
    icon: 'QA',
    img: '/quiz.png',
    status: 'finished',
  },
];

export const EXPERIENCE = [
  {
    date: '2022 – 2024',
    company: 'Academic Projects & Development',
    role: 'Student Full-Stack Developer',
    desc: 'Built and deployed multiple academic systems including a healthcare appointment system and task management platform. Implemented authentication, REST APIs, and database design. Applied Agile methodology in team collaboration and iterative development.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Git'],
  },
  {
    date: '2024 – 2025',
    company: 'School Development Projects',
    role: 'Frontend Developer',
    desc: 'Developed responsive user interfaces for school projects including attendance monitoring and data dashboards. Focused on reusable components, state management, and improving UI/UX consistency across applications.',
    tags: ['React', 'CSS', 'JavaScript', 'Figma'],
  },
   {
    date: '2025 – 2026',
    company: 'Capstone Project - Ongoing',
    role: 'Lead Developer',
    desc: 'Led the development of "MaslogCare", an appointment and scheduling system. Designed system architecture, managed task distribution, and implemented core modules such as booking, notifications, and admin dashboard. Ensured responsive UI and optimized backend performance.',
    tags: ['React Native', 'NativeWind', 'Node.js', 'MongoDB', 'JWT'],
  },
];

export const SKILLS = [
  'C++', 'React', 'TypeScript', 'Next.js', 'Node.js',
  'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'Python',
  'Vue.js', 'Tailwind CSS', 'Git', 'Figma', 'REST APIs',
];

export const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const TICKER_ITEMS = [
  {
    name: 'React', color: '#61DAFB',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2.05" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(120 12 12)"/></svg>`,
  },
  {
    name: 'TypeScript', color: '#3178C6',
    svg: `<svg viewBox="0 0 24 24" fill="#3178C6" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="22" height="22" rx="2"/><text x="3.5" y="17.5" font-size="11" font-weight="bold" fill="white" font-family="Arial">TS</text></svg>`,
  },
  {
    name: 'Next.js', color: '#ffffff',
    svg: `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V7.5l7 9H11z"/></svg>`,
  },
  {
    name: 'PostgreSQL', color: '#336791',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="7" rx="7" ry="4" fill="#336791"/><path d="M5 7v7c0 2.2 3.13 4 7 4s7-1.8 7-4V7" fill="none" stroke="#336791" strokeWidth="1.5"/><line x1="12" y1="11" x2="12" y2="18" stroke="#336791" strokeWidth="1.5"/></svg>`,
  },
  {
    name: 'Docker', color: '#2496ED',
    svg: `<svg viewBox="0 0 24 24" fill="#2496ED" xmlns="http://www.w3.org/2000/svg"><path d="M13 3h2v2h-2V3zm-3 0h2v2h-2V3zM7 3h2v2H7V3zm6 3h2v2h-2V6zm-3 0h2v2h-2V6zm-3 0h2v2H7V6zM4 6h2v2H4V6zm9 3h2v2h-2V9zm-3 0h2v2h-2V9zM7 9h2v2H7V9zM4 9h2v2H4V9zM2 12c0 1.1 4.5 2 10 2s10-.9 10-2v-1H2v1z"/></svg>`,
  },
  {
    name: 'Python', color: '#3776AB',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#3776AB" d="M12 2C7.5 2 8 4 8 4v2h8V8H6S2 7.5 2 12s4 4 4 4v-2s-.5-2 2-2h8s2 .5 2-2V6s.5-4-6-4zm-1 1.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/><path fill="#FFD43B" d="M12 22c4.5 0 4-2 4-2v-2H8v-2h10s4 .5 4-4-4-4-4-4v2s.5 2-2 2H8s-2-.5-2 2v4s-.5 4 6 4zm1-1.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/></svg>`,
  },
  {
    name: 'Vue.js', color: '#4FC08D',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4FC08D" d="M2 3l10 18L22 3h-4l-6 11L6 3z"/><path fill="#35495E" d="M6 3l6 11 6-11h-3l-3 5.5L9 3z"/></svg>`,
  },
  {
    name: 'Tailwind', color: '#06B6D4',
    svg: `<svg viewBox="0 0 24 24" fill="#06B6D4" xmlns="http://www.w3.org/2000/svg"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.51 12 7 12z"/></svg>`,
  },
  {
    name: 'MongoDB', color: '#47A248',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#47A248" d="M12 2C10 8 8 10 8 14a4 4 0 008 0c0-4-2-6-4-12zm0 18a2 2 0 01-2-2h4a2 2 0 01-2 2zm.5-3.5V22h-1v-5.5c-1.5-.3-2.5-1.5-2.5-3a3 3 0 016 0c0 1.5-1 2.7-2.5 3z"/></svg>`,
  },
  {
    name: 'Figma', color: '#F24E1E',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="5" height="6" rx="2.5" fill="#F24E1E"/><rect x="5" y="9" width="5" height="6" rx="2.5" fill="#A259FF"/><rect x="5" y="16" width="5" height="6" rx="2.5" fill="#0ACF83"/><rect x="11" y="2" width="5" height="6" rx="2.5" fill="#FF7262"/><circle cx="13.5" cy="12" r="2.5" fill="#1ABCFE"/></svg>`,
  },
  {
    name: 'Git', color: '#F05032',
    svg: `<svg viewBox="0 0 24 24" fill="#F05032" xmlns="http://www.w3.org/2000/svg"><path d="M23.1 11L13 1c-.6-.6-1.5-.6-2.1 0l-2.1 2.1 2.7 2.7c.6-.2 1.4-.1 1.9.5.5.5.7 1.3.5 1.9l2.6 2.6c.6-.2 1.4-.1 1.9.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.5-2.1L12.5 9v6.8c.2.1.4.2.6.4.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.2-.2.4-.3.7-.4V8.9c-.3-.1-.5-.2-.7-.4-.6-.6-.7-1.4-.5-2.1L7.1 3.7 1 9.8c-.6.6-.6 1.5 0 2.1l10 10c.6.6 1.5.6 2.1 0l10-10c.6-.6.6-1.5 0-2.1l-.1.2z"/></svg>`,
  },
  {
    name: 'C++', color: '#00599C',
    svg: `<svg viewBox="0 0 24 24" fill="#00599C" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 13h-3v3h-1v-3h-3v-1h3v-3h1v3h3v1z"/></svg>`,
  },
];

export const ROLES = [
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Student',
  'Open Source Contributor',
];

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/McSenna',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: 'Twitter',
    href: '#',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
  },
];


export const Certifications = [
  {
    num: '1',
    title: 'C++ Coding Competition',
    desc: 'Competitive programming event focusing on C++ skills and problem-solving abilities.',
    tags: ['C++', 'Programming', 'Competition'],
    icon: 'C++',
    img: '/cer1.png',
  },
  {
    num: '2',
    title: 'eGovPH App',
    desc: 'Development of a government digital services application.',
    tags: ['Government', 'Digital Services', 'Development'],
    icon: 'GCP',
    img: '/cert2.png',
  },
  {
    num: '3',
    title: 'Cybersecurity',
    desc: 'Official certification for advanced cybersecurity knowledge and practices.',
    tags: ['Cybersecurity', 'Information Security', 'Networking'],
    icon: 'Cybersecurity',
    img: '/cert3.png',
  },
]