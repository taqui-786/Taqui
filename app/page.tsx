import SocialLinks from "@/components/ui/SocialLinks";
import HeroImageSection from "@/components/LandingPage/HeroImageSection";
import HeroBio from "@/components/ui/HeroBio";
import HeroName from "@/components/ui/HeroName";
import HeroActionButton from "@/components/ui/HeroActionButton";
import { HeroContributionGraph } from "@/components/uilayouts/contribution-graph";
import ProjectsSection from "@/components/LandingPage/ProjectsSection";
import ExperienceSection from "@/components/LandingPage/ExperienceSection";
import TechStackSection from "@/components/LandingPage/TechStackSection";
import BlogSection from "@/components/LandingPage/BlogSection";
export default function Page() {
  return (
    <div className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16">
      <HeroImageSection />
      {/* Hero section part */}
      <div className="relative space-y-8 md:px-4">
        <HeroName />
        {/* Short Bio */}
        <HeroBio />
        {/* Action Buttons */}
        <HeroActionButton />
        {/* Social Icons */}
        <SocialLinks />
        {/* Contribution Graph */}
        <HeroContributionGraph />
        {/* Projects section */}
        <ProjectsSection />
        {/* Experience section */}
        <ExperienceSection />
        {/* Tech stack Section */}
        <TechStackSection />
        {/* Blog section */}
        <BlogSection />
      </div>
    </div>
  );
}
