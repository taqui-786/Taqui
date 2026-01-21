// Site configuration with proper page metadata structure

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
}

// About/Profile configuration
export const about = {
  name: "Md Taqui Imam",
  title: "Full Stack Developer",
  description:
    "I am a Passionate Software Developer crafting modern web experiences with clean code and creative solutions.",
  location: "Ramgarh cantt, Jharkhand, India",
  email: "mdtaqui.jhar@gmail.com",
};

// Hero section configuration
export const heroConfig = {
  name: about.name,
  title: about.title,
  tagline: about.description,
};

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title: `${heroConfig.name} - Portfolio`,
  description: about.description,
  url: process.env.NEXT_PUBLIC_URL || "https://taqui.vercel.app",
  ogImage: "/api/og",
  author: {
    name: about.name,
    twitter: "@md_taqui_imam",
    github: "taqui-786",
    linkedin: "taqui-imam",
    email: about.email,
  },
  socialLinks: {
    facebook: "https://www.facebook.com/shahina.khatun.1044",
    twitter: "https://twitter.com/md_taqui_imam",
    linkedin: "https://www.linkedin.com/in/taqui-imam",
    external: "https://tinyurl.com/MdTaquiImam",
    github: "https://github.com/taqui-786",
  },
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "react",
    "nextjs",
    "typescript",
    "web development",
    "md taqui imam",
    "taqui imam",
    "software developer",
  ],
};

// Page-specific metadata
export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  "/": {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: `${about.description} Explore my projects, experience, and technical expertise.`,
    keywords: [
      "portfolio",
      "developer",
      "full-stack",
      "web development",
      "projects",
    ],
    ogImage: "/api/og",
    twitterCard: "summary_large_image",
  },

  // Work Experience page
  "/work": {
    title: "Work Experience - Professional Journey",
    description:
      "Explore my professional work experience across different companies and roles in software development.",
    keywords: [
      "work experience",
      "career",
      "professional",
      "software developer",
      "employment history",
    ],
    ogImage: "/api/og",
    twitterCard: "summary_large_image",
  },

  // Projects page
  "/projects": {
    title: "Projects - My Work & Projects Portfolio",
    description:
      "Discover my projects and work across different technologies and domains. From web apps to mobile solutions.",
    keywords: [
      "projects",
      "portfolio",
      "web development",
      "applications",
      "software",
    ],
    ogImage: "/api/og",
    twitterCard: "summary_large_image",
  },

  // Blog page
  "/blogs": {
    title: "Blog - Thoughts & Tutorials",
    description:
      "Read my thoughts, tutorials, and insights on engineering, programming, and web development.",
    keywords: [
      "blog",
      "tutorials",
      "programming",
      "web development",
      "technical writing",
    ],
    ogImage: "/api/og",
    twitterCard: "summary_large_image",
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata["/"];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(", "),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}

// Legacy export for backward compatibility
export const myConfig = {
  name: about.name,
  title: about.title,
  description: about.description,
  location: about.location,
  email: about.email,
  socialLinks: siteConfig.socialLinks,
  seo: {
    ogImage: siteConfig.ogImage,
    url: siteConfig.url,
    twitterHandle: siteConfig.author.twitter,
    keywords: siteConfig.keywords,
    authors: [
      {
        name: siteConfig.author.name,
        url: `https://github.com/${siteConfig.author.github}`,
      },
    ],
  },
};
