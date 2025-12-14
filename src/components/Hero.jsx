import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Zap } from "lucide-react";

// Componentes Shadcn/ui
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    // Ajusta o padding para dar espaço ao header fixo e centraliza o conteúdo verticalmente
    // pt-32 para dar espaço ao header (h-16) + margin
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-16 px-4 md:px-8 bg-background"
    >
      
      {/* Imagem de Perfil (Melhorando a borda e o hover effect) */}
      <div className="relative mb-6">
        <Image
          src="/lucas.jpg"
          alt="Lucas Soares"
          width={150}
          height={150}
          className="rounded-full object-cover border-4 border-primary transition-transform hover:scale-105 duration-500 shadow-xl"
        />
        {/* Opcional: Badge de status "Online" ou "Empregado" */}
        <span className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-green-500 border-4 border-background shadow-lg" title="Disponível para Projetos"></span>
      </div>

      {/* Título Principal (Mais impactante e direto) */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-center mb-4">
        <span className="text-foreground">Lucas Soares,</span>
        <br className="sm:hidden" />
        <span className="text-primary block sm:inline"> Fullstack Júnior</span>
      </h1>
      
      {/* Subtítulo de Destaque Técnico (O seu diferencial) */}
      <p className="max-w-3xl text-xl sm:text-2xl text-center text-muted-foreground mb-8">
        Especializado em Next.js 15, Serverless (Vercel/Supabase) e arquitetura Multi-tenant com RLS.
      </p>

      {/* Ação Principal: CTA para o SaaS Multi-tenant */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-lg">
        <Button 
          asChild 
          variant="default" 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-lg py-3 px-6 shadow-lg transition-all duration-300"
        >
          <a href="[LINK-DO-SEU-SAAS-AQUI]" target="_blank" rel="noopener noreferrer">
            <Zap className="mr-2 h-5 w-5" />
            Ver SaaS em Produção
          </a>
        </Button>
        
        {/* Ação Secundária: CTA para a Stack Completa/Projetos */}
        <Button 
          asChild 
          variant="outline" 
          size="lg"
          className="text-lg py-3 px-6 border-2 border-border transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          <Link href="#projects">
            <Code className="mr-2 h-5 w-5" />
            Outros Projetos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

    </section>
  );
}