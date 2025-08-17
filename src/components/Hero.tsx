import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Available for opportunities
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Chintha Krishna{" "}
                <span className="bg-gradient-to-r from-pastel-blue to-pastel-purple bg-clip-text text-transparent">
                  Balaji
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Computer Science Engineering student passionate about AI/ML and software development.
                Experienced in developing NLP applications and predictive modeling solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('projects')} size="lg">
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">AI/ML</Badge>
              <Badge variant="outline">NLP</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Java</Badge>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-xl">
                <img 
                  src={profilePhoto} 
                  alt="Chintha Krishna Balaji"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pastel-blue rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pastel-purple rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;