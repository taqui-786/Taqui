import Image from "next/image";
import myImage from "../public/taqui-removebg-preview.png";
import { BlurVignette, BlurVignetteArticle } from "./uilayouts/blur-vignette";

function HeroImageSection() {
  return (
    <div className="relative mb-26">
      <BlurVignette
        radius="24px"
        inset="10px"
        transitionLength="100px"
        blur="15px"
        classname="h-76 w-full overflow-hidden"
      >
        <video
          autoPlay={true}
          muted
          loop
          content="true"
          className="w-full  h-full object-cover  transition-all hover:scale-110"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/10/19/185726-876210695_large.mp4"
            type="video/mp4"
          />
        </video>
        <BlurVignetteArticle />
      </BlurVignette>
      {/* Profile Image */}
      <div className="absolute -bottom-16 left-8 z-50 group">
        <div className="relative">
          <div className="relative h-40 w-40 rounded-full overflow-hidden backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] transition-all duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/10 to-transparent pointer-events-none"></div>

            <Image
              className="object-cover h-full w-full relative z-10 scale-[1.2] translate-y-2.5 translate-x-1"
              src={myImage}
              alt="Taqui Imam"
              priority
            />

            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImageSection;
