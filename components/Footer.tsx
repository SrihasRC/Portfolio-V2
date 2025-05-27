import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiMaildotcom } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-sm text-foreground/60">
              © 2025 Srihas Reddy Challa. All rights reserved.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
                <Link href="/about" className='text-sm text-foreground/60 hover:text-foreground'>About</Link>
                <Link href="/projects" className='text-sm text-foreground/60 hover:text-foreground'>Projects</Link>
                <Link href="/contact" className='text-sm text-foreground/60 hover:text-foreground'>Contact</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-5">
                <a href="https://github.com/SrihasRC" target="_blank" rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground'><SiGithub className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/srihaschalla/" target="_blank" rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground'><SiLinkedin className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/srihasreddyy/" target="_blank" rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground'><SiInstagram className="w-5 h-5" /></a>
                <a href="mailto:challasrihasreddy@gmail.com" target="_blank" rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground'><Mail className="w-5.5 h-5.5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
