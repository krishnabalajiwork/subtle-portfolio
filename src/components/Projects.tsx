import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, MapPin } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-based OCR System",
      type: "Internship Project - Smart Agriculture Lab",
      company: "GITAM University, Bengaluru",
      period: "May 2025 – Jun 2025",
      description: "Developed and integrated an AI-based OCR system into a distributed processing pipeline for weekly agile releases.",
      achievements: [
        "Optimized NLP algorithms to boost text extraction accuracy by 15%",
        "Reduced manual data entry effort by 40%",
        "Leveraged Python, TensorFlow, and CI/CD best practices"
      ],
      tech: ["Python", "TensorFlow", "OCR", "NLP", "CI/CD"],
      githubUrl: "https://github.com/krishnabalajiwork/East-Model",
      gradient: "from-vibrant-purple to-vibrant-blue"
    },
    {
      title: "Predictive AI Backend for Plant Growth",
      type: "Internship Project - Smart Agriculture Lab", 
      company: "GITAM University, Bengaluru",
      period: "Jan 2025 – Mar 2025",
      description: "Developed a predictive AI backend in Python to forecast plant growth using historical and real-time sensor data.",
      achievements: [
        "Designed and deployed interactive, real-time dashboards using Streamlit",
        "Improved model accuracy to 85% through hyperparameter tuning",
        "Enabled continuous monitoring by stakeholders"
      ],
      tech: ["Python", "Streamlit", "Predictive Modeling", "Data Analytics"],
      liveUrl: "https://test-ai-hydroponics.streamlit.app/",
      gradient: "from-vibrant-blue to-vibrant-green"
    },
    {
      title: "YouTube Comment Sentiment Analysis",
      type: "Machine Learning Project",
      company: "Personal Project",
      period: "Sep 2024 – Oct 2024",
      description: "End-to-end sentiment analysis pipeline to classify over 3,000 comments, providing insights into public opinion with 80% accuracy.",
      achievements: [
        "Enhanced model performance with robust text preprocessing workflow",
        "Compared multiple NLP models like Logistic Regression and VADER",
        "Built comprehensive data pipeline for sentiment classification"
      ],
      tech: ["Python", "NLP", "Machine Learning", "VADER", "Data Processing"],
      liveUrl: "https://test-sentiment-analysis-bts.streamlit.app/",
      gradient: "from-vibrant-green to-vibrant-orange"
    },
    {
      title: "Interactive Quiz Application",
      type: "Web Development Project",
      company: "Personal Project", 
      period: "Aug 2024 – Oct 2024",
      description: "Fully responsive and interactive quiz application using React, implementing component-based architecture and state management.",
      achievements: [
        "Implemented component-based architecture for seamless user experience",
        "Integrated real-time, client-side validation with JavaScript",
        "Ensured high performance and accessibility with modern HTML/CSS"
      ],
      tech: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
      liveUrl: "https://d9n6tm.csb.app/",
      gradient: "from-vibrant-orange to-vibrant-pink"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-vibrant-purple/5 via-transparent to-vibrant-blue/5">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-vibrant-purple to-vibrant-blue bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Combining internship experience with personal projects to showcase technical skills and practical implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-vibrant-purple transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-vibrant-purple">{project.type}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {project.company}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.period}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="inline-block w-1.5 h-1.5 bg-vibrant-purple rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex items-center gap-2 border-vibrant-purple/30 text-vibrant-purple hover:bg-vibrant-purple hover:text-white"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className={`flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white hover:opacity-90`}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
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