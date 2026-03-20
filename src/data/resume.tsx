import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Naman Gupta",
  initials: "NG",
  url: "https://github.com/g-naman07", // UPDATE THIS
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Electrical Engineering student at DTU with strong foundations in Data Structures, Full Stack Development, and competitive programming.",
  summary:
    "I am an Electrical Engineering undergraduate at Delhi Technological University (DTU) with experience in full-stack development and problem solving. I have built multiple MERN-based applications and solved 400+ problems on LeetCode. I also have exposure to OpenCV and ROS through AUV-DTU, working on real-world robotics and computer vision tasks.",

  avatarUrl: "/me.png",

  skills: [
    "Data Structures & Algorithms",
    "OOPS",
    "DBMS",
    "Operating Systems",
    "C/C++",
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Full Stack Development",
    "MongoDB",
    "MySQL",
    "AWS (EC2, S3, Lambda, RDS)",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Linux",
    "Git & GitHub",
    "Terraform",
    "Grafana",
    "Prometheus",
    "Logging & Monitoring",
    "OpenCV",
    "ROS",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "g.naman8612@gmail.com",
    tel: "+91-7217650882",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/g-naman07", // UPDATE
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/naman-gupta-288904254/", // UPDATE
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/gnaman9",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [],

  education: [
    {
      school: "Delhi Technological University (DTU)",
      href: "https://www.resulthubdelhi.com/DTU/StudentProfile/2027/23_EE_325",
      logoUrl: "/dtulogo.png",
      degree:
        "Bachelor of Technology in Electrical Engineering (GPA- 8.41)",
      start: "2023",
      end: "Present",
    },
    {
      school: "Darbari Lal DAV Model School",
      href: "",
      logoUrl: "/davlogo.png",
      degree: "Class X (CBSE) - 95.8% , Class XII (CBSE) - 92.4% ",
      // degree2: "Class X (CBSE) - 95.8%",
      start: "2008",
      end: "2022",
    },
    // {
    //   school: "Darbari Lal DAV Model School",
    //   href: "",
    //   logoUrl: "/davlogo.png",
    //   degree: "Class X (CBSE) - 95.8%",
    //   start: "2008",
    //   end: "2020",
    // },
  ],
  codingStats: [
    {
      name: "LeetCode",
      username: "namg07",
      solved: "474",
      contests: "18",
      rating: "1694",
      href: "https://leetcode.com/namg07",
    },
    {
      name: "CodeChef",
      username: "namg07",
      rating: "1523 (Div 3 ★★)",
      globalRank: "24587",
      countryRank: "22588",
      href: "https://www.codechef.com/users/namg07",
    },
    {
      name: "Codeforces",
      username: "namg07",
      rating: "1105 (Newbie)",
      solved: "110 problems",
      href: "https://codeforces.com/profile/namg07",
    },
    {
      name: "AtCoder",
      username: "namg07",
      rating: "175 (10 Kyu)",
      contests: "5",
      href: "https://atcoder.jp/users/namg07",
    },
  ],


  projects: [
    {
      title: "College & Rank Predictor",
      href: "https://jee2026-predictor.vercel.app/",
      image: "/rank2college.png",
      active: true,
      description:
        "Developed a predictor tool to estimate JEE Main rank and college admission chances using historical JoSAA and JAC Delhi cutoff data. Supports percentile-to-rank conversion and branch-wise predictions across IITs, NITs, IIITs, and GFTIs.",
      technologies: [
        "React.js",
        "JavaScript",
        "Data Analysis",
        "JSON",
      ],
      links: [],
    },
    {
      title: "HeapSpace",
      href: "https://heapspace.vercel.app/",
      image: "/heapspace.png",
      active: true,
      description:
        "Built a coding platform supporting problem solving, submissions, and basic evaluation features. Designed interactive UI and handled backend logic for managing problems and user activity.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [],
    },
    {
      title: "Reel-Based Food Delivery App",
      href: "https://github.com/g-naman07/food-app",
      image: "/zomato.png",
      active: false,
      description:
        "Developed a food delivery application with a reel-style scrolling interface for browsing dishes. Implemented dynamic UI for enhanced user engagement and seamless navigation.",
      technologies: [
        "React.js",
        "JavaScript",
        "CSS",
      ],
      links: [],
    },
    {
      title: "Car Rental Platform",
      href: "https://github.com/g-naman07/car-rental-platform",
      image: "/rentalcar.png",
      active: true,
      description:
        "Developed a full-stack car rental platform with JWT-based authentication, booking system, admin dashboard, and ImageKit integration for optimized media handling.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
      ],
      links: [],
    },
    {
      title: "Hotel Booking Platform",
      href: "https://github.com/g-naman07/hotel-booking-site",
      image: "/hotelbooking.png",
      active: true,
      description:
        "Built a scalable hotel booking application with Clerk authentication, Stripe payment integration, automated email confirmations, and admin dashboard.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Stripe",
      ],
      links: [],
    },
    // {
    //   title: "Gemini Clone AI Chat App",
    //   href: "",
    //   active: true,
    //   description:
    //     "Developed a real-time conversational chatbot using Gemini API with a responsive React interface. Deployed as a production-ready application.",
    //   technologies: ["React.js", "Gemini API", "JavaScript"],
    //   links: [],
    // },
    {
      title: "Internship Portal",
      image: "/intern.png",
      href: "",
      active: true,
      description:
        "Designed a job portal with recruiter and applicant dashboards, enabling job posting, application tracking, and authentication.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [],
    },
  ],

  hackathons: [
    {
      title: "AUV-DTU (Autonomous Underwater Vehicle Society)",
      dates: "Aug 2023 - Apr 2024",
      logoUrl: "/auv.jpg",
      location: "Delhi, India",
      description:
        "Worked on OpenCV-based projects including color detection and image enhancement. Gained hands-on experience with ROS for autonomous systems and contributed to underwater robotics development.",
      image: "/auv.jpg",
      links: [],
    },
  ],
  certifications: [
    {
      title: "British Council English Course (B2)",
      issuer: "British Council",
      date: "May 2025 - July 2025",
      description:
        "Completed 30-hour English course at CEFR Level B2.",
      logo: "/british.png",
      link: "https://drive.google.com/file/d/1Z89Y3bbv8FgEbeMU1AnNmeHKJm0lfYLt/view?usp=drive_link",
    },
    {
      title: "DevOps Certification",
      issuer: "Coding Blocks",
      date: "2025",
      description:
        "Completed DevOps training covering deployment, CI/CD, and cloud fundamentals.",
      logo: "/codingblocks.png",
      link: "https://drive.google.com/file/d/1htO_D751M2_jMpxxAK7Q4mmjqjsS2V-y/view?usp=drive_link",
    },
    {
      title: "McKinsey Forward Program",
      issuer: "McKinsey.org",
      date: "Dec 2025",
      description:
        "Developed problem-solving, communication, and digital skills through McKinsey Forward program.",
      logo: "/mckinsey.png",
      link: "https://drive.google.com/file/d/18mRyN1s3918mt8Kqf5IAtzqARrXx1ZeN/view?usp=drive_link"
    },
    {
      title: "Graph Theory Programming Camp",
      issuer: "AlgoUniversity",
      date: "2025",
      description:
        "Completed advanced graph programming camp solving 17 problems under Codeforces Master mentorship.",
      logo: "/algouniversity.png",
      link: "https://drive.google.com/file/d/1Oo-IFm7Vr2g1LRDvG9n7X9cOa6P520GO/view?usp=drive_link"
    },
  ],
} as const;