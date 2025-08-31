import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, MapPin } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FarmAI Knowledge Assistant",
      type: "Generative AI + Retrieval-Augmented Generation(RAG) Project",
      company: "Personal Project",
      period: "Aug 2025 – Sep 2025",
      description: "Built an AI-powered agricultural assistant using Streamlit, LangChain, FAISS, and Google Gemini for RAG.",
      achievements: [
        "Built an AI-powered agricultural assistant using Streamlit, LangChain, FAISS, and Google Gemini for RAG",
        "Designed a conversational chat UI with a knowledge base on crop management and disease control",
        "Enabling accurate and context-aware Q&A for agricultural queries"
      ],
      tech: ["Streamlit", "LangChain", "FAISS", "Google Gemini", "RAG", "AI"],
      liveUrl: "https://farmai-assistant.streamlit.app/",
      gradient: "from-vibrant-purple to-vibrant-blue"
    },
    {
      title: "YouTube Comment Sentiment Analysis",
      type: "Machine Learning Project",
      company: "Personal Project",
      period: "Sep 2024 – Oct 2024", 
      description: "Built a scalable sentiment classification service for 3,000+ comments using Logistic Regression and VADER.",
      achievements: [
        "Built a scalable sentiment classification service for 3,000+ comments using Logistic Regression and VADER",
        "Achieved 80 percent accuracy with algorithmic optimizations for NLP processing",
        "Implemented robust text preprocessing workflow for better model performance"
      ],
      tech: ["Python", "Logistic Regression", "VADER", "NLP", "Machine Learning"],
      liveUrl: "https://test-sentiment-analysis-bts.streamlit.app/",
      gradient: "from-vibrant-blue to-vibrant-green"
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
                     {project.liveUrl && (
                       <a 
                         href={project.liveUrl} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         onClick={(e) => {
                           console.log('Live demo link clicked:', project.liveUrl);
                           // Let the link proceed naturally
                         }}
                         className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 rounded-md transition-opacity`}
                       >
                         <ExternalLink className="w-4 h-4" />
                         Live Demo
                       </a>
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