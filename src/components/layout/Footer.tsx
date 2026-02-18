import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Parent App", path: "/features" },
    { name: "Teacher App", path: "/features" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  Support: [
    { name: "Help Center", path: "/contact" },
    { name: "Documentation", path: "/blog" },
    { name: "Privacy Policy", path: "/" },
    { name: "Terms of Service", path: "/" },
  ],
};

const socialIcons = [Facebook, Twitter, Linkedin, Instagram];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="font-bold text-sm text-primary-foreground">SY</span>
              </div>
              <span className="text-xl font-bold">SchoolYantra</span>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6 max-w-sm">
              Transforming school management with an all-in-one ERP platform.
              Empowering administrators, teachers, and parents.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold mb-1">Stay updated</h4>
              <p className="text-sm text-primary-foreground/50">
                Get the latest updates on school management trends.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 md:w-64"
              />
              <Button className="bg-gradient-primary hover:opacity-90">
                <Mail className="h-4 w-4 mr-1" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} SchoolYantra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
