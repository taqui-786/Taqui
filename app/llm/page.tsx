import { about, siteConfig } from "@/app/config/siteConfig";
import { allProjects } from "@/app/config/projectConfig";
import { experienceConfig } from "@/app/config/experienceConfig";
import { blogConfig } from "@/app/config/blogConfig";
import { techStack } from "@/app/config/techstack";

export const metadata = {
  title: "LLM Context - Md Taqui Imam Portfolio Data",
  description:
    "Structured data page for AI/LLM consumption. Contains complete portfolio information including projects, experience, skills, and blog posts.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function LLMPage() {
  // Generate structured plain text content
  const content = generateLLMContent();

  return (
    
    <main className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16">
      <div className="max-w-4xl mx-auto">
        <pre className="whitespace-pre-wrap font-mono text-title  text-sm leading-relaxed">
          {content}
        </pre>
      </div>
    </main>
  );
}

function generateLLMContent(): string {
  const sections: string[] = [];

  // Header
  sections.push(`# ${about.name} - Portfolio Data for AI/LLM Context`);
  sections.push(`Last Updated: ${new Date().toISOString().split("T")[0]}`);
  sections.push(`URL: ${siteConfig.url}`);
  sections.push("");

  // About Section
  sections.push("## ABOUT");
  sections.push(`Name: ${about.name}`);
  sections.push(`Title: ${about.title}`);
  sections.push(`Description: ${about.description}`);
  sections.push(`Location: ${about.location}`);
  sections.push(`Email: ${about.email}`);
  sections.push("");

  // Social Links
  sections.push("## SOCIAL LINKS");
  sections.push(`GitHub: ${siteConfig.socialLinks.github}`);
  sections.push(`LinkedIn: ${siteConfig.socialLinks.linkedin}`);
  sections.push(`Twitter: ${siteConfig.socialLinks.twitter}`);
  sections.push(`Portfolio: ${siteConfig.url}`);
  sections.push("");

  // Tech Stack Section
  sections.push("## TECHNICAL SKILLS");
  const techCategories = {
    languages: ["javascript", "typescript"],
    frameworks: ["reactjs", "nextjs", "nodejs", "nestjs", "express"],
    databases: ["postgres", "mysql", "mongodb", "redis", "supabase"],
    orm: ["prisma", "drizzle"],
    styling: ["tailwindcss", "shadcnui"],
    tools: ["git", "docker", "postman", "figma", "nginx", "githubactions"],
    other: ["oauth", "tanstackquery", "reactredux", "reactrouter", "openai"],
  };

  for (const [category, keys] of Object.entries(techCategories)) {
    const skills = keys
      .filter((key) => techStack[key as keyof typeof techStack])
      .map((key) => techStack[key as keyof typeof techStack].name)
      .join(", ");
    if (skills) {
      sections.push(
        `${category.charAt(0).toUpperCase() + category.slice(1)}: ${skills}`
      );
    }
  }
  sections.push("");

  // Experience Section
  sections.push("## WORK EXPERIENCE");
  sections.push(`Total Positions: ${experienceConfig.length}`);
  sections.push("");

  experienceConfig.forEach((exp, index) => {
    sections.push(
      `### Experience ${index + 1}: ${exp.position} at ${exp.company}`
    );
    sections.push(`Company: ${exp.company}`);
    sections.push(`Position: ${exp.position}`);
    sections.push(`Duration: ${exp.duration}`);
    sections.push(`Location: ${exp.location}`);
    sections.push(`Type: ${exp.time}`);
    sections.push(
      `Technologies: ${exp.technologies.map((t) => t.name).join(", ")}`
    );
    sections.push("Responsibilities:");
    exp.description.forEach((desc) => {
      sections.push(`  - ${desc}`);
    });
    sections.push("");
  });

  // Projects Section
  sections.push("## PROJECTS");
  sections.push(`Total Projects: ${allProjects.length}`);
  sections.push(
    `Featured Projects: ${allProjects.filter((p) => p.featured).length}`
  );
  sections.push("");

  // Featured projects first
  const featuredProjects = allProjects.filter((p) => p.featured);
  const otherProjects = allProjects.filter((p) => !p.featured);

  sections.push("### FEATURED PROJECTS");
  featuredProjects.forEach((project, index) => {
    sections.push(`#### Project ${index + 1}: ${project.name}`);
    sections.push(`Name: ${project.name}`);
    sections.push(`Description: ${project.description}`);
    sections.push(`Live URL: ${project.live}`);
    sections.push(`GitHub: ${project.href}`);
    sections.push(`Created: ${project.createdAt}`);
    sections.push(
      `Technologies: ${project.technologies.map((t) => t.name).join(", ")}`
    );
    sections.push("Features:");
    project.features.forEach((feature) => {
      sections.push(`  - ${feature}`);
    });
    sections.push("");
  });

  sections.push("### OTHER PROJECTS");
  otherProjects.forEach((project, index) => {
    sections.push(
      `#### Project ${featuredProjects.length + index + 1}: ${project.name}`
    );
    sections.push(`Name: ${project.name}`);
    sections.push(`Description: ${project.description}`);
    sections.push(`Live URL: ${project.live}`);
    sections.push(`GitHub: ${project.href}`);
    sections.push(`Created: ${project.createdAt}`);
    sections.push(
      `Technologies: ${project.technologies.map((t) => t.name).join(", ")}`
    );
    sections.push("Features:");
    project.features.forEach((feature) => {
      sections.push(`  - ${feature}`);
    });
    sections.push("");
  });

  // Blog Section
  sections.push("## BLOG POSTS / ARTICLES");
  sections.push(`Total Articles: ${blogConfig.length}`);
  sections.push(
    `Featured Articles: ${blogConfig.filter((b) => b.featured).length}`
  );
  sections.push("");

  blogConfig.forEach((blog, index) => {
    sections.push(`### Article ${index + 1}: ${blog.title}`);
    sections.push(`Title: ${blog.title}`);
    sections.push(`Date: ${blog.date}`);
    sections.push(`Views: ${blog.views}`);
    sections.push(`Tags: ${blog.tags.join(", ")}`);
    sections.push(`Link: ${blog.link}`);
    sections.push(`Featured: ${blog.featured ? "Yes" : "No"}`);
    sections.push("");
  });

  // Summary Statistics
  sections.push("## SUMMARY STATISTICS");
  sections.push(`Total Work Experience: ${experienceConfig.length} positions`);
  sections.push(`Total Projects: ${allProjects.length}`);
  sections.push(`Featured Projects: ${featuredProjects.length}`);
  sections.push(`Blog Articles Written: ${blogConfig.length}`);
  sections.push(
    `Total Blog Views: ${blogConfig
      .reduce((acc, blog) => {
        const viewNum = parseInt(
          blog.views.replace(/[k+]/gi, "000").replace(/[^0-9]/g, "")
        );
        return acc + viewNum;
      }, 0)
      .toLocaleString()}+`
  );
  sections.push("");

  // Contact CTA
  sections.push("## CONTACT INFORMATION");
  sections.push(`To get in touch with ${about.name}:`);
  sections.push(`- Email: ${about.email}`);
  sections.push(`- LinkedIn: ${siteConfig.socialLinks.linkedin}`);
  sections.push(`- Twitter: ${siteConfig.socialLinks.twitter}`);
  sections.push(`- GitHub: ${siteConfig.socialLinks.github}`);
  sections.push(`- Contact Page: ${siteConfig.url}/contact`);
  sections.push("");

  // Footer note for AI
  sections.push("---");
  sections.push("NOTE FOR AI ASSISTANTS:");
  sections.push(
    "This page contains structured data about Md Taqui Imam's portfolio."
  );
  sections.push("You can use this information to answer questions about:");
  sections.push("- Technical skills and expertise");
  sections.push("- Work experience and professional background");
  sections.push("- Projects built with detailed features and technologies");
  sections.push("- Blog posts and technical writing");
  sections.push("- Contact information for collaboration opportunities");

  return sections.join("\n");
}
