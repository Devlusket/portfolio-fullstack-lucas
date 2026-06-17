import { Zap, Database, TrendingUp, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const highlights = [
  {
    icon: Database,
    title: "Backend Java & Spring Boot",
    description: "APIs REST com Spring Boot 3, Spring Security (JWT stateless), JPA/Hibernate, PostgreSQL e Flyway. Já entregue em produção para cliente real.",
    color: "text-green-500"
  },
  {
    icon: TrendingUp,
    title: "Arquitetura & Boas Práticas",
    description: "Arquitetura em camadas, princípios SOLID, MapStruct e Swagger/OpenAPI. Ambiente local com Docker Compose e deploy automatizado via Render e Vercel.",
    color: "text-blue-500"
  },
  {
    icon: Code,
    title: "Frontend & Interfaces",
    description: "Interfaces com Angular 21 (Signals, standalone components, PWA) e Next.js com Tailwind CSS e Shadcn/ui consumindo APIs REST próprias ou de terceiros.",
    color: "text-primary"
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
          | Sobre Mim
        </h2>
        <p className="text-muted-foreground text-lg">
          Um pouco de quem está por trás do código.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cards de destaque */}
        <div className="lg:col-span-1 space-y-4">
          {highlights.map((item) => (
            <Card key={item.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <item.icon className={`h-6 w-6 ${item.color}`} />
                <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Narrativa */}
        <Card className="lg:col-span-2 p-6 bg-card hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Minha Jornada como{" "}
              <span className="text-primary">Desenvolvedor Fullstack</span>
            </CardTitle>
            <Separator className="mt-2 mb-4" />
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Trabalho como freelancer desde 2025 desenvolvendo sistemas fullstack para clientes
              reais do backend em Java e Spring Boot até o frontend em Angular e Next.js. Já
              entreguei um sistema de gestão de frota para uma câmara municipal e duas landing
              pages, todos em produção e em uso pelos clientes.
            </p>
            <p>
              Minha stack principal é Spring Boot 3 no backend com Spring Security, JWT
              stateless, JPA/Hibernate, PostgreSQL e Flyway e Angular no frontend. Antes de
              migrar para Java, trabalhei com Next.js e TypeScript, o que me dá visão do ciclo
              completo de uma aplicação, do banco até a interface.
            </p>
            <p>
              Estou cursando Análise e Desenvolvimento de Sistemas e busco uma oportunidade como
              desenvolvedor júnior onde possa contribuir com código limpo e continuar evoluindo
              dentro de um time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}