import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishnabalajiwork@gmail.com",
      href: "mailto:krishnabalajiwork@gmail.com",
      color: "vibrant-purple"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7893579430",
      href: "tel:+917893579430",
      color: "vibrant-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "chintha-krishna-balaji",
      href: "https://www.linkedin.com/in/chintha-krishna-balaji",
      color: "vibrant-green"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "krishnabalajiwork",
      href: "https://github.com/krishnabalajiwork",
      color: "vibrant-orange"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-vibrant-purple to-vibrant-blue bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss opportunities, collaborate on projects, or just have a conversation about technology and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="group">
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-transparent hover:to-secondary/30 transition-all duration-300"
                        >
                          <div className={`w-12 h-12 bg-${contact.color}/10 rounded-xl flex items-center justify-center group-hover:bg-${contact.color} group-hover:text-white transition-all duration-300 text-${contact.color}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium">{contact.label}</p>
                            <p className={`text-muted-foreground group-hover:text-${contact.color} transition-colors`}>
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-vibrant-purple/5 to-vibrant-blue/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-vibrant-green to-vibrant-blue rounded-xl flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold">Current Location</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">📍 Bengaluru, Karnataka, India</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold mb-3">Available For:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Full-time opportunities",
                        "Internship positions", 
                        "Freelance projects",
                        "Tech collaborations"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-vibrant-green rounded-full mr-2"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2 text-vibrant-purple" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="border-2 focus:border-vibrant-purple" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="border-2 focus:border-vibrant-purple" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" className="border-2 focus:border-vibrant-purple" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className="min-h-[120px] border-2 focus:border-vibrant-purple"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-vibrant-purple to-vibrant-blue hover:opacity-90 transition-opacity text-white" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;