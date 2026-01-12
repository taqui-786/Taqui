import React from "react";

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
function SocialLinks() {
  const socialLinks = [
    {
      name: "Twitter",
      username: "@md_taqui_imam",
      icon: NewTwitterIcon,
      alt: "Twitter",
      href: "https://twitter.com/md_taqui_imam",
    },
    {
      name: "GitHub",
      username: "@Taqui-786",
      icon: GithubIcon,
      alt: "GitHub",
      href: "https://github.com/taqui-786",
    },
    {
      name: "LinkedIn",
      username: "@taqui-imam",
      icon: LinkedinIcon,
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/taqui-imam/",
    },

    {
      name: "Instagram",
      username: "@md_taqui_imam",
      icon: Instagram,
      alt: "Instagram",
      href: "https://www.instagram.com/md_taqui_imam/",
    },
    {
      name: "Facebook",
      username: "@md_taqui_imam",
      icon: Facebook,
      alt: "facebook",
      href: "https://www.facebook.com/md_taqui_imam/",
    },
    {
      name: "Mail",
      username: "mdtaqui.jhar@gmail.com",
      icon: Mail,
      alt: "Mail",
      href: "mailto:mdtaqui.jhar@gmail.com",
    },

    {
      name: "Medium",
      username: "@mdtaqui.jhar",
      icon: MediumIcon,
      alt: "Medium",
      href: "https://medium.com/@mdtaqui.jhar",
    },
    {
      name: "Dev.to",
      username: "@random_ti",
      icon: Attachment,
      alt: "devDotTo",
      href: "https://dev.to/random_ti",
    },
  ];
  return (
    <div className="flex gap-2 items-center ">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary"
        >
          <HugeiconsIcon icon={link.icon} size="24" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
