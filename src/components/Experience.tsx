import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Intern – Smart Agriculture Lab",
      company: "GITAM University, Bengaluru",
      period: "May 2025 – Jun 2025",
      type: "AI/OCR Systems Development",
      achievements: [
        "Integrated AI-based OCR systems into a distributed processing pipeline for weekly agile releases",
        "Improved text extraction accuracy by 15 percent and reduced manual effort by 40 percent through algorithm optimization",
        "Used Python, TensorFlow, Git, and continuous integration to deliver reliable features"
      ],
      color: "pastel-blue",
      liveUrl: "https://test-ocr-east.streamlit.app/"
    },
    {
      title: "Intern – Smart Agriculture Lab", 
      company: "GITAM University, Bengaluru",
      period: "Jan 2025 – Mar 2025",
      type: "Plant Growth Prediction",
      achievements: [
        "Built backend plant-growth prediction system in Python",
        "Deployed real-time dashboards using Streamlit as frontend which gives for 24x7 access",
        "Raised AI accuracy to 85 percent using optimized algorithms"
      ],
      color: "pastel-purple",
      liveUrl: "https://test-ai-hydroponics.streamlit.app/"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground">
              Building expertise in AI/ML and software development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-sm relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${exp.color}`}></div>
                <CardContent className="p-8 pl-12">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {exp.type}
                        </Badge>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:text-right space-y-2">
                      <Badge variant="outline">{exp.period}</Badge>
                      {exp.liveUrl && (
                        <div>
                          <a 
                            href={exp.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Live Demo →
                          </a>
                        </div>
                      )}
                    </div>
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

export default Experience;