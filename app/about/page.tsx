import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
  "C & C++"
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>The Journey of a Young Boy Who Dreams of Success</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Every successful journey begins with a dream, and mine started with the desire to build a better future. I am a young boy who believes that success is not simply about reaching the top, but about becoming a better person along the way. I want to build not only myself, but also become someone who can make a positive difference in the lives of others.
            I consider myself an organized, hardworking, and adaptable person. I believe that having a clear direction and staying committed to my responsibilities are important steps toward achieving my goals. I do not chase perfection; instead, I focus on execution, progress, and learning from every experience. For me, every challenge is an opportunity to improve, and every mistake is a lesson that helps me grow.
          </p>
          <p>
            I understand that life will not always be easy. There will be obstacles, unexpected changes, and moments when things do not go according to plan. However, I am willing to learn, adapt, and keep moving forward. I value teamwork and believe that true growth is not only about improving myself, but also about understanding others, supporting them, and working together toward a common goal.
            As I continue my journey, I remain eager to gain knowledge, develop my skills, and explore new opportunities. I know that success requires patience, dedication, and determination. I may not have everything figured out today, but I am committed to taking the necessary steps toward the future I envision.
            My dream is to become a successful individual who is not only proud of his achievements, but also remembered for his hard work, reliability, and willingness to help others. I believe that with discipline, continuous learning, and the courage to adapt, I can turn my dreams into reality.
            I am not just building a future for myself; I am building a version of myself that can inspire, support, and create meaningful impact on others.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}