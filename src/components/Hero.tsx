import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibrant-purple/5 via-transparent to-vibrant-blue/5"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-vibrant-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-vibrant-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="w-fit bg-vibrant-green/10 text-vibrant-green border-vibrant-green/20 hover:bg-vibrant-green/20">
                ✨ Available for opportunities
              </Badge>
              <div>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-4">
                  <span className="bg-gradient-to-r from-vibrant-purple via-vibrant-blue to-vibrant-green bg-clip-text text-transparent">
                    Chintha Krishna
                  </span>
                  <br />
                  <span className="text-foreground">Balaji</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  B.Tech CSE student passionate about AI/ML and software development. 
                  Experienced in NLP applications, predictive modeling, and building production-ready systems.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('projects')} 
                size="lg"
                className="bg-gradient-to-r from-vibrant-purple to-vibrant-blue hover:opacity-90 transition-opacity text-white"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-vibrant-purple text-vibrant-purple hover:bg-vibrant-purple hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/krishnabalajiwork" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-vibrant-purple/10 hover:bg-vibrant-purple hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 text-vibrant-purple"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/chintha-krishna-balaji" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-vibrant-blue/10 hover:bg-vibrant-blue hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 text-vibrant-blue"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-vibrant-purple/30 text-vibrant-purple">Python</Badge>
              <Badge variant="outline" className="border-vibrant-blue/30 text-vibrant-blue">AI/ML</Badge>
              <Badge variant="outline" className="border-vibrant-green/30 text-vibrant-green">TensorFlow</Badge>
              <Badge variant="outline" className="border-vibrant-orange/30 text-vibrant-orange">React</Badge>
              <Badge variant="outline" className="border-vibrant-pink/30 text-vibrant-pink">NLP</Badge>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative">
                <img 
                  src={profilePhoto} 
                  alt="Chintha Krishna Balaji"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vibrant-purple/20 via-transparent to-transparent"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-vibrant-purple to-vibrant-blue rounded-2xl opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-vibrant-green to-vibrant-orange rounded-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;