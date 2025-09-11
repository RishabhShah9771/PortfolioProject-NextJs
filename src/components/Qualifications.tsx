import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import qualifications from "./data/Qualifications";

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Qualifications
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {qualifications.map((qual, index) => (
            <Card
              key={index}
              className="animate-in fade-in slide-in-from-bottom-10"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "backwards",
              }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-accent/10 rounded-full p-3">{qual.icon}</div>
                <CardTitle className="text-2xl">{qual.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pl-16">
                <ul className="space-y-4">
                  {qual.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.institution}, {item.year}
                      </p>
                    </li>
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
