import SocialLinks from "@/components/SocialLinks";
import HeroImageSection from "@/components/HeroImageSection";
import HeroBio from "@/components/HeroBio";
import HeroName from "@/components/HeroName";
import HeroActionButton from "@/components/HeroActionButton";
export default function Page() {
  return (
    <div className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16">
      <HeroImageSection />
      {/* Hero section part */}
      <div className="relative space-y-8 pl-4">
        <HeroName />
        {/* Short Bio */}
        <HeroBio />
        {/* Action Buttons */}
        <HeroActionButton />
        {/* Social Icons */}
        <div className="">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
