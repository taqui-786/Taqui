import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16 animate-fade-in-blur">
      <div className="flex items-center justify-between h-full">
        <span className="text-xs text-subtle uppercase tracking-wider">
          © {new Date().getFullYear()} All rights reserved.
        </span>
        <span className="text-xs text-subtle tracking-wider">
          Designed & Developer By <span className="text-primary font-bold">Taqui</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
