export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Aplicativo de Despesas",
      description:
        "Aplicativo pessoal de controle de despesas desenvolvido com Next.js e TypeScript, com design em Tailwind CSS. Permite adicionar, listar, marcar como pago e excluir despesas. Agora integrado ao Supabase / PostgreSQL e Prisma, com API construída via rotas do Next.js (pages/api) e controle das operações (insert, select, update, delete) diretamente no banco de dados. Totalmente responsivo, com modo claro e escuro.",
      image: "/images/despesasv2.png",
      liveUrl: "https://expenses-app-project.vercel.app/",
      codeUrl: "https://github.com/Devlusket/expenses-project",
    },
    {
      id: 2,
      title: "Quiz dos Power Rangers",
      description:
        "Quiz interativo feito com React, Next.js, Tailwind CSS e TypeScript. Usa json-server localmente e migrado para o frontend para funcionar no Vercel. Contém lógica de pontuação, embaralhamento de respostas e resultado final com imagem. Foco em aprendizado e experiência divertida.",
      image: "/images/powerrangers.png",
      liveUrl: "https://powerrangersquiz.vercel.app/",
      codeUrl: "https://github.com/Devlusket/pr-quiz-ts-next-project",
    },
    {
    id: 1, // Dando prioridade máxima, se a lista for ordenada.
    title: "Plataforma SaaS de Agendamento Online Multi-tenant",
    description: `
    Uma Plataforma SaaS Multi-tenant de Agendamento Online que já está em produção e atendendo usuários ativos. Este projeto foi uma verdadeira imersão em arquitetura escalável e segurança de dados.
        Front-end & Back-end: Next.js 14 (App Router) , React e Javascript/Typescript.
Banco de Dados: PostgreSQL (Supabase) com Prisma ORM para modelagem relacional.
Estilização: Tailwind CSS e Shadcn/ui  (Componentes) para uma interface responsiva e acessível.
A escolha da arquitetura Serverless foi fundamental para a escalabilidade e o baixo custo operacional:
Deploy e CI/CD: Utilização da Vercel para hospedagem, garantindo uma pipeline de Integração Contínua e Entrega Contínua (CI/CD).
Otimização de Banco de Dados: Solucionei o desafio da exaustão de conexões no ambiente Serverless configurando o Connection Pooling via PgBouncer. Isso garante que o banco de dados PostgreSQL suporte picos de acesso sem falhar.
Segurança de Dados (RLS): Implementação de Row-Level Security (RLS) no Supabase, assegurando o isolamento total dos dados e controlando o acesso granular entre Clientes, Profissionais e Funcionários  uma camada de segurança essencial em um SaaS Multi-tenant.
Armazenamento em Nuvem: Uso do Vercel Blob Storage para upload e gerenciamento eficiente das imagens de perfil e portfólio dos estabelecimentos.
Portfólio Dinâmico: O profissional tem total liberdade para alterar a grade de serviços, descrição e fazer a mudança dinâmica de dados do estabelecimento.
Agendamento Inteligente: Sistema de criação de horários dinâmicos semanais  com validação de conflitos em tempo real.
Autenticação Segura: Login social via Google OAuth 2.0 (NextAuth.js) para uma experiência de cadastro rápida e segura.
Automação Crítica (Cron Jobs): Configurei rotinas automáticas (Vercel Cron Jobs) para a limpeza sanitária de horários expirados no banco de dados.
Comunicação Transacional: Integração de serviços para confirmação de agendamentos via WhatsApp e Email Transacional.
Timezones: Resolução da complexidade de manipular fusos horários (Timezones)  para que a plataforma mostre a hora correta tanto para o profissional quanto para o cliente em diferentes regiões.
    `,
    image: "/images/MeusAgendamentosAreaCliente.png",
    liveUrl: "https://meu-agendamento.vercel.app/", 
    codeUrl: "Repositório Privado (Propriedade Intelectual)", 
    stack: [
        "Next.js 14 (App Router)", "React/TypeScript", "PostgreSQL (Supabase)", 
        "Prisma ORM", "Tailwind CSS", "Vercel Serverless", "RLS", "PgBouncer"
    ]
}
  ];

  return (
    <section id="projects" className="px-6 py-25 text-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-8 text-white">
        Aqui estão alguns dos meus projetos mais recentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-indigo-800/50 text-white p-4 rounded-xl shadow-md flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-78 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-left">{project.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 mt-auto">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-800 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700"
              >
                Ver Projeto
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-800 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700"
              >
                Ver Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
