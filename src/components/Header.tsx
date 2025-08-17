import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-vibrant-purple to-vibrant-blue bg-clip-text text-transparent">
            CKB
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-vibrant-purple transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-vibrant-purple transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-vibrant-purple transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className="text-muted-foreground hover:text-vibrant-purple transition-colors font-medium"
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-vibrant-purple transition-colors font-medium"
            >
              Contact
            </button>
          </div>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-gradient-to-r from-vibrant-purple to-vibrant-blue hover:opacity-90 transition-opacity"
          >
            Let's Connect
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;