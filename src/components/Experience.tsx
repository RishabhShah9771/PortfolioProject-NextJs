import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer ",
    company: "HCL Technologies.",
    period: "2022 - Present",
    description:
      "Developed and optimized high-performance React and TypeScript applications for a global finance client. Integrated RESTful and GraphQL APIs, modernized legacy systems with Redux and Context API, and built reusable UI components to enhance maintainability and user experience.",
  },
  {
    role: "Web Developer",
    company: "M & T Printing Group Ltd.",
    period: "2021 - 2022",
    description:
      "Developed and optimized full-stack web applications using React and Spring Boot, designing responsive interfaces with Redux and RESTful APIs. Improved performance by 30% through code optimization and lazy loading, implemented CI/CD pipelines with Jenkins, and managed scalable MySQL databases for efficient data handling.",
  },
  {
    role: "Software Developer ",
    company: "Webmyne Systems Pvt. Ltd.",
    period: "2020 - 2021",
    description:
      "Developed and delivered custom web applications using React, TypeScript, and Node.js, integrating RESTful APIs and optimizing performance for responsive, scalable solutions.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Work Experience
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A timeline of my professional journey and key accomplishments in the
            tech industry.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-1/2 -translate-x-1/2 mt-1.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary ring-8 ring-background">
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </span>
              </div>
              <Card
                className={`w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "ml-auto mr-8" : "mr-auto ml-8"
                }`}
              >
                <CardHeader>
                  <CardTitle>{exp.role}</CardTitle>
                  <CardDescription className="flex justify-between">
                    <span>{exp.company}</span>
                    <span>{exp.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
