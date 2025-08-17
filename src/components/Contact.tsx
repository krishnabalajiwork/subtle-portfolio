import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishnabalaji@gmail.com",
      href: "mailto:krishnabalaji@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7585575430",
      href: "tel:+917585575430"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "chintha-krishna-balaji",
      href: "https://linkedin.com/in/chintha-krishna-balaji"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhubaneswar, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          {contact.href !== "#" ? (
                            <a 
                              href={contact.href}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Available For</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pastel-green rounded-full mr-3"></span>
                      Full-time opportunities
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pastel-blue rounded-full mr-3"></span>
                      Internship positions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pastel-purple rounded-full mr-3"></span>
                      Freelance projects
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pastel-pink rounded-full mr-3"></span>
                      Collaboration opportunities
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full" size="lg">
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