import ProfileSection from "@/components/sections/ProfileSection";

import SectionSeparator from "@/components/ui/SectionSeperator";
import BioSection from "@/components/sections/BioSection";
import SocialLinks from "@/components/sections/SocialLinks";
import AboutSection from "@/components/sections/AboutSection";
import TopSection from "@/components/sections/TopSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactMeSection from "@/components/sections/ContactMeSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-dvh max-w-full overflow-x-hidden sm:overflow-x-visible relative w-full mx-auto md:max-w-3xl pt-2 px-2 md:px-0 ">
     

      <TopSection />

      <ProfileSection />

      <SectionSeparator className="full-line-bottom" />
      <BioSection />
      <SectionSeparator className="" />
      <SocialLinks />
      <SectionSeparator className="full-line-bottom" />
      <AboutSection />
      <SectionSeparator className="full-line-bottom" />
      <TechStackSection/>
      <SectionSeparator className="full-line-bottom" />
      <ProjectsSection/>
      <SectionSeparator className="full-line-bottom" />
      <ExperienceSection/>
      <SectionSeparator className="full-line-bottom" />
      <ContactMeSection/>
      <SectionSeparator className="full-line-bottom" />
      <FooterSection/>
      <SectionSeparator className="full-line-bottom" />

    </main>
  );
}
