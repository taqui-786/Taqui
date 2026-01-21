import Image from "next/image";

function HeroImageSection() {
  return (
    <div className="relative mb-26 animate-fade-in-up">
      <div className="p-1  border border-dashed dark:border-white/30 border-black/20 rounded-2xl size-auto">
       
        <div className="md:h-76 h-64 w-full relative  overflow-hidden rounded-xl border border-border aspect-video">
          
          <Image
            src={"/testBannerHero3.jpg"}
            alt="Taqui Imam"
            className="w-auto h-full object-cover hover:scale-105 transition-all duration-300 "
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/APH//+7++tjo4J+vpwCjs6tQZl00TUMmPzcAABgMAA0BEjEnES4muU4P4HViC4oAAAAASUVORK5CYII="}
          />
        </div>
      </div>

      {/* Profile Image */}
      <div className="absolute -bottom-16 md:left-8 left-4 z-40 group">
        <div className="relative">
        
          <div className="relative md:size-40 size-36 rounded-full overflow-hidden backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] transition-all duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/10 to-transparent pointer-events-none"></div>
           
            <Image
              className="
    object-cover h-full w-full relative z-10
    scale-[1.2] translate-y-2.5 translate-x-1
     opacity-90
     hover:opacity-100
    transition-all duration-300 ease-in-out
  "
              src={'/taqui-removebg-preview.png'}
              loading="lazy"
              fill
              placeholder="blur"
              blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nGNgYGBgSPd1yJxaGZ8LYoPBz51Tt/z/cGgpjM/TmBFzd35jAURAXFxcxdnZcYe7u/t0BgYGZgBY6BFDJ12G1gAAAABJRU5ErkJggg=="}
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
