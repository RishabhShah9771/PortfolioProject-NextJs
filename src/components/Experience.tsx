import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import experiences from "./data/Experiences";

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
