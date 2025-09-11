import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProfileImage from "../../public/RishabhProfilePicture.jpg";

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in duration-1000">
            <div className="space-y-2">
              <span className="text-accent font-semibold text-lg">
                Rishabh Shah, Full-Stack Developer
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
                Building Engaging Experiences
              </h1>
            </div>
            <p className="text-lg text-foreground/80 max-w-xl">
              I build modern, responsive, and user-friendly web applications
              using cutting-edge technologies, transforming ideas into engaging
              digital experiences—let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <Image
              src={ProfileImage}
              alt="Rishabh shah"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-2xl aspect-square"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
