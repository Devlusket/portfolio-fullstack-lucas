"use client";
import Link from "next/link";
import { Menu, FileText, Code, Mail } from "lucide-react"; 

// Componentes Shadcn/ui
import { Button } from "@/components/ui/button"; 
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"; 
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle
} from "@/components/ui/sheet"; 

// NOVO: Importe o ModeToggle
import { ModeToggle } from "@/components/ui/mode-toggle"; 

// Definição das Rotas
const navItems = [
  { 
    href: "https://drive.google.com/file/d/1dDqCmWwAoMlP0EH-_daCfEZrR8lTmTw1/view?usp=sharing",
    label: "Currículo (PDF)", 
    icon: FileText,
    external: true // Indica que é um link externo
  },
  { href: "#projects", label: "Projetos", icon: Code, external: false },
  { href: "#hireme", label: "Contato", icon: Mail, external: false },
];

export default function Header() {
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border/60">
      
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nome / Logo */}
        <Link 
          href="/" 
          className="text-2xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          LS.
        </Link>

        {/* --- Container de Ações (Menu Desktop + Toggle) --- */}
        {/* Adicionei 'gap-2' para espaçamento entre o menu e o toggle */}
        <div className="flex items-center gap-2"> 

          {/* Menu Desktop (Menubar Shadcn) */}
          <Menubar className="hidden md:flex bg-transparent border-none p-0 h-auto space-x-2">
            {navItems.map((item) => (
              <MenubarMenu key={item.label}>
                {item.external ? (
                  // Links Externos (Target Blank)
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </a>
                ) : (
                  // Links Internos (Hash Links)
                  <MenubarTrigger asChild>
                    <Link 
                      href={item.href} 
                      className="px-4 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </MenubarTrigger>
                )}
              </MenubarMenu>
            ))}
          </Menubar>

          {/* NOVO: Botão de Alternância de Tema */}
          <ModeToggle />

          {/* Menu Mobile (Sheet Shadcn) */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] flex flex-col pt-12">
              {/* Você pode incluir o ModeToggle aqui também, se quiser */}
              <div className="flex justify-between items-center mb-6">
                <SheetTitle className="text-xl font-bold text-primary">Lucas Soares</SheetTitle>
                <ModeToggle />
              </div>
              
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="w-full justify-start"
                    onClick={() => { 
                      // Lógica opcional para fechar o Sheet após clicar em um link interno
                      // Neste caso, você precisaria de um hook ou de um ref, mas como
                      // o Link geralmente causa uma navegação, a Sheet é fechada automaticamente.
                    }}
                  >
                    <Button variant="ghost" className="w-full justify-start text-base gap-3 h-12">
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div> {/* Fim do Container de Ações */}
      </div>
    </header>
  );
}