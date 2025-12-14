import Link from "next/link";
import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";

// Componentes Shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Informações de Contato
const contactItems = [
  {
    label: "E-mail",
    href: "mailto:tsuunakage@gmail.com",
    icon: Mail,
    variant: "default", // Destaque para o principal
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5533984051527",
    icon: MessageCircle,
    variant: "outline", // Ação secundária importante
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devlusket/",
    icon: Linkedin,
    variant: "default", // Link terciário/social
  },
  {
    label: "GitHub",
    href: "https://github.com/Devlusket/Devlusket", // Link corrigido
    icon: Github,
    variant: "default", // Link terciário/social
  },
];

export default function HireMe() {
  return (
    <section id="hireme" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Card className="text-center p-6 sm:p-10 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Pronto para o Próximo Desafio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Interessado em ter um Fullstack Júnior com experiência em SaaS Multi-tenant, Next.js 15 e segurança de dados (RLS)? Envie uma mensagem ou vamos nos conectar.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {contactItems.map((item) => (
              <Button
                key={item.label}
                asChild // Essencial para usar o âncora <a> dentro do Button
                variant={item.variant}
                size="lg"
                className={`text-base flex-grow sm:flex-grow-0 min-w-[200px] ${
                  item.variant === 'default' ? 'shadow-md bg-primary hover:bg-primary/90' : ''
                } ${
                  item.label === 'WhatsApp' ? 'border-green-500 text-green-500 hover:bg-green-500/10' : ''
                }`}
              >
                <a 
                  href={item.href} 
                  target={item.variant !== 'default' ? "_blank" : "_self"} 
                  rel="noopener noreferrer"
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.label}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}