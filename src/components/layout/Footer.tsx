import { Mail, Linkedin, Twitter, Instagram, BookOpen } from 'lucide-react';
import crcLogo from '@/assets/logo.png';
const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:crescentreadersclub@gmail.com',
    label: 'Send us an email'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/crescent-readers-club',
    label: 'Follow us on LinkedIn'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/crescentreadersclub',
    label: 'Follow us on Instagram'
  }
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Section */}
          <div className="flex items-center gap-3">
            <img 
                src={crcLogo} 
                alt="Crescent Readers Club Logo" 
                className="h-20 w-20 object-contain transition-smooth group-hover:scale-110" 
              />
            <div>
              <h3 className="font-bold text-lg text-foreground">Crescent Readers Club</h3>
              <p className="text-sm text-muted-foreground">Cultivating minds through literature</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">Connect with us:</span>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-label={link.label}
                    className="p-2 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-smooth hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Crescent Readers Club. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}