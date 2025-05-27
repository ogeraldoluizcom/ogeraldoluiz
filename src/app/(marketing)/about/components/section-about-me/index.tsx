import { Title } from '@/components/title'

export const SectionAboutMe = () => {
  return (
    <section>
      <Title align="left" subtitle="💼 Sobre Mim" />
      <p>
        Sou Engenheiro de Software Sênior com sólida experiência em
        desenvolvimento full stack, automações, integração de sistemas e
        arquitetura de soluções escaláveis — atuando com foco em resultados
        concretos, performance e inovação.
      </p>
      <p>
        Ao longo da minha carreira, contribuí para projetos estratégicos nos
        setores B2B e B2C, construindo soluções digitais que conectam empresas
        aos seus públicos com eficiência e inteligência técnica. Tenho como
        propósito entregar valor real por meio de sistemas sob medida, capazes
        de impulsionar o crescimento orgânico, otimizar a experiência do usuário
        e traduzir objetivos de negócio em resultados mensuráveis.
      </p>
      <p>
        Atualmente, atuo como Engenheiro de Software Full Stack no Estadão, onde
        participo da modernização e integração de sistemas de grande escala. No
        backend, trabalho com PHP (Laravel) e NestJS, além de desenvolver APIs e
        automações com o n8n. No frontend, minha stack inclui React, Styled
        Components, Storybook utilizando práticas modernas de componentização
        para garantir consistência visual, performance e facilidade de
        manutenção. Um dos maiores desafios que enfrento é a migração de
        conteúdo legado do WordPress para o ARCXP, CMS amplamente utilizado por
        grandes veículos de mídia.
      </p>
      <p>
        Antes disso, tive uma atuação marcante na Via Varejo, onde colaborei em
        diversas frentes:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          No setor B2B, criei um dashboard de precificação para o time comercial
          com React, TypeScript, Material-UI e Azure, eliminando processos
          manuais e otimizando fluxos críticos.
        </li>
        <li>
          No setor B2C, participei da criação de e-commerces das marcas HP, HP
          Empresas e AOC, além do desenvolvimento de um app mobile com AngularJS
          e Pug Template, sempre com foco em UX, SEO e responsividade.
        </li>
        <li>
          Também desenvolvi um painel de monitoramento de logs com ASP.NET Core,
          C# e SQL Server, centralizando informações operacionais e aumentando a
          eficiência do suporte técnico.
        </li>
      </ul>
    </section>
  )
}
