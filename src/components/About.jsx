import { Zap, Database, TrendingUp, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Pontos principais que queremos que o recrutador veja de forma rápida
const highlights = [
  {
    icon: Database,
    title: "Backend Java & Spring Boot",
    description: "Especializado em APIs REST com Spring Boot 3, Spring Security (JWT stateless), JPA/Hibernate, PostgreSQL e versionamento de banco com Flyway.",
    color: "text-green-500"
  },
  {
    icon: TrendingUp,
    title: "Arquitetura & Boas Práticas",
    description: "Experiência em arquitetura em camadas, princípios SOLID, mapeamento com MapStruct, exceptions customizadas e documentação com Swagger/OpenAPI.",
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "Projetos em Produção",
    description: "Sistema de Controle de Estoque B2B e Plataforma SaaS de Agendamento Multi-tenant em produção, validando a capacidade de entrega de software real.",
    color: "text-primary"
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">
        <span className="text-primary">|</span> Sobre Mim
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna 1: Destaques Técnicos (Cards) */}
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

        {/* Coluna 2/3: Descrição Narrativa (Card Principal) */}
        <Card className="lg:col-span-2 p-6 bg-card hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Minha Jornada como <span className="text-primary">Desenvolvedor Backend</span>
            </CardTitle>
            <Separator className="mt-2 mb-4" />
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Sou Desenvolvedor Backend Júnior com foco em Java e Spring Boot, construindo APIs REST
              seguras, escaláveis e bem documentadas. Minha stack principal envolve Spring Security
              com JWT stateless, JPA/Hibernate, PostgreSQL e Flyway para versionamento de banco —
              com deploy automatizado via Railway.
            </p>
            <p>
              Antes de migrar para o ecossistema Java, atuei como Desenvolvedor Fullstack no
              ecossistema JavaScript — com Next.js, TypeScript, React e PostgreSQL via Prisma —
              chegando a colocar uma Plataforma SaaS Multi-tenant em produção com usuários ativos.
              Esse histórico me dá uma visão completa do ciclo de uma aplicação, do banco de dados
              até a interface.
            </p>
            <p>
              Busco minha primeira oportunidade como Desenvolvedor Backend Java, onde possa
              contribuir com times que valorizam código limpo, boas práticas e aprendizado contínuo.
              Pronto para enfrentar qualquer desafio técnico!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}