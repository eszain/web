export const myProjects = [
  {
    id: 1,
    title: "Careline AI",
    description:
      "An AI agentic customer support platform that revolutionizes customer service through intelligent automation and seamless user experiences.",
    subDescription: [
      "Building a comprehensive SaaS platform using Turborepo with pnpm for efficient monorepo management and modern development workflows.",
      "Implementing secure authentication with Clerk, real-time reactive database with Convex, and comprehensive error tracking via Sentry.io.",
      "Developing AI agents for intelligent customer support automation with secure API integrations and backend architecture.",
      "Launching by end of September 2024, focusing on user base growth and potential market expansion based on product validation.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/care.png",
    tags: [
      {
        id: 1,
        name: "Turborepo",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 2,
        name: "Clerk",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 3,
        name: "Convex",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "AI Agents",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  {
    id: 6,
    title: "GiftFlow - HopHacks 2025",
    description:
      "A platform that responsibly bridges wealth gaps by matching Patrons (donors seeking tax deductions) with Charities who post tax-deductible wishes. The system guarantees that only tax-deductible wishes can be published and fulfilled.",
    subDescription: [
      "Built a comprehensive Next.js 15 platform with React 19, TypeScript, and Tailwind CSS for modern, responsive user experiences with Clerk authentication and Supabase database integration.",
      "Implemented a sophisticated tax verification pipeline using OCR (Tesseract.js), rules engine, and LLM assistant to automatically verify custom wishes for tax deductibility before publication.",
      "Developed secure payment processing with Stripe integration, automatic tax receipt generation, and comprehensive analytics dashboard for tracking donations by demographics and purpose.",
      "Created a robust security system with Row Level Security (RLS), audit logging, PII protection, and moderation workflows to ensure compliance and data protection across all user interactions.",
    ],
    href: "https://github.com/eszain/GiftFlow",
    logo: "",
    image: "/assets/projects/giftflow.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Beat The Clock Binary",
    description:
      "A two-player FPGA game where players race to guess 5-bit numbers before time runs out. Built in Verilog for the DE-10 Lite board. Think fast, guess faster! ⏳💡",
    subDescription: [
      "Developed an FPGA-based digital two-player game combining combinational and sequential logic for competitive timed gameplay.",
      "Implemented real-time score tracking and countdown timers using XOR gates for input verification and binary adders/subtractors for timer calculations.",
      "Created a random number generator for 5-bit binary values with edge detection for responsive button presses and 5-bit counters for player timers.",
      "Built a 1 Hz clock signal using clock divider for precise timing control and seven-segment displays for real-time feedback to players.",
    ],
    href: "https://github.com/eszain/BeatTheClockBinary",
    logo: "",
    image: "/assets/projects/btcb.jpg",
    tags: [
      {
        id: 1,
        name: "Verilog",
        path: "/assets/logos/git.svg",
      },
      {
        id: 2,
        name: "FPGA",
        path: "/assets/logos/github.svg",
      },
      {
        id: 3,
        name: "Quartus",
        path: "/assets/logos/quartus.jpeg",
      },
      {
        id: 4,
        name: "Intel",
        path: "/assets/logos/intel.png",
      },
    ],
  },
  {
    id: 5,
    title: "IoT Plant Monitoring System",
    description:
      "A Java-based project that automates plant watering using an Arduino, a moisture sensor, and a pump. Say goodbye to thirsty plants and hello to smart gardening! 🌱💧",
    subDescription: [
      "Developed an automatic plant watering system using Arduino board, moisture sensor, and water pump controlled by Java state machine.",
      "Implemented a three-state system (Dry, Slightly Dry, Wet) that monitors soil moisture levels every second and adjusts pump operation accordingly.",
      "Built using Java with TimerTask and Firmata4j libraries for real-time Arduino communication and precise timing control.",
      "Created a complete hardware setup with MOSFET for pump control, battery power management, and voltage threshold-based moisture detection.",
    ],
    href: "https://github.com/eszain/IoT-Plant-Monitoring-System",
    logo: "",
    image: "/assets/projects/plant.jpg",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Arduino",
        path: "/assets/logos/git.svg",
      },
      {
        id: 3,
        name: "IoT",
        path: "/assets/logos/github.svg",
      },
      {
        id: 4,
        name: "Hardware",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 4,
    title: "PhysioGrow - TerraHacks 2025",
    description:
      "Transform physical therapy from an isolating and monotonous chore into an engaging, motivating, and clinically effective digital experience with AI-guided exercises.",
    subDescription: [
      "Developed a gamified physical therapy app using React 18, TypeScript, and MediaPipe Pose for real-time AI-guided exercise tracking.",
      "Implemented camera integration with pose estimation, real-time feedback, and template matching for shoulder abduction exercises.",
      "Built an engaging user flow with welcome page, camera setup, exercise selection, gameplay with AI guidance, and results visualization.",
      "Created a tree garden leaderboard system with XP tracking, progress persistence, and mobile-responsive design using Tailwind CSS.",
    ],
    href: "https://github.com/fouzanpasha/physioapp",
    logo: "",
    image: "/assets/projects/phys.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "MediaPipe",
        path: "/assets/logos/github.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  }
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/zaincodes77/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Coding Mentor",
    job: "Code The Dream Durham, NC",
    date: "July 2025 - Present",
    contents: [
      "Increased student engagement by 20% by mentoring 7 students weekly on core topics such as JavaScript, HTML/CSS, and Git, reinforcing concepts through guided learning and consistent encouragement.",
      "Achieved a 90% completion rate of weekly learning objectives across 18 core lessons by delivering 1:1 coaching on loops, functions, arrays, objects, and version control, tailored to each student's pace.",
      "Improved assignment success rates by 35% by reviewing and providing feedback on 40+ coding projects per cohort using Replit and GitHub, helping students debug DOM manipulation, Fetch API, and asynchronous issues.",
      "Supported students' final project development by guiding portfolio-level work involving HTML/CSS, API integration, and best practices for responsive, structured code—ensuring on-time, high-quality completions.",
      "Contributed to a positive, high-performing team culture by actively collaborating with 10+ mentors to share best practices, encourage growth, and ensure a consistent and high-quality experience for every learner.",
    ],
  },
  {
    title: "Mentor",
    job: "Hack the 6ix",
    date: "July 18-20, 2025",
    contents: [
      "Mentored 15+ hackathon teams across 48 hours, providing technical guidance on full-stack development, API integration, and debugging strategies to accelerate project completion.",
      "Facilitated ideation sessions for 8 teams, helping them transform initial concepts into viable MVP prototypes using design thinking and rapid prototyping methodologies.",
      "Resolved 25+ critical technical blockers including React state management issues, database connectivity problems, and deployment challenges, enabling teams to meet demo deadlines.",
      "Assisted 8+ teams with sponsor model integration including Gemini AI, OpenAI APIs, and cloud services, enabling them to build innovative AI-powered features and achieve 40% faster development cycles.",
      "Conducted 12+ code reviews and debugging sessions, helping teams optimize performance and implement best practices for clean, maintainable code within tight time constraints.",
    ],
  },
];
