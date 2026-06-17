// components/FreelanceProjects.tsx
"use client";

import { ExternalLink, Github, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectGalleryDialog } from "@/components/project-gallery-dialog";
import React from "react";

const freelanceProjects = [
  {
    title: "Sistema de Controle de Veículos",
    client: "Câmara Municipal de Medina — MG",
    description:
      "Sistema fullstack para gestão da frota institucional da Câmara Municipal de Medina. Os servidores registram saídas com assinatura digital, agendam veículos e a administração acompanha tudo pelo painel com relatórios em PDF. Em uso diário pela equipe.",
    image: "/images/camara/camaraLogin.png",
    gallery: [
      "/images/camara/camara1.png",
      "/images/camara/camara2.png",
      "/images/camara/camara3.png",
      "/images/camara/camara4.png",
      "/images/camara/camara5.png",
      "/images/camara/camaraLogin.png",
    ],
    tags: ["Spring Boot", "Angular 21", "PostgreSQL", "PDF Reports", "Assinatura Digital", "PWA"],
    links: {
      backendRepo: "https://github.com/Devlusket/CamaraMunicipal-Formulario-Veiculo",
      frontendRepo: "https://github.com/Devlusket/CamaraMunicipal-Formulario-Veiculo-Frontend",
      live: null, // acesso restrito
    },
  },
  {
    title: "Landing Page",
    client: "Be Ready English School",
    description:
      "Landing page para escola de inglês com suporte a dois idiomas (PT/EN), animações de scroll por seção e layout otimizado para conversão. Desenvolvido como freelancer com contrato formal.",
    image: "/images/beready/ready1.png",
    gallery: [
      "/images/beready/ready1.png",
      "/images/beready/ready2.png",
      "/images/beready/ready3.png",
      "/images/beready/ready4.png",
      "/images/beready/ready5.png",
    ],
    tags: ["Next.js", "Tailwind v4", "i18n", "Vercel"],
    links: {
      repo: "https://github.com/Devlusket/be-ready-english-school",
      live: "https://bereadyenglishschool.vercel.app",
    },
  },
  {
    title: "Landing Page",
    client: "Plumas de Cristal",
    description:
      "Landing page para divulgação de livro com design elegante, animações com Framer Motion e links diretos para compra na Amazon e UICLAP.",
    image: "/images/plumas/plumas1.png",
    gallery: [
      "/images/plumas/plumas1.png",
      "/images/plumas/plumas2.png",
      "/images/plumas/plumas3.png",
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    links: {
      repo: "https://github.com/Devlusket/Plumas-De-Cristal-Livro",
      live: "https://plumas-de-cristal.vercel.app",
    },
  },
];



export default function FreelanceProjects() {
  return (
    <section id="freelance" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho da seção */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            | Projetos Freelance
          </h2>
          <p className="text-muted-foreground text-lg">
            Sistemas e sites entregues para clientes reais, em produção.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelanceProjects.map((project) => (
            <div
              key={project.title + project.client}
              className="flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Imagem / Carrossel */}
              <ProjectGalleryDialog project={project} />

              {/* Conteúdo do card */}
              <div className="flex flex-col flex-1 p-6 gap-4">

                {/* Cliente — destaque acima do título */}
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {project.client}
                </p>

                {/* Título */}
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags de tecnologia */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Botões */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {/* Câmara: dois repos separados */}
                  {project.links.backendRepo && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.links.backendRepo} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Backend
                      </a>
                    </Button>
                  )}
                  {project.links.frontendRepo && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.links.frontendRepo} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Frontend
                      </a>
                    </Button>
                  )}

                  {/* Outros projetos: repo único */}
                  {project.links.repo && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  )}

                  {/* Link ao vivo — se existir */}
                  {project.links.live ? (
                    <Button asChild variant="default" size="sm">
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Site
                      </a>
                    </Button>
                  ) : (
                    // Câmara: acesso restrito, sem link
                    <Button variant="ghost" size="sm" disabled className="cursor-default opacity-50">
                      <Lock className="mr-2 h-4 w-4" />
                      Acesso Restrito
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}