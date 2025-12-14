import Image from "next/image"; // Mantido, embora não usado diretamente aqui, é bom tê-lo
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"; // Mantido
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Server, Layout } from "lucide-react"; // Ícones para categorização

// NOVO: Importa o componente TechIcon corrigido
import TechIcon from "@/components/tech-icon"; 

// Definindo tecnologias por categoria para melhor organização visual
const techCategories = [
  {
    name: "Fullstack Core & Frameworks",
    icon: Code,
    color: "bg-primary/10 text-primary",
    techs: [
      { name: "Next.js", file: "next.svg" },
      { name: "React", file: "react-1.svg" },
      { name: "JavaScript", file: "javascript.svg" },
      { name: "TypeScript", file: "typescript.svg" },
      { name: "Node.js", file: "nodejs.png" },
    ],
  },
  {
    name: "Database & Infraestrutura",
    icon: Server,
    color: "bg-green-500/10 text-green-500",
    techs: [
      { name: "Supabase", file: "supabase.svg" },
      { name: "Prisma", file: "prisma.svg" }, 
      { name: "PostgreSQL", file: "postgres.svg" }, 
    ],
  },
  {
    name: "Design & Estilização",
    icon: Layout,
    color: "bg-yellow-500/10 text-yellow-500",
    techs: [
      { name: "Tailwind CSS", file: "tw.svg" },
      { name: "HTML", file: "html.png" },
      { name: "CSS", file: "css-3.svg" },
      { name: "Shadcn", file: "shadcn.svg" },
      { name: "Canva", file: "canva.png" },
    ],
  },
];


export default function Technologies() {
  return (
    <section id="technologies" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">
       <span className="text-primary">|</span> Minha <span className="text-primary">Stack</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techCategories.map((category) => (
          <Card 
              key={category.name} 
              className="flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
            <CardHeader className="p-4 sm:p-6 pb-2">
              <div className="flex items-center gap-3">
                <category.icon className={`h-6 w-6 ${category.color.split(' ')[1]}`} />
                <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
              </div>
            </CardHeader>
            <Separator className="mx-6 w-auto" />
            <CardContent className="p-4 sm:p-6 pt-6">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
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