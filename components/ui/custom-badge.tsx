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
    <div className="p-[2px] inline-flex items-center border border-dashed dark:border-white/30 border-black/20 rounded-md">

    <a
      target="_blank"
      className="inline-flex items-center text-sm bg-black/5 dark:bg-white/15  py-[2px] px-[6px] rounded-md skill-inner-shadow self-end text-title overflow-hidden"
      href={href}
      >
      <div className=" shrink-0">{children}</div>
      <p className="ml-1 text-sm font-bold">{name}</p>
    </a>
      </div>
  );
};