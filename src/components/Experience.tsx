import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Intern - Smart Agriculture Lab",
      company: "GITA University, Bhubaneswar",
      period: "May 2025 - Jan 2025",
      type: "Machine Learning Internship",
      achievements: [
        "Developed and deployed computer vision systems into a distributed processing pipeline for weekly plant diseases, optimizing NLP algorithms to boost text extraction accuracy by 1%",
        "Leveraged various ML models like Naïve Bayes, Decision Tree, and CI CD best practices, productivity with 30% models"
      ],
      color: "pastel-blue"
    },
    {
      title: "Intern - Smart Agriculture Lab", 
      company: "GITA University, Bhubaneswar",
      period: "Jan 2025 - May 2025",
      type: "Predictive Analytics Internship",
      achievements: [
        "Developed a predictive AI backend in Python to forecast plant growth using historical and real-time sensor data",
        "Designed and deployed interactive, real-time data dashboards by applying statistical learning theory, improving by stakeholders",
        "Improved model accuracy to 5%"
      ],
      color: "pastel-purple"
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
                    <div className="md:text-right">
                      <Badge variant="outline">{exp.period}</Badge>
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