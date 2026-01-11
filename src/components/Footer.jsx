import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-red-600 via-red-800 to-amber-500 text-white overflow-hidden">
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-red-600 to-amber-300 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-amber-100 text-xl font-semibold mb-5">
              About Us
            </h3>
            <p className="text-white/85 leading-relaxed mb-4">
                Techstacy 2.0: Kung Fu Panda Edition is a dynamic hackathon 
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-11 h-11 bg-white/10 border-2 border-amber-400/30 rounded-full flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-100 text-xl font-semibold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "Timeline",
                "Tracks",
                "Prizes",
                "About",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/90 hover:text-amber-300 hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-amber-100 text-xl font-semibold mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Core Team",
                "Management",
                "Help Desk",
                "Venue",
                "Details",
                "Support",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/90 hover:text-amber-300 hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
