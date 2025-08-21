import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Verizon Cloud Platform Job Simulation",
      issuer: "Forage",
      date: "Jun 2025",
      description: "Hands-on simulation experience with cloud platform technologies and industry best practices.",
      certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/uu47f3odrfruEWjKw/aNJGnRtgfiK5fQqcR_uu47f3odrfruEWjKw_7ZqkrDnQqphjEDhxm_1750603719770_completion_certificate.pdf",
      gradient: "from-vibrant-purple to-vibrant-blue",
      icon: "☁️"
    },
    {
      title: "IBM Generative AI Engineering",
      issuer: "IBM via Coursera",
      date: "May 2025",
      description: "Comprehensive specialization covering generative AI technologies, LLMs, and practical applications.",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/KJQJNHVH64SS",
      gradient: "from-vibrant-blue to-vibrant-green",
      icon: "🤖"
    },
    {
      title: "Google Cloud Computing Foundations",
      issuer: "Google",
      date: "Apr 2025",
      description: "Foundational knowledge in cloud computing concepts, services, and Google Cloud Platform technologies.",
      certificateUrl: "https://www.credly.com/badges/e97410b8-922b-45dd-99e4-40f138735227/linked_in_profile",
      gradient: "from-vibrant-green to-vibrant-orange",
      icon: "🎯"
    },
    {
      title: "IBM AI Developer",
      issuer: "IBM via Coursera",
      date: "Feb 2025",
      description: "Specialized program focusing on AI development, machine learning implementation, and practical AI solutions.",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/SK2WOO54BUDT",
      gradient: "from-vibrant-orange to-vibrant-pink",
      icon: "🚀"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-br from-vibrant-purple/5 via-transparent to-vibrant-blue/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="bg-gradient-to-r from-vibrant-purple to-vibrant-blue bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and skill development through industry-recognized certification programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className={`w-12 h-12 bg-gradient-to-r ${cert.gradient} rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0`}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1 group-hover:text-vibrant-purple transition-colors leading-tight">
                          {cert.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="flex items-center gap-1 border-vibrant-purple/30 text-vibrant-purple ml-2 flex-shrink-0"
                    >
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                   <Button 
                     className={`w-full bg-gradient-to-r ${cert.gradient} text-white hover:opacity-90 transition-opacity`}
                     asChild
                   >
                     <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                       <Award className="w-4 h-4 mr-2" />
                       View Certificate
                       <ExternalLink className="w-4 h-4 ml-2" />
                     </a>
                   </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-vibrant-green/10 to-vibrant-blue/10">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-vibrant-green to-vibrant-blue rounded-2xl flex items-center justify-center text-white text-2xl">
                    🎓
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Commitment to Learning</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  These certifications demonstrate my commitment to staying current with industry trends 
                  and continuously expanding my knowledge in AI, cloud computing, and software development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;