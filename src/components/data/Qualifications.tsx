import { Award, GraduationCap } from "lucide-react";
const qualifications = [
  {
    category: "Education",
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    items: [
      {
        title: "Post Graduation in Web Design and Development",
        institution: "Conestoga College",
        year: "2020",
      },
      {
        title: "B.E. in Information Technology",
        institution: "Gujarat Technological University",
        year: "2018",
      },
      {
        title: "Diploma in Information Technology",
        institution: "Gujarat Technological University",
        year: "2015",
      },
    ],
  },
  {
    category: "Certifications",
    icon: <Award className="h-8 w-8 text-accent" />,
    items: [
      {
        title: "Certified Next.js Developer",
        institution: "Vercel",
        year: "2025",
      },
      {
        title: "React Certification",
        institution: "Udemy Courses",
        year: "2025",
      },
      {
        title: "Javascript Certification",
        institution: "Udemy Courses",
        year: "2024",
      },
      {
        title: "Front-End Developement Certification",
        institution: "Meta via Coursera",
        year: "2024",
      },
    ],
  },
];
export default qualifications;
