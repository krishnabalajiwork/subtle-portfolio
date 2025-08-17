import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              Passionate about leveraging technology to solve real-world problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">B.Tech Computer Science Engineering</p>
                      <p className="text-sm text-muted-foreground">GITA, Bhubaneswar • 2022-2026</p>
                      <Badge variant="outline" className="mt-2">CGPA: 8.81/10</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Professional Summary</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    B.Tech CSE student with strong passion for applying AI and machine learning 
                    to solve real-world problems. Experienced in developing NLP and predictive 
                    modeling applications using Python and TensorFlow. Eager to leverage 
                    quantitative foundation in algorithms and software development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-0 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium">Verizon Cloud Platform Job Simulation</p>
                  <p className="text-sm text-muted-foreground">Jun 2025</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">IBM Generative AI Engineering</p>
                  <p className="text-sm text-muted-foreground">May 2025</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Google Cloud Computing Foundations</p>
                  <p className="text-sm text-muted-foreground">Apr 2025</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">IBM AI Developer</p>
                  <p className="text-sm text-muted-foreground">Feb 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;