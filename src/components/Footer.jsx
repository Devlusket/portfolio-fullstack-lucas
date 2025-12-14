import { Separator } from "@/components/ui/separator"; // Útil para separação visual
import { Heart } from "lucide-react";

export default function Footer() {
  // Pegando o ano atual dinamicamente é uma boa prática
  const currentYear = new Date().getFullYear();

  return (
    // bg-muted: Um fundo levemente diferente para contraste sutil
    // border-t: Linha superior para definir o rodapé
    <footer className="w-full border-t border-border/60 bg-muted/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Informação principal */}
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          &copy; {currentYear} Lucas Soares Brito. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}