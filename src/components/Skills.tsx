import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "JavaScript", "HTML", "CSS"],
      color: "pastel-blue"
    },
    {
      title: "AI/ML & Data Science",
      skills: ["TensorFlow", "Scikit-learn", "NLP", "Predictive Modeling", "Data Preprocessing", "Computer Vision"],
      color: "pastel-purple"
    },
    {
      title: "Web Development",
      skills: ["React", "Component Architecture", "Responsive Design", "Frontend Development"],
      color: "pastel-green"
    },
    {
      title: "Backend & Tools",
      skills: ["REST APIs", "Distributed Systems", "Spring", "Git", "CI/CD", "Linux CLI", "Unit Testing"],
      color: "pastel-pink"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management", "Intellectual Curiosity"],
      color: "pastel-blue"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground">
              Technical expertise across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-${category.color}`}></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs font-medium hover:bg-accent transition-colors duration-200"
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
            <Card className="border-0 shadow-sm bg-accent/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Currently exploring advanced machine learning techniques, cloud computing platforms, 
                  and modern web development frameworks. I believe in continuous learning and staying 
                  updated with the latest technology trends.
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