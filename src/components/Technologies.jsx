import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Server, Layout } from "lucide-react";
import TechIcon from "@/components/tech-icon";

const techCategories = [
  {
    name: "Backend",
    icon: Code,
    color: "text-yellow-500",
    techs: [
      { name: "Java", file: "java.svg" },
      { name: "Spring Boot", file: "spring-boot.svg" },
      { name: "Node.js", file: "nodejs.png" },
    ],
  },
  {
    name: "Frontend & Frameworks",
    icon: Layout,
    color: "text-primary",
    techs: [
      { name: "Angular", file: "angular.png" },
      { name: "Next.js", file: "next.svg" },
      { name: "TypeScript", file: "typescript.svg" },
    ],
  },
  {
    name: "Banco de Dados & Infra",
    icon: Server,
    color: "text-green-500",
    techs: [
      { name: "PostgreSQL", file: "postgres.svg" },
      { name: "Docker", file: "Docker.svg" },
      { name: "Git", file: "git.svg" },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
          | Minha Stack
        </h2>
        <p className="text-muted-foreground text-lg">
          As ferramentas que uso nos projetos do dia a dia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techCategories.map((category) => (
          <Card
            key={category.name}
            className="flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="p-4 sm:p-6 pb-2">
              <div className="flex items-center gap-3">
                <category.icon className={`h-6 w-6 ${category.color}`} />
                <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
              </div>
            </CardHeader>
            <Separator className="mx-6 w-auto" />
            <CardContent className="p-4 sm:p-6 pt-6">
              <div className="grid grid-cols-4 gap-4 place-items-center">
                {category.techs.map((tech) => (
                  <TechIcon key={tech.name} {...tech} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}