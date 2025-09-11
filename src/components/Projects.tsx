import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import projects from "./data/Projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Projects
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each showcases my
            passion for creating high-quality, performant, and beautiful web
            experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-10"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "backwards",
              }}
            >
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[3/2]"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-1">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    <Github className="h-4 w-4" /> View Code
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
