import Link from "next/link";
import { Zap, Github, ArrowRight } from "lucide-react";

// Componentes Shadcn/ui
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// Removidas as importações do Carousel, Dialog/Modal será no componente ProjectGalleryDialog

// NOVO: Importe o componente de Galeria de Imagens
import { ProjectGalleryDialog } from "@/components/project-gallery-dialog"; 

export default function Projects() {
  const projects = [
    {
      id: 0, 
      title: "Plataforma SaaS de Agendamento Online Multi-tenant",
      description: `
        Uma Plataforma SaaS Multi-tenant de Agendamento Online que já está em produção e atendendo usuários ativos. Feita com o ecossistema Javascript.
      `,
      details: [ 
        "Arquitetura Serverless com Next.js 14 e Supabase (PostgreSQL) com Prisma ORM. Comunicação Transacional (WhatsApp e Email) e Timezones resolvidos.",
        "Segurança via Row-Level Security (RLS) para isolamento de dados Multi-tenant. Otimização de Banco de Dados com Connection Pooling (PgBouncer).",
        "Automação crítica via Vercel Cron Jobs (limpeza de horários expirados). Criação de horários dinâmicos para profissionais com base em sua disponibilidade semanal.",
        "Dashboard Admin para gestão de usuários, agendamentos e horários. Área do Cliente para agendamento e gerenciamento de compromissos.",
        "Login social via Google OAuth 2.0 (NextAuth.js) para uma experiência de cadastro rápida e segura"
      ],
      image: "/images/MeusAgendamentosAreaCliente.png", // Imagem de capa
      liveUrl: "https://meu-agendamento.vercel.app/",
      codeUrl: "Repositório Privado (Propriedade Intelectual)",
      stack: [
        "Next.js 14 (App Router)", "React/JS", "Javascript", "PostgreSQL (Supabase)", 
        "Prisma ORM", "Shadcn/ui", "Vercel", "RLS", "PgBouncer"
      ],
      highlight: true,
      gallery: [
          "/images/MeusAgendamentosAreaCliente.png", 
          "/images/MeusAgendamentosAreaProfissional.png", 
          "/images/MeusAgendamentosAreaAgendamento.png", 
      ]
    },
    {
      id: 1, 
      title: "Aplicativo de Despesas",
      description:
        "Controle pessoal de despesas feito com Next.js e JavaScript/React, com design em Tailwind CSS. Implementa CRUD completo (Adicionar, Listar, Marcar como Pago e Excluir) com integração segura e robusta ao Supabase/PostgreSQL usando Prisma ORM.",
      image: "/images/despesasv2.png",
      liveUrl: "https://expenses-app-project.vercel.app/",
      codeUrl: "https://github.com/Devlusket/expenses-project",
      stack: ["Next.js", "React", "Supabase", "Prisma", "Tailwind CSS"],
      highlight: false,
      gallery: null,
    },
    {
      id: 2, 
      title: "Quiz dos Power Rangers",
      description:
        "Quiz interativo para demonstração de front-end dinâmico. Usa React, Next.js, Tailwind CSS e JavaScript. Contém lógica de pontuação, embaralhamento de respostas e resultado final. Excelente para demonstrar habilidades em manipulação de estado e UX.",
      image: "/images/powerrangers.png",
      liveUrl: "https://powerrangersquiz.vercel.app/",
      codeUrl: "https://github.com/Devlusket/pr-quiz-ts-next-project",
      stack: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      highlight: false,
      gallery: null,
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
            
            {/* NOVO: Substituído o bloco de imagem/carrossel pelo componente Dialog */}
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
              {/* Para o SaaS, listamos os detalhes técnicos */}
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