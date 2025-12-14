// components/project-gallery-dialog.jsx
"use client";

import React, { useState } from "react";
import { ZoomIn } from "lucide-react";

// Componentes Shadcn/ui
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

/**
 * Componente que renderiza a imagem de capa e, ao clicar, abre um modal (Dialog)
 * contendo um carrossel (Carousel) com todas as imagens da galeria.
 */
export function ProjectGalleryDialog({ project }) {
  const [open, setOpen] = useState(false);
  
  // Condição: Se a galeria não existe ou tem 1 ou menos imagens, usa a imagem estática.
  const isGallery = project.gallery && project.gallery.length > 1;
  const imageUrl = project.image;

  // Se não houver galeria para exibir, renderiza a imagem estática simples.
  if (!isGallery) {
    return (
      <div className={`relative ${project.highlight ? 'h-96' : 'h-64'} w-full overflow-hidden rounded-t-lg`}>
        <img
          src={imageUrl}
          alt={project.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
        {project.highlight && (
          <Badge 
            variant="default" 
            className="absolute top-4 left-4 text-sm font-semibold bg-primary hover:bg-primary/90 z-10"
          >
            🚀 Projeto Principal em Produção
          </Badge>
        )}
      </div>
    );
  }

  // Se houver galeria, renderiza o Dialog
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* A imagem de capa se torna o Trigger para o modal */}
        <div
          className={`relative ${project.highlight ? 'h-96' : 'h-64'} w-full overflow-hidden rounded-t-lg cursor-pointer group`}
          onClick={() => setOpen(true)}
        >
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] rounded-t-lg"
          />
          {/* Ícone de Zoom/Galeria */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="h-10 w-10 text-white" />
          </div>
          {/* Badge de Destaque */}
          {project.highlight && (
            <Badge 
              variant="default" 
              className="absolute top-4 left-4 text-sm font-semibold bg-primary hover:bg-primary/90 z-10"
            >
              🚀 Projeto Principal em Produção
            </Badge>
          )}
        </div>
      </DialogTrigger>

      {/* Conteúdo do Modal: Carrossel de Imagens */}
      <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
        <Carousel 
            className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center" 
            opts={{ loop: true }}
        >
          <CarouselContent className="h-full">
            {project.gallery.map((imgUrl, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="flex justify-center items-center h-full">
                    {/* A Imagem no Modal precisa de um estilo que se ajuste ao container */}
                    <img
                        src={imgUrl}
                        alt={`${project.title} - Screenshot ${index + 1}`}
                        className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                    />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navegação do Carrossel dentro do Modal */}
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}