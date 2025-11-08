import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SUMATHI M</h3>
            <p className="text-primary-foreground/80">
              Assistant Professor dedicated to advancing knowledge through research and inspiring the next generation of scholars.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/Experience" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/Projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/Skills" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:msumathi02@gmail.com"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
