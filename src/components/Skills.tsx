import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import skills from "./data/Skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Technical Skills
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            I have experience with a wide range of technologies in the web
            development ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <Card
              key={index}
              className="text-center animate-in fade-in slide-in-from-bottom-10"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              <CardHeader>
                <div className="mx-auto bg-accent/10 rounded-full h-16 w-16 flex items-center justify-center">
                  {skillCategory.icon}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="text-xl">
                  {skillCategory.category}
                </CardTitle>
                <ul className="space-y-2 text-foreground/80">
                  {skillCategory.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
