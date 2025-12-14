import { Zap, Database, TrendingUp, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Pontos principais que queremos que o recrutador veja de forma rápida
const highlights = [
  { 
    icon: Database, 
    title: "Segurança Multi-tenant (RLS)", 
    description: "Expertise em Row-Level Security (RLS) no PostgreSQL/Supabase para garantir isolamento e segurança de dados em aplicações SaaS.", 
    color: "text-green-500"
  },
  { 
    icon: TrendingUp, 
    title: "Arquitetura Escalável", 
    description: "Experiência com Connection Pooling (PgBouncer) e ambiente Serverless (Vercel) para lidar com picos de tráfego e otimizar custos.", 
    color: "text-blue-500"
  },
  { 
    icon: Zap, 
    title: "SaaS em Produção", 
    description: "Tenho uma Plataforma de Agendamento Online Multi-tenant que está em produção, validando a capacidade de entrega de software real.", 
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
                Minha Jornada como Fullstack Júnior
            </CardTitle>
            <Separator className="mt-2 mb-4" />
          </CardHeader>

          <CardContent className="p-0 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Minha paixão pelo desenvolvimento web evoluiu de um foco em Front-end (React, Next.js, Tailwind) para uma experiência robusta como Desenvolvedor Fullstack Júnior. Eu não apenas construo interfaces bonitas, mas também sou responsável pela arquitetura de back-end, infraestrutura e segurança de aplicações em produção.
            </p>
            
            <p>
              O ponto central da minha experiência é o desenvolvimento e manutenção de uma Plataforma SaaS Multi-tenant. Neste projeto, aprofundei-me em:<br />
                Next.js 15 (App Router) para renderização eficiente.
                PostgreSQL/Supabase & Prisma para modelagem de dados complexos.
                Implementação de RLS (Row-Level Security) e PgBouncer para alta disponibilidade e segurança crítica de dados.
            </p>
            
            <p>
              Estou sempre em busca de aprimoramento, focado em entregar soluções que sejam não apenas funcionais, mas também escaláveis, seguras e com uma excelente experiência de usuário. Pronto para enfrentar qualquer desafio técnico!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}