const SERVICES_PREFIX_ID = "services-";

type servicesDataProps = {
  id: string;
  icon: JSX.Element;
  title: string;
  content: string[];
};

type servicesProps = {
  title: string;
  services: servicesDataProps[];
};

export const servicesData: servicesProps = {
  title: "Serviços",
  services: [
    {
      id: `${SERVICES_PREFIX_ID}0`,
      icon: <></>,
      title: "Desenvolvimento web",
      content: [
        "Desenvolvimento de sites e aplicações web responsivas e otimizadas para SEO.",
        "Utilização de tecnologias modernas como ReactJS, NextJS, TypeScript, GraphQL, entre outras.",
        "Criação de interfaces intuitivas e agradáveis para o usuário.",
      ],
    },
    {
      id: `${SERVICES_PREFIX_ID}1`,
      icon: <></>,
      title: "Desenvolvimento mobile",
      content: [
        "Desenvolvimento de aplicativos mobile para Android e iOS.",
        "Utilização de tecnologias modernas como React Native, TypeScript, GraphQL, entre outras.",
        "Criação de interfaces intuitivas e agradáveis para o usuário.",
      ],
    },
    {
      id: `${SERVICES_PREFIX_ID}2`,
      icon: <></>,
      title: "Consultoria e mentoria",
      content: [
        "Consultoria e mentoria em desenvolvimento web e mobile.",
        "Auxílio na escolha de tecnologias e arquiteturas para o seu projeto.",
        "Acompanhamento e orientação para o desenvolvimento de aplicações.",
      ],
    },
    {
      id: `${SERVICES_PREFIX_ID}3`,
      icon: <></>,
      title: "Manutenção e suporte",
      content: [
        "Manutenção e suporte para sites e aplicações web.",
        "Correção de bugs e implementação de novas funcionalidades.",
        "Monitoramento e otimização de desempenho.",
      ],
    },
  ],
};
