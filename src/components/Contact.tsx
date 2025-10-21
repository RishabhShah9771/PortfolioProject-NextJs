import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-primary text-primary-foreground py-20 md:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            I'm always excited to explore new opportunities and collaborations.
            If you'd like to discuss a project or simply connect, don't hesitate
            to get in touch.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 mb-12"
          >
            <a href="mailto:rishabh.shah3197@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Say Hello
            </a>
          </Button>
        </div>
        <div className="flex justify-center items-center gap-6 mb-8">
          <Link href="mailto:rishabh.shah3197@gmail.com" aria-label="Email">
            <Mail className="h-7 w-7 text-primary-foreground/80 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rishabh-shah-9bb242aa"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-7 w-7 text-primary-foreground/80 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://github.com/RishabhShah9771"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-7 w-7 text-primary-foreground/80 hover:text-white transition-colors" />
          </Link>
          <a
            href="/Files/Shah_Rishabh_Developer_Resume.pdf"
            download
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors"
            aria-label="Download Resume"
          >
            <Download className="h-7 w-7" />
            <span className="sr-only">Download Resume</span>
          </a>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Rishabh Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
