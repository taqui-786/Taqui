export const CustomBadge = ({
  children,
  href,
  name,
}: {
  children: React.ReactNode;
  href: string;
  name: string;
}) => {
  return (
    <div className="p-[2px] inline-flex items-center border border-dashed dark:border-white/30 border-black/20 rounded-[8px]">

    <a
      target="_blank"
      style={{textDecoration:"none"}}
      className="inline-flex  items-center no-underline text-sm bg-black/5 dark:bg-white/15 border  py-[2px] px-[6px] rounded-[6px] skill-inner-shadow self-end text-title overflow-hidden"
      href={href}
      >
      <div className=" shrink-0">{children}</div>
      <p className="ml-1 text-sm font-bold ">{name}</p>
    </a>
      </div>
  );
};