// components/tech-icon.jsx
"use client";

import Image from "next/image";
import { useTheme } from "next-themes"; // Importa o hook
import { Badge } from "@/components/ui/badge";

const TechIcon = ({ name, file }) => {
  // Pegamos o 'theme' configurado e o 'resolvedTheme' (o tema ativo final)
  const { theme, resolvedTheme } = useTheme();
  
  // 1. Determina se o tema ATIVO é Dark.
  // Usamos o resolvedTheme primariamente, pois ele já resolve a diferença entre 'system' e 'dark'.
  const isDarkMode = resolvedTheme === 'dark'; 

  // Definir quais ícones (que são naturalmente pretos) precisam do filtro invertido no modo escuro.
  const needsInvert = name === 'Next.js' || name === 'Shadcn' || name === 'Prisma';
  // (Adicione 'Supabase' se o ícone for preto e precisar de inversão).

  // Calcula o objeto de estilo condicionalmente:
  const conditionalStyle = (isDarkMode && needsInvert)
    ? { filter: 'invert(1)' } // Aplica o filtro de inversão (preto vira branco)
    : {}; // Não aplica estilo

  // OBS: Se você ainda tiver problemas com o resolvedTheme não carregando a tempo,
  // e o window.matchMedia for absolutamente necessário, use a seguinte lógica:
  /*
  const isSystemDark = typeof window !== 'undefined' && 
                       window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDarkActive = theme === 'dark' || (theme === 'system' && isSystemDark);

  const conditionalStyle = (isDarkActive && needsInvert)
    ? { filter: 'invert(1)' } 
    : {};
  */

  return (
    <div className="flex flex-col items-center justify-center p-3 transition-transform hover:scale-110 duration-300">
      <Image
        src={`/icons/${file}`}
        alt={name}
        width={50}
        height={50}
        className="object-contain mb-2"
        // Aplica o objeto de estilo calculado
        style={conditionalStyle}
      />
      
      <Badge variant="secondary" className="text-xs mt-1 bg-accent/50 text-accent-foreground">
        {name}
      </Badge>
    </div>
  );
};

export default TechIcon;