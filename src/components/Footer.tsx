import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-vibrant-purple via-vibrant-blue to-vibrant-green text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Chintha Krishna Balaji</h3>
            <p className="text-white/90">B.Tech Computer Science Engineering Student</p>
            <p className="text-white/70 text-sm">Building the future with AI & Technology • GITAM University, Bengaluru</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:krishnabalajiwork@gmail.com" 
              className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/chintha-krishna-balaji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/krishnabalajiwork" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> and lots of ☕ • © 2024 Chintha Krishna Balaji
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;