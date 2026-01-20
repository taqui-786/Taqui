import GitHubHeaderBtn from "./GithubHeaderBtn";
import { Link } from "next-view-transitions";
import { ThemeTogglerButton } from "../animate-ui/components/buttons/theme-toggler";
import HeaderNavLinks from "./HeaderNavLinks";
import Image from "next/image";

function Header() {
  return (
    <header className="container mx-auto max-w-full md:max-w-3xl px-4 sticky top-0 z-50 rounded-md py-4 bg-background/95 supports-backdrop-filter:backdrop-blur-sm supports-backdrop-filter:bg-background/80">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Link href="/">
            <div className="h-12 w-12 rounded-md bg-blue-300 overflow-hidden flex items-end p-0">
              <Image
                src={"/taqui-removebg-preview.png"}
                alt="logo"
                loading="lazy"
                width={100}
                height={100}
                className="h-full w-full object-cover  scale-[1.4] translate-y-1.5 [@media(hover:hover)_and_(pointer:fine)]:transition-transform [@media(hover:hover)_and_(pointer:fine)]:duration-200 [@media(hover:hover)_and_(pointer:fine)]:ease-[ease] [@media(hover:hover)_and_(pointer:fine)]:hover:scale-125 [@media(hover:hover)_and_(pointer:fine)]:will-change-transform"
              />
            </div>{" "}
          </Link>
          <HeaderNavLinks />
        </div>

        <div className="flex items-center gap-2">
          <GitHubHeaderBtn />

          <ThemeTogglerButton
            variant={"secondary"}
            size={"lg"}
            direction="ttb"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
