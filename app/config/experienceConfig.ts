import { techStack } from "./techstack";
type TechStackItem = (typeof techStack)[keyof typeof techStack];

export interface ExperienceItem {
  company: string;
  featured: boolean;
  position: string;
  duration: string;
  logo: string;
  location: string;
  time: "Full Time" | "Part Time";
  technologies: TechStackItem[];
  description: string[];
}
export const experienceConfig: ExperienceItem[] = [
  {
    company: "Lightwork AI",
    featured:true,
    position: "Frontend Developer",
    duration: "Oct 2024 - Mar 2025",
    logo: "/lightwork_ai_official_logo.jpg",
    location: "USA - Remote",
    time: "Full Time",
    technologies: [
      techStack.reactjs,
      techStack.nestjs,
      techStack.typescript,
      techStack.tailwindcss,
      techStack.shadcnui,
      techStack.reactredux,
      techStack.oauth,
      techStack.etc,
    ],
    description: [
      "Developed and maintained user interfaces for web applications using React and TypeScript.",
      "Collaborated with backend developers to integrate RESTful APIs.",
      "Implemented responsive design principles to ensure optimal user experience across devices.",
      "Optimized application performance and resolved bugs.",
      "Created pages such as Settings, Docs, Profile and more.",
    ],
  },
  {
    company: "Tweetz",
    position: "Full Stack Developer",
        featured:true,
    duration: "Aug 2025 - Dec 2025",
    logo: "/tweetz_logo.webp",
    location: "USA - Freelance",
    time: "Part Time",
    technologies: [
      techStack.nextjs,
      techStack.reactjs,
      techStack.typescript,
      techStack.tailwindcss,
      techStack.shadcnui,
      techStack.tanstackquery,
      techStack.oauth,
      techStack.nodejs,
      techStack.openai,
    ],
    description: [
      "Built authentication system using Better Auth including sign up, sign in, and logout functionality.",
      "Implemented 7-day free trial with no credit card requirement for user acquisition.",
      "Developed AI-powered tweet auto-generation based on user preferences on a daily basis.",
      "Integrated tone-learning AI that analyzes user writing style with full editing capabilities.",
      "Created intuitive scheduling interface for content management across all devices.",
      "Implemented automated posting system with precise scheduling capabilities.",
      "Built reliable content delivery system ensuring posts go live exactly as planned.",
      "Architected data storage using Neon PostgreSQL and managed with Prisma ORM.",
      "Optimized data fetching using TanStack Query for improved performance.",
      "Designed modern UI components styled with shadcn-ui and Tailwind CSS.",
    ],
  },
  {
    company: "KryptoKapital",
    position: "Full Stack Developer",
        featured:true,
    duration: "Feb 2023 - Sep 2024",
    logo: "/krypto_kapital_logo.png",
    location: "Germany - Freelance",
    time: "Part Time",
    technologies: [
      techStack.nextjs,
      techStack.supabase,
      techStack.typescript,
      techStack.tailwindcss,
      techStack.shadcnui,
      techStack.tanstackquery,
      techStack.oauth,
    ],
    description: [
      "Built a comprehensive platform with various tools to study and analyze crypto market status.",
      "Implemented one-to-one video call lectures and practical sessions for personalized learning.",
      "Created an all-in-one platform for beginners willing to invest in cryptocurrency.",
      "Re-built the entire platform using Next.js 13 and TypeScript for improved performance and type safety.",
      "Integrated NextAuth authentication for secure user management.",
      "Connected Supabase with real-time capabilities using supabase/ssr for dynamic data updates.",
      "Utilized Framer Motion and shadcn-ui to create beautiful, animated UI components.",
    ],
  },
  {
    company: "Rupeespot",
        featured:false,
    position: "Full Stack Developer",
    duration: "Dec 2022 - Dec 2024",
    logo: "/rupeespot_logo.png",
    location: "India - Freelance",
    time: "Part Time",
    technologies: [
      techStack.nextjs,
      techStack.mysql,
      techStack.reactjs,
      techStack.typescript,
      techStack.tailwindcss,
      techStack.tanstackquery,
      techStack.oauth,
      techStack.drizzle,
    ],
    description: [
      "Built product price tracking system with real-time notification capabilities.",
      "Implemented price history visualization and analysis features for informed purchasing decisions.",
      "Integrated coupons and redeem codes functionality for user savings.",
      "Developed the product from scratch using Next.js 14 and TypeScript.",
      "Integrated NextAuth for secure authentication and user management.",
      "Connected MySQL database via Drizzle ORM for efficient data operations.",
      "Utilized Framer Motion and shadcn-ui to create beautiful, animated UI components.",
    ],
  },
];
