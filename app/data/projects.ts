interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    image: string;
    links: {
      github?: string;
      live?: string;
      demo?: string;
    };
    featured?: boolean;
  }

export const projectsData: Project[] = [
  {
    id: "1",
    title: "HexKit",
    description:
      "HexKit is an all-in-one platform for Capture The Flag (CTF) challenges featuring a comprehensive suite of cryptography, encoding, and analysis tools to help you crack the code and capture the flag.",
    image: "/projects/hexkit.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "ShadCN",
      "Framer Motion",
      "Crypto-JS"
    ],
    category: "Web Development",
    links: {
      github: "https://github.com/SrihasRC/HexKit",
      live: "https://hex-kit.vercel.app/",
    },
    featured: true,
  },
  {
    id: "2",
    title: "Subscription-Tracker",
    description:
      "A Node.js/Express application to help users manage and track their subscriptions, receive reminders, and keep their spending in check. It features user authentication, subscription management, and email notifications.",
    image: "/projects/subscription-tracker.png",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "Arcjet",
      "bcryptjs",
    ],
    category: "Web Development",
    links: {
      github: "https://github.com/SrihasRC/Subscription-Tracker",
    },
    featured: true,
  },
  {
    id: "3",
    title: "SecureShare",
    description:
      "A secure, browser-based peer-to-peer file sharing application built with React and WebRTC. It allows users to share files directly between browsers without a central server, ensuring privacy and speed.",
    image: "/projects/secureshare.png",
    technologies: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "WebRTC",
      "AES Encryption",
      "SHA256",
    ],
    category: "Web Development",
    links: {
      github: "https://github.com/SrihasRC/SecureShare",
      live: "https://secureshare11.netlify.app/",
    },
    featured: true,
  },
];