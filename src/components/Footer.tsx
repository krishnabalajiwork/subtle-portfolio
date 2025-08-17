import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Chintha Krishna Balaji</h3>
            <p className="text-primary-foreground/80">Computer Science Engineering Student</p>
            <p className="text-primary-foreground/60 text-sm">Building the future with AI & Technology</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:krishnabalaji@gmail.com" 
              className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/chintha-krishna-balaji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Chintha Krishna Balaji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;