import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "JavaScript"],
      gradient: "from-vibrant-purple to-vibrant-blue",
      icon: "💻"
    },
    {
      title: "AI/ML & Data Science",
      skills: ["Python (TensorFlow, Scikit-learn)", "NLP", "Predictive Modeling", "Data Preprocessing"],
      gradient: "from-vibrant-blue to-vibrant-green", 
      icon: "🤖"
    },
    {
      title: "Knowledge Areas",
      skills: ["Generative AI", "LLMs", "RAG Concepts", "Prompt Engineering"],
      gradient: "from-vibrant-green to-vibrant-orange",
      icon: "🧠"
    },
    {
      title: "Backend Development",
      skills: ["REST APIs", "Distributed Systems", "Spring (basics)", "PostgreSQL", "MySQL"],
      gradient: "from-vibrant-orange to-vibrant-pink",
      icon: "⚙️"
    },
    {
      title: "Developer Tools",
      skills: ["Git", "CI/CD", "Linux CLI", "Unit Testing"],
      gradient: "from-vibrant-pink to-vibrant-purple",
      icon: "🛠️"
    },
    {
      title: "Soft Skills", 
      skills: ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management", "Intellectual Curiosity"],
      gradient: "from-vibrant-blue to-vibrant-purple",
      icon: "🎯"
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Skills & <span className="bg-gradient-to-r from-vibrant-purple to-vibrant-blue bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technical skill set developed through academic learning, internships, and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-white text-xl`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-vibrant-purple transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs font-medium hover:bg-vibrant-purple/10 hover:text-vibrant-purple transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-vibrant-purple/5 via-vibrant-blue/5 to-vibrant-green/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-vibrant-purple to-vibrant-blue bg-clip-text text-transparent">
                  Eager to leverage a solid foundation in algorithms and software development
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  to contribute to advanced AI systems, with a keen interest in LLMs and generative AI, 
                  supported by recent IBM certifications and hands-on project experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;