import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactItems = [
  {
    label: "E-mail",
    href: "mailto:tsuunakage@gmail.com", // troque pelo seu email profissional
    icon: Mail,
    variant: "secondary",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5533984051527",
    icon: MessageCircle,
    variant: "outline",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devlusket/",
    icon: Linkedin,
    variant: "secondary",
  },
  {
    label: "GitHub",
    href: "https://github.com/Devlusket/Devlusket",
    icon: Github,
    variant: "secondary",
  },
];

export default function HireMe() {
  return (
    <section id="hireme" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Card className="text-center p-6 sm:p-10 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Vamos trabalhar juntos?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou disponível para freelas e aberto a oportunidades CLT. Me chama no WhatsApp ou manda um e-mail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {contactItems.map((item) => (
              <Button
                key={item.label}
                asChild
                variant={item.variant}
                size="lg"
                className={`text-base flex-grow sm:flex-grow-0 min-w-[200px] ${
                  item.label === "WhatsApp"
                    ? "border-green-500 text-green-500 hover:bg-green-500/10"
                    : ""
                }`}
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
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