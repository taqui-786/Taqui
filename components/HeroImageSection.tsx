import Image from "next/image";
import myImage from "../public/taqui-removebg-preview.png";

function HeroImageSection() {
  return (
    <div className="relative mb-26 animate-fade-in-up">
      <div className="p-[2px] border border-dashed dark:border-white/30 border-black/20 rounded-2xl size-auto">
        <div className="h-76 w-full relative  overflow-hidden">
          <Image
            src={"/testBannerHero3.jpg"}
            alt="Taqui Imam"
            className="w-auto h-full object-cover rounded-2xl "
            fill
            loading="lazy"
          />
        </div>
      </div>

      {/* Profile Image */}
      <div className="absolute -bottom-16 md:left-8 left-4 z-40 group">
        <div className="relative">
          <div className="relative h-40 w-40 rounded-full overflow-hidden backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] transition-all duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/10 to-transparent pointer-events-none"></div>
            <Image
              className="
    object-cover h-full w-full relative z-10
    scale-[1.2] translate-y-2.5 translate-x-1
     opacity-90
     hover:opacity-100
    transition-all duration-300 ease-in-out
  "
              src={myImage}
              alt="Taqui Imam"
            />

            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImageSection;
