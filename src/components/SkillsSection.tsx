import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, Award } from "lucide-react";

const skills = {
  languages: ["JavaScript", "Python", "HTML/CSS", "PHP", "MongoDB", "MySQL"],
  frameworks: ["React", "Express.js", "Flask", "Node.js"],
  tools: ["Git", "Docker", "VS Code", "Linux/Ubuntu", "IntelliJ", "Eclipse"],
  certifications: ["Pre Security (TryHackMe)", "Cybersecurity Essentials (CISCO)"],
};

const SkillsSection = () => {
  const skillCategories = [
    { icon: Code2, title: "Languages", items: skills.languages, color: "from-primary to-accent" },
    { icon: Database, title: "Frameworks", items: skills.frameworks, color: "from-accent to-primary" },
    { icon: Wrench, title: "Developer Tools", items: skills.tools, color: "from-primary to-accent" },
    { icon: Award, title: "Certifications", items: skills.certifications, color: "from-accent to-primary" },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">My technical arsenal</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-all duration-300 p-8 glow-effect">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-secondary rounded-full text-foreground border border-primary/30 hover:border-accent transition-all duration-300"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
