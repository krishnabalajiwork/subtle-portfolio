import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-vibrant-purple to-vibrant-blue bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              B.Tech CSE student with a strong passion for applying AI and machine learning to solve real-world problems. 
              Experienced in developing NLP and predictive modeling applications using Python and TensorFlow through 
              internships and personal projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-vibrant-purple/5 to-transparent">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-vibrant-purple to-vibrant-blue rounded-xl flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">B.Tech Computer Science Engineering</h4>
                    <p className="text-muted-foreground flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      GITAM Deemed to be University, Bengaluru
                    </p>
                    <p className="text-muted-foreground flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      2022 - 2026
                    </p>
                    <Badge className="mt-3 bg-vibrant-green/10 text-vibrant-green border-vibrant-green/20">
                      CGPA: 8.81/10.0
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-vibrant-blue/5 to-transparent">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-vibrant-blue to-vibrant-green rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Location & Contact</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground mb-2">📍 Bengaluru, Karnataka, India</p>
                    <p className="text-muted-foreground mb-2">📧 krishnabalajiwork@gmail.com</p>
                    <p className="text-muted-foreground mb-2">📱 +91-7893579430</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-vibrant-orange/5 to-vibrant-pink/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Relevant Coursework</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Data Structures & Algorithms",
                  "Operating Systems", 
                  "Database Management Systems",
                  "Software Design Patterns",
                  "Computer Networks",
                  "Machine Learning Fundamentals"
                ].map((course, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="justify-center py-2 border-vibrant-purple/30 text-vibrant-purple hover:bg-vibrant-purple/10"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;