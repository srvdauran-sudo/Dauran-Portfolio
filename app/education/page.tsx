import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    degree: "Bachelor of Science in Information Systems",
    institution: "Naga College Foundation Inc.",
    period: "2025 - 2029",
    description: "Focused on software engineering, data structures, algorithms, and web development.",
    achievements: ["Dean's List (All Semesters)", "Capstone Project Lead"],
  },
  {
    degree: "Senior High School Education",
    institution: "Naga College Foundation Inc.",
    period: "2024 - 2025",
    description: "Consistent Honor Student, Sports Player, TVL-ICT Strand Graduate, NCF-ROBOTICS Player and Instructor.",
    achievements: ["Built 4 SDG Competition Researches with Project Sketch Models, With High and With Honors Awards, Outstanding Performance in OJT Certificate, Excellence In Robotics Award, National Assessment Passer (NCII) Award, Member Legion of Discipline Award."],
  },
  {
    degree: "Junior High School Education",
    institution: "Naga College Foundation Inc.",
    period: "2022 - 2023",
    description: "Consistent Honor Student and Sports Player.",
    achievements: ["With High and With Honors Awards", "Mr. Dependable Award"],
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">
          Academic background and formal training.
        </p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                    <CardDescription>{item.institution}</CardDescription>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {item.period}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                  <Award className="h-4 w-4 text-primary" /> Key Highlights
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}