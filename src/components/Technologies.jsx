import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Server, Layout } from "lucide-react"; // Ícones para categorização

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
      { name: "Vite", file: "vite.svg" },
      { name: "Vue.js", file: "vue-js.svg" }, // Manter se você ainda o utiliza
      { name: "Angular", file: "angular.png" }, // Manter se você ainda o utiliza
    ],
  },
  {
    name: "Database & Infraestrutura",
    icon: Server,
    color: "bg-green-500/10 text-green-500",
    techs: [
      { name: "Supabase", file: "supabase.svg" },
      // Adicione aqui o ícone do Prisma e PostgreSQL se você o tiver
      // { name: "Prisma", file: "prisma.svg" }, 
      // { name: "PostgreSQL", file: "postgres.svg" }, 
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
      { name: "Figma", file: "figma.png" },
      { name: "Canva", file: "canva.png" },
    ],
  },
];

const TechIcon = ({ name, file }) => (
  <div className="flex flex-col items-center justify-center p-3 transition-transform hover:scale-110 duration-300">
    <Image
      src={`/icons/${file}`}
      alt={name}
      width={50}
      height={50}
      className="object-contain mb-2"
      // Se necessário, adicione um filtro para ícones que precisam ser visíveis no modo escuro
      // style={{ filter: name === 'Next.js' ? 'invert(1)' : 'none' }} 
    />
    {/* Usando Badge para o nome da tecnologia */}
    <Badge variant="secondary" className="text-xs mt-1 bg-accent/50 text-accent-foreground">
      {name}
    </Badge>
  </div>
);

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">
        Minha <span className="text-primary">Stack</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techCategories.map((category) => (
          <Card key={category.name} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
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