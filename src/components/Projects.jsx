import Link from "next/link";
import { Zap, Github, ArrowRight } from "lucide-react";

// Componentes Shadcn/ui
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// NOVO: Importe o componente de Galeria de Imagens
import { ProjectGalleryDialog } from "@/components/project-gallery-dialog"; 

export default function Projects() {
  const projects = [
    {
      id: 0,
      title: "Controle de Estoque B2B — API REST",
      description: `
        API REST completa para controle de estoque de uma empresa regional com múltiplas filiais.
        O sistema permite que cada cidade gerencie suas próprias movimentações, enquanto a sede tem visibilidade total.
      `,
      details: [
        "Arquitetura em camadas (Controller → Service → Repository) com autenticação JWT stateless e autorização por roles (ADMIN/CLIENTE) via Spring Security e @PreAuthorize.",
        "Sistema de movimentações com três tipos: ENTRADA (recebimento externo), SAÍDA (consumo/venda) e TRANSFERÊNCIA (entre filiais) — cidade de origem extraída automaticamente do token JWT.",
        "Regra de negócio: CLIENTE só pode transferir para a sede, enquanto ADMIN pode transferir para qualquer cidade. Validações centralizadas no Service com exceptions customizadas.",
        "Banco de dados com PostgreSQL, versionamento de schema via Flyway, BCrypt para hash de senhas e soft delete em produtos/usuários para preservar histórico.",
        "Deploy com CI/CD automático via GitHub no Railway. Documentação interativa com Swagger/OpenAPI disponível em produção.",
      ],
      image: "/images/estoque-swagger.png",
      liveUrl: "https://controle-de-estoque-production-4472.up.railway.app/swagger-ui/index.html",
      codeUrl: "https://github.com/Devlusket/Controle-de-Estoque",
      stack: [
        "Java 21", "Spring Boot 3", "Spring Security", "JWT",
        "PostgreSQL", "Flyway", "MapStruct", "Swagger", "Railway"
      ],
      highlight: true,
      gallery: [
        "/images/estoque-swagger.png",
      ]
    },
    {
      id: 1,
      title: "Plataforma SaaS de Agendamento Online Multi-tenant",
      description: `
        Uma Plataforma SaaS Multi-tenant de Agendamento Online que já está em produção. Feita com o ecossistema Javascript.
      `,
      details: [
        "Arquitetura Serverless com Next.js 14 e Supabase (PostgreSQL) com Prisma ORM. Comunicação Transacional (WhatsApp e Email) e Timezones resolvidos.",
        "Segurança via Row-Level Security (RLS) para isolamento de dados. Otimização de Banco de Dados com Connection Pooling (PgBouncer).",
        "Automação crítica via Vercel Cron Jobs (limpeza de horários expirados). Criação de horários dinâmicos para profissionais com base em sua disponibilidade semanal.",
        "Dashboard Admin para gestão de usuários, agendamentos e horários. Área do Cliente para agendamento e gerenciamento de compromissos.",
        "Login social via Google OAuth 2.0 (NextAuth.js) para uma experiência de cadastro rápida e segura"
      ],
      image: "/images/MeusAgendamentosBarbearia.png",
      liveUrl: "https://meu-agendamento.vercel.app/",
      codeUrl: "https://github.com/Devlusket/projeto-saas",
      stack: [
        "Next.js 14 (App Router)", "React/JS", "Javascript", "PostgreSQL (Supabase)",
        "Prisma ORM", "Shadcn/ui", "Vercel", "RLS", "PgBouncer"
      ],
      highlight: false,
      gallery: [
        "/images/MeusAgendamentosBarbearia.png",
        "/images/MeusAgendamentosAreaProfissional.png",
        "/images/MeusAgendamentosAreaAgendamento.png",
      ]
    },
    {
      id: 2,
      title: "Plumas de Cristal — Landing Page",
      description:
        "Landing page moderna e animada para divulgação do livro 'Plumas de Cristal'. Design elegante com animações fluidas, totalmente responsivo e otimizado para conversão.",
      details: [
        "Interface moderna e sofisticada com paleta dourada/amarela inspirada na capa do livro, tipografia elegante e layout mobile-first totalmente responsivo.",
        "Animações com Framer Motion: fade-in suave ao rolar a página, slide-up nas seções, microinterações em botões e efeito de entrada progressiva no texto principal.",
        "Estrutura componentizada em Next.js App Router com TypeScript — Hero, Sobre o Livro, Interior, Sobre a Autora, Contato e Footer como componentes independentes.",
        "Deploy automático na Vercel com CI/CD via GitHub. Links diretos para compra na Amazon e UICLAP integrados na Hero Section e no Footer.",
      ],
      image: "/images/plumas-de-cristal.png",
      liveUrl: "https://plumas-de-cristal.vercel.app/",
      codeUrl: "https://github.com/Devlusket/Plumas-De-Cristal-Livro",
      stack: ["Next.js", "TypeScript", "Framer Motion", "Shadcn/ui", "Tailwind CSS", "Vercel"],
      highlight: false,
      gallery: [
        "/images/plumas-de-cristal.png",
        "/images/plumas-de-cristal2.png",
        "/images/plumas-de-cristal3.png",
      ],
    },
    {
  id: 3,
  title: "Controle de Estoque B2B — Frontend PWA Angular",
  description: `
    Interface web completa para o sistema de controle de estoque B2B, consumindo a API REST do backend.
    Autenticação JWT, controle de acesso por perfil e CRUD completo de movimentações, produtos, cidades e usuários.
  `,
  details: [
    "Estrutura feature-based (features/cidades, features/produtos) espelhando a separação por responsabilidade do backend — cada feature contém sua lista e formulário independentes.",
    "PWA — Progressive Web App: O sistema também pode ser instalado como app de desktop via PWA nativo do Angular",
    "Autenticação JWT com interceptor HTTP que injeta o token automaticamente em toda requisição — equivalente ao JwtAuthFilter do Spring. Token decodificado com atob() nativo, sem biblioteca externa.",
    "Controle de acesso por perfil via functional guards: AuthGuard protege rotas autenticadas e RoleGuard protege rotas por role — CLIENTE redirecionado ao tentar acessar /usuarios.",
    "Formulário de movimentação com campo condicional via valueChanges — cidadeDestino aparece apenas em TRANSFERENCIA. Para CLIENTE, cidades filtradas apenas pela sede.",
    "Deploy com CI/CD automático via GitHub no Railway. Tailwind CSS v3 com visual estilo shadcn — badges coloridos por tipo de movimentação, tipografia Inter.",
  ],
  image: "/images/dashboard-estoque.png",
  liveUrl: "https://controle-de-estoque-frontend-production.up.railway.app",
  codeUrl: "https://github.com/Devlusket/Controle-de-Estoque-Frontend",
  stack: [
    "Angular 21", "TypeScript", "Tailwind CSS", "RxJS",
    "JWT", "Angular Router", "Railway"
  ],
  highlight: false,
  gallery: [
    "/images/login-estoque.png",
    "/images/dashboard-estoque.png",
  ]
},
  ];

  const sortedProjects = projects.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">
        <span className="text-primary">|</span> Projetos de Destaque
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sortedProjects.map((project) => (
          <Card
            key={project.id}
            className={`flex flex-col h-full transition-all duration-300 overflow-hidden ${
              project.highlight
                ? 'border-2 border-primary shadow-2xl shadow-primary/20 md:col-span-3'
                : 'hover:shadow-lg border-border'
            }`}
          >
            {/* Galeria de Imagens */}
            <ProjectGalleryDialog project={project} />

            {/* Card Header */}
            <CardHeader>
              <CardTitle className={`text-2xl font-bold ${project.highlight ? 'text-primary' : 'text-foreground'}`}>
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground pt-1">
                {project.description.trim().substring(0, 200) + '...'}
              </CardDescription>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="flex-grow">
              {project.details && (
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80 mb-4 ml-2">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                      <span className="flex-1">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Stack Técnica (Badges) */}
              <Separator className="my-4" />
              <div className="flex flex-wrap gap-2 pt-2">
                {(project.stack || []).map((tech) => (
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

            {/* Card Footer */}
            <CardFooter className="flex flex-col sm:flex-row gap-3 justify-start pt-4">
              <Button
                asChild
                variant={project.highlight ? "default" : "outline"}
                className={`flex-1 ${project.highlight ? 'bg-primary hover:bg-primary/90' : 'border-border'}`}
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Zap className="mr-2 h-4 w-4" />
                  Ver Deploy
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="flex-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                disabled={project.codeUrl === "Repositório Privado (Propriedade Intelectual)"}
              >
                {project.codeUrl === "Repositório Privado (Propriedade Intelectual)" ? (
                  <span>Repositório Privado</span>
                ) : (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver Código
                  </a>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
