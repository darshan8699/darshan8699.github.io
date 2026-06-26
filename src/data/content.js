// ============================================================
//  content.js — Single source of truth for ALL website content
//  Edit this file to update any text, links, or data on the site.
// ============================================================

// ─── Personal Info ───────────────────────────────────────────
export const personal = {
  name: "Darshan Rana",
  title: "Mobile App Developer",
  tagline: "Building High-Performance Android & iOS Apps",
  summary:
    "Mobile App Developer with 6+ years of experience building high-performance android & iOS apps using React Native. Dedicated to working with maximum potential in challenging and dynamic environments, collaborating with diverse teams, and continuously learning to drive career and organizational growth.",
  location: "Surat, Gujarat, India",
  email: "ranadarshan15@gmail.com",
  phone: "+91 9824540818",
  linkedin: "https://www.linkedin.com/in/darshan-rana-725450197/",
  github: "https://github.com/darshan8699",
  website: "#",
  twitter: "https://twitter.com/",
  /** Toggle to show/hide the "Available for opportunities" badge */
  available: true,
  /** Years of experience shown in terminal card */
  yearsExperience: "6",
};

// ─── Hero Section ────────────────────────────────────────────
export const hero = {
  /** Rotating words shown in the typewriter animation */
  typewriterWords: [
    "React Native Application",
    "Mobile Application",
    "Cross-Platform Architect",
  ],
  greeting: "Hello, I'm",
  titleLine1: "I Design & Build",
  availableBadge: "Available for Remote & Hybrid Opportunities",
  ctaPrimary: { label: "View My Work", href: "#projects" },

  /** Stats shown below the CTA buttons */
  metrics: [
    { value: "6+", label: "Years Exp." },
    { value: "10+", label: "Featured Apps" },
    { value: "3", label: "Companies" },
  ],

  /** Terminal card tags */
  terminalTags: [
    "React Native",
    "Expo",
    "Android",
    "iOS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "REST API",
    "MySQL",
    "Firebase",
    "Git",
  ],
  terminalStatusText: "Config validated successfully!",
  terminalFileName: "darshan.config.ts",
  terminalPlatforms: ["Android", "iOS"],
  terminalCoreFramework: "React Native",
};

// ─── About Section ───────────────────────────────────────────
export const about = {
  sectionLabel: "About Me",
  sectionHeading: "Crafting Mobile Experiences That Matter",
  floatingCardLabel: "Building Apps",

  /** Paragraphs rendered in the About text column */
  paragraphs: [
    "I am a dedicated <strong>Mobile App Developer</strong> specializing in creating high-quality, pixel-perfect, and native-performing cross-platform mobile apps for Android and iOS using <strong>React Native</strong>.",
    "With over 6 years of professional industry experience, I have worked across diverse teams locally and remotely (including companies in Australia and India) to deliver robust mobile architectures, write modular/clean code, optimize memory usage, and build reusable UI components.",
  ],

  /** Highlight cards in the About section */
  highlights: [
    {
      icon: "📱",
      color: "violet",
      title: "Cross-Platform Mobile",
      description:
        "React Native development for both Android & iOS with maximum performance.",
    },
    {
      icon: "⚡",
      color: "emerald",
      title: "Performance Tuning",
      description:
        "Familiar with optimization, custom scripts, memory tracking, and profiling tools.",
    },
    {
      icon: "🛠️",
      color: "sky",
      title: "SDKs & Integrations",
      description:
        "Experience with WebSockets, WebRTC, payment gateways, push notifications, and Maps.",
    },
    {
      icon: "📦",
      color: "violet",
      title: "Component Libraries",
      description:
        "Establishing shared libraries, Expo configurations, and automated CI/CD workflows.",
    },
  ],
};

// ─── Skills Section ──────────────────────────────────────────
export const skillsSection = {
  sectionLabel: "Technical Expertise",
  sectionHeading: "Skills & Technologies",
  sectionSub: "Technologies I use to build modern digital experiences.",
  /** Tab filter categories — first item is the default "show all" tab */
  categories: ["All", "Mobile", "Frontend", "Databases"],
  softSkillsHeading: "Core Strengths & Soft Skills",

  skills: [
    // Mobile
    { name: "React Native", level: 95, category: "Mobile" },
    { name: "Android", level: 90, category: "Mobile" },
    { name: "iOS", level: 90, category: "Mobile" },
    // Frontend
    { name: "React", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 92, category: "Frontend" },
    { name: "TypeScript", level: 88, category: "Frontend" },
    { name: "Html", level: 90, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "Bootstrap", level: 80, category: "Frontend" },
    // Databases
    { name: "MySQL", level: 75, category: "Databases" },
  ],

  softSkills: [
    "Communication",
    "Creative Thinking",
    "Good Managerial",
    "Adjustable",
    "Team Work",
    "Problem Solving",
  ],
};

// ─── Experience Section ──────────────────────────────────────
export const experienceSection = {
  sectionLabel: "Experience",
  sectionHeading: "Professional Journey",
  sectionSub: "Where I've applied my skills to deliver real results.",

  experience: [
    {
      role: "Mobile App Developer",
      company: "Zyrous, Australia (Remote)",
      location: "Remote",
      period: "May 2025 – Present",
      bullets: [
        "Started projects using Expo and contributed to setting up CI/CD pipelines and Git workflows.",
        "Developed and maintained a shared component library for use across multiple mobile projects.",
        "Wrote test cases, followed modern code standards, and ensured reusable, modular design for scalable applications.",
      ],
    },
    {
      role: "React Native Developer",
      company: "Techtic Technolab Pvt Ltd, Ahmedabad (Remote)",
      location: "Remote",
      period: "Jul 2021 – May 2025",
      bullets: [
        "With a deep understanding of React Native and its ecosystem, I led the design and implementation of complex features, ensuring optimal performance and user experience.",
        "Integrated third-party libraries, implemented payments and subscriptions, collaborated with clients, and mentored juniors with best practices and code reviews.",
      ],
    },
    {
      role: "React Native Developer",
      company: "DayDreamSoft, Surat",
      location: "Surat, Gujarat, India",
      period: "Jan 2020 – Jul 2021",
      bullets: [
        "Developed front-end user interfaces for iOS and Android mobile applications using React Native and JavaScript.",
        "Worked closely with designers to ensure pixel-perfect UI implementation.",
        "Focused on performance optimization, responsiveness, and cross-device compatibility.",
      ],
    },
  ],
};

