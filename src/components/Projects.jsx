import Link from "next/link";
import { Zap, Github, ArrowRight } from "lucide-react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProjectGalleryDialog } from "@/components/project-gallery-dialog";

const projects = [
  {
    id: 0,
    title: "Controle de Estoque B2B — API REST",
    description: `API REST para controle de estoque de uma empresa regional com múltiplas filiais. Cada cidade gerencia suas próprias movimentações enquanto a sede tem visibilidade total.`,
    details: [
      "Arquitetura em camadas (Controller → Service → Repository) com autenticação JWT stateless e autorização por roles (ADMIN/CLIENTE) via Spring Security e @PreAuthorize.",
      "Três tipos de movimentação: ENTRADA, SAÍDA e TRANSFERÊNCIA — cidade de origem extraída automaticamente do token JWT, sem input manual.",
      "Regra de negócio: CLIENTE só transfere para a sede, ADMIN transfere para qualquer cidade. Validações centralizadas no Service com exceptions customizadas.",
      "PostgreSQL via Neon, versionamento de schema com Flyway, BCrypt para senhas e soft delete para preservar histórico.",
      "Deploy com CI/CD automático no Render. Documentação interativa com Swagger/OpenAPI disponível em produção.",
    ],
    image: "/images/estoque-swagger.png",
    liveUrl: "https://controle-de-estoque-backend-7h07.onrender.com/swagger-ui/index.html",
    codeUrl: "https://github.com/Devlusket/Controle-de-Estoque",
    stack: ["Java 21", "Spring Boot 3", "Spring Security", "JWT", "PostgreSQL", "Flyway", "MapStruct", "Swagger", "Render", "Neon"],
    gallery: ["/images/estoque-swagger.png"],
  },
  {
    id: 1,
    title: "Controle de Estoque B2B — Frontend PWA",
    description: `Interface Angular para o sistema B2B, consumindo a API REST. Autenticação JWT, controle de acesso por perfil e CRUD completo de movimentações, produtos, cidades e usuários.`,
    details: [
      "Estrutura feature-based (features/cidades, features/produtos) espelhando a separação por responsabilidade do backend.",
      "Autenticação JWT com interceptor HTTP que injeta o token em toda requisição — token decodificado com atob() nativo, sem biblioteca externa.",
      "Controle de acesso via functional guards: AuthGuard para rotas autenticadas e RoleGuard por role — CLIENTE redirecionado ao tentar acessar /usuarios.",
      "Formulário de movimentação com campo condicional via valueChanges — cidadeDestino aparece apenas em TRANSFERENCIA.",
      "Instalável como PWA via @angular/pwa. Deploy com CI/CD automático no Vercel.",
    ],
    image: "/images/dashboard-estoque.png",
    liveUrl: "https://controle-de-estoque-ashen.vercel.app",
    codeUrl: "https://github.com/Devlusket/Controle-de-Estoque-Frontend",
    stack: ["Angular 21", "TypeScript", "Tailwind CSS", "RxJS", "JWT", "Angular Router", "PWA", "Vercel"],
    gallery: [
      "/images/login-estoque.png",
      "/images/dashboard-estoque.png",
    ],
  },
  {
    id: 2,
    title: "Plataforma SaaS de Agendamento Multi-tenant",
    description: `Plataforma SaaS de agendamento online com isolamento de dados por tenant. Feita com o ecossistema JavaScript antes da transição para Java.`,
    details: [
      "Arquitetura Serverless com Next.js 14 e Supabase (PostgreSQL) com Prisma ORM.",
      "Isolamento de dados por tenant via Row-Level Security (RLS) e connection pooling com PgBouncer.",
      "Horários dinâmicos por disponibilidade semanal do profissional. Limpeza automática via Vercel Cron Jobs.",
      "Login social com Google OAuth 2.0 via NextAuth.js.",
    ],
    image: "/images/MeusAgendamentosBarbearia.png",
    liveUrl: "https://meu-agendamento.vercel.app/",
    codeUrl: "https://github.com/Devlusket/projeto-saas",
    stack: ["Next.js 14", "JavaScript", "PostgreSQL", "Supabase", "Prisma ORM", "Shadcn/ui", "Vercel", "RLS"],
    gallery: [
      "/images/MeusAgendamentosBarbearia.png",
      "/images/MeusAgendamentosAreaProfissional.png",
      "/images/MeusAgendamentosAreaAgendamento.png",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
          | Projetos Técnicos
        </h2>
        <p className="text-muted-foreground text-lg">
          Projetos de estudo e exploração técnica — backend, frontend e fullstack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col h-full transition-all duration-300 overflow-hidden hover:shadow-lg border-border"
          >
            <ProjectGalleryDialog project={project} />

            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground pt-1">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <ul className="space-y-2 text-sm text-foreground/80 mb-4">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span className="flex-1">{detail}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-4" />

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-medium bg-accent text-accent-foreground hover:bg-accent/80"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild variant="outline" className="flex-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Zap className="mr-2 h-4 w-4" />
                  Ver Deploy
                </a>
              </Button>
              <Button asChild variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver Código
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}