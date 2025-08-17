import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "YouTube Comment Sentiment Analysis",
      description: "Machine Learning Project featuring end-to-end sentiment analysis pipeline to classify over 3,000 comments, providing insights into public opinion with 80% accuracy.",
      tech: ["Python", "NLP", "Machine Learning", "Sentiment Analysis"],
      period: "Sep 2024 - Oct 2024",
      color: "pastel-blue",
      achievements: [
        "Enhanced model accuracy by implementing robust text preprocessing workflow",
        "Built interactive dashboard for real-time sentiment tracking",
        "Processed and classified over 3,000 YouTube comments"
      ]
    },
    {
      title: "Quiz Application - Frontend Project",
      description: "Web Development project featuring a fully responsive and interactive quiz application using React, implementing component-based architecture.",
      tech: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
      period: "Aug 2024 - Oct 2024",
      color: "pastel-purple",
      achievements: [
        "Developed responsive and interactive quiz application",
        "Integrated real-time, client-side validation with JavaScript to improve usability",
        "Enhanced performance and accessibility with modern HTML/CSS"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing my technical skills through practical implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-${project.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;