// ─── Projects Section ─────────────────────────────────────────
export const projectsSection = {
  sectionLabel: "My Work",
  sectionHeading: "Featured Projects",
  sectionSub: "A selection of mobile and web products I've built.",

  projects: [
    {
      name: "Asthma Australia Connect",
      description:
        "A digital health initiative that combines expert asthma education, videocalls, and tailored tools to help you better manage your asthma, all in one convenient place. Whether you're newly diagnosed or have lived with asthma for years, Asthma Connect offers expert guidance, easy-to-use tools, and personalised education to support your asthma journey and improve your health.",
      tech: ["React Native", "WebRTC", "Redux", "Android", "iOS"],
      android: "#",
      ios: "#",
      icon: "🫁",
    },
    {
      name: "NowNext: Build Better Habits",
      description:
        "NowNext helps you build small, simple habits that actually stick. Prioritising your own wellbeing can feel overwhelming. It can start with small steps that fit your daily routine and last a lifetime.",
      tech: ["React Native", "Expo", "SQLite", "Local Notifications"],
      android: "#",
      ios: "#",
      icon: "⏱️",
    },
    {
      name: "Rental Car",
      description:
        "Budget Car and Truck Rental of Atlanta has the best value in car rental with great rates on a wide variety of popular new cars, trucks, and vans. Our vehicles have more features, more fully loaded options, and tend to be newer with fewer miles on them than the competition.",
      tech: ["React Native", "Google Maps API", "Stripe API", "Redux"],
      android: "#",
      ios: "#",
      icon: "🚗",
    },
    {
      name: "Photerra Travel",
      description:
        "A social, all-in-one travel app for local and global travel. Photerra allows you to perform detailed searches of unique, geolocated spots that other people have already explored and shared. Every geolocated spot can be searched, saved, used for navigation and to plan trips using Photerra's Itinerary feature - which also allows for collaborative trip planning with friends.",
      tech: ["React Native", "Geolocation", "Node.js", "Firebase"],
      android: "#",
      ios: "#",
      icon: "🗺️",
    },
    {
      name: "SmartMove",
      description:
        "The SmartMove app is your move planner, offering you an organized and innovative moving experience - from planning to moving in and beyond.",
      tech: [
        "React Native",
        "UI Animations",
        "Push Notifications",
        "Android",
        "iOS",
      ],
      android: "#",
      ios: "#",
      icon: "📦",
    },
  ],
};

// ─── Education Section ────────────────────────────────────────
export const educationSection = {
  sectionLabel: "My Background",
  sectionHeading: "Education",
  sectionSub: "Academic foundations that shaped my technical journey.",

  education: [
    {
      degree: "B.E. Computer Engineering",
      institution: "C.K. Pithawala College",
      location: "Surat, Gujarat, India",
      period: "2016 – 2020",
      gpa: "CGPA: 9.29",
      icon: "🎓",
    },
    {
      degree: "H.S.C.",
      institution: "T. & T.V Nanpura",
      location: "Surat, Gujarat, India",
      period: "2014 – 2016",
      gpa: "76.00%",
      icon: "🏫",
    },
  ],
};

// ─── Social Profiles Section ──────────────────────────────────
export const profilesSection = {
  sectionLabel: "Find Me Online",
  sectionHeading: "Connect With Me",

  profiles: [
    {
      name: "LinkedIn",
      handle: "@ranadarshan15",
      url: "https://www.linkedin.com/in/darshan-rana-725450197/",
      color: "#0077b5",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      handle: "@ranadarshan15",
      url: "https://github.com/darshan8699",
      color: "#ffffff",
      icon: "github",
    },
    {
      name: "Email Me",
      handle: "ranadarshan15@gmail.com",
      url: "mailto:ranadarshan15@gmail.com",
      color: "var(--violet-light)",
      icon: "mail",
    },
  ],
};

// ─── Contact Section ──────────────────────────────────────────
export const contactSection = {
  sectionLabel: "Get In Touch",
  sectionHeading: "Let's Build Something Great Together",
  sectionSub:
    "Have a project, freelance opportunity, or a role that matches my skills? Let's connect.",
  subHeading: "Let's Talk",
  description:
    "Have an interesting remote app development contract, a full-time opening, or a freelance opportunity? Drop me a message, and let's explore how we can work together!",
  successMessage: "Thank you! Your message has been sent successfully.",
  web3FormsAccessKey: "1b3a1d90-240d-450d-84f0-649793cc335d", // Get a free key from https://web3forms.com
  formFields: {
    name: { label: "Full Name *", placeholder: "John Doe" },
    email: { label: "Email Address *", placeholder: "john@example.com" },
    subject: {
      label: "Subject *",
      placeholder: "Project Collaboration Opportunity",
    },
    message: {
      label: "Message *",
      placeholder: "Tell me about your project or opportunity...",
    },
  },
  submitLabel: "Send Message",
  submittingLabel: "Sending Message...",
};

// ─── Footer ───────────────────────────────────────────────────
export const footer = {
  builtWith: "Built with ❤️ in India.",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ],
};

// Trigger redeployment
