"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Attachment,
  Facebook,
  GithubIcon,
  Instagram,
  LinkedinIcon,
  Mail,
  MediumIcon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./animate-ui/components/animate/tooltip";
function SocialLinks() {
  const socialLinks = [
    {
      id: 1,
      name: "Twitter",
      username: "@md_taqui_imam",
      icon: NewTwitterIcon,
      alt: "Twitter",
      href: "https://twitter.com/md_taqui_imam",
    },
    {
      id: 2,
      name: "GitHub",
      username: "@Taqui-786",
      icon: GithubIcon,
      alt: "GitHub",
      href: "https://github.com/taqui-786",
    },
    {
      id: 3,
      name: "LinkedIn",
      username: "@taqui-imam",
      icon: LinkedinIcon,
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/taqui-imam/",
    },

    {
      key: 4,
      name: "Instagram",
      username: "@md_taqui_imam",
      icon: Instagram,
      alt: "Instagram",
      href: "https://www.instagram.com/md_taqui_imam/",
    },
    {
      id: 5,
      name: "Facebook",
      username: "@md_taqui_imam",
      icon: Facebook,
      alt: "facebook",
      href: "https://www.facebook.com/md_taqui_imam/",
    },
    {
      id: 6,
      name: "Mail",
      username: "mdtaqui.jhar@gmail.com",
      icon: Mail,
      alt: "Mail",
      href: "mailto:mdtaqui.jhar@gmail.com",
    },

    {
      id: 7,
      name: "Medium",
      username: "@mdtaqui.jhar",
      icon: MediumIcon,
      alt: "Medium",
      href: "https://medium.com/@mdtaqui.jhar",
    },
    {
      id: 8,
      name: "Dev.to",
      username: "@random_ti",
      icon: Attachment,
      alt: "devDotTo",
      href: "https://dev.to/random_ti",
    },
  ];

  return (
    <div className="flex flex-row gap-2 items-center ">
      <TooltipProvider openDelay={0} closeDelay={300}>
        {socialLinks.map((link) => (
          <Tooltip key={link.id} align="center">
            <TooltipTrigger>
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <HugeiconsIcon icon={link.icon} size="24" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}

export default SocialLinks;
