import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MERN Stack Chat App",
    description: "Real-time chat application with group messaging, Socket.io integration, JWT authentication, and persistent chat history with MongoDB.",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "JWT"],
    features: ["Real-time messaging", "Online/offline status", "Typing indicators", "Message timestamps"],
    link: "#",
  },
  {
    title: "MERN AI Chatbot",
    description: "AI-powered chatbot using MERN stack integrated with Gemini API for natural language responses with a modern responsive interface.",
    technologies: ["React", "Express.js", "MongoDB", "Gemini AI", "REST API"],
    features: ["Natural language processing", "Real-time responses", "Clean chat interface", "Secure API handling"],
    link: "#",
  },
  {
    title: "Plant Analysis AI",
    description: "AI tool that analyzes plant images using Google Gemini AI to identify species, assess health, and provide care recommendations with PDF reports.",
    technologies: ["React", "Express.js", "Gemini AI", "Multer", "PDF Generation"],
    features: ["Image upload", "Species identification", "Health assessment", "Care recommendations"],
    link: "#",
  },
  {
    title: "Personal AI Workflow Automation",
    description: "Personal AI assistant workflow using n8n to automate chat, email, and calendar management with Google Gemini integration.",
    technologies: ["n8n", "Gemini AI", "Gmail API", "Workflow Automation"],
    features: ["Chat automation", "Email management", "AI-driven replies", "Context memory"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Building the future with AI and Web Technologies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-all duration-300 glow-effect">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/20 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4 pt-4">
                    <Button variant="glow" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
