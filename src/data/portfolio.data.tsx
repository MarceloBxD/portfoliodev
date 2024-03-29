const PORTFOLIO_PREFIX_ID = "portfolio-";

type PortfolioProps = {
  title: string;
  projects: PortfolioProjectsProps[];
};

type PortfolioProjectsProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
};

export const portfolioData: PortfolioProps = {
  title: "Portfólio",
  projects: [
    {
      id: `${PORTFOLIO_PREFIX_ID}0`,
      title: "Projeto 1",
      description: "Descrição do projeto 1.",
      image: "/images/portfolio/project-1.png",
      technologies: ["ReactJS", "NextJS", "TypeScript", "GraphQL"],
      link: "",
    },
    {
      id: `${PORTFOLIO_PREFIX_ID}1`,
      title: "Projeto 2",
      description: "Descrição do projeto 2.",
      image: "/images/portfolio/project-2.png",
      technologies: ["ReactJS", "NextJS", "TypeScript", "GraphQL"],
      link: "",
    },
    {
      id: `${PORTFOLIO_PREFIX_ID}2`,
      title: "Projeto 3",
      description: "Descrição do projeto 3.",
      image: "/images/portfolio/project-3.png",
      technologies: ["ReactJS", "NextJS", "TypeScript", "GraphQL"],
      link: "",
    },
    {
      id: `${PORTFOLIO_PREFIX_ID}3`,
      title: "Projeto 4",
      description: "Descrição do projeto 4.",
      image: "/images/portfolio/project-4.png",
      technologies: ["ReactJS", "NextJS", "TypeScript", "GraphQL"],
      link: "",
    },
    {
      id: `${PORTFOLIO_PREFIX_ID}4`,
      title: "Projeto 5",
      description: "Descrição do projeto 5.",
      image: "/images/portfolio/project-5.png",
      technologies: ["ReactJS", "NextJS", "TypeScript", "GraphQL"],
      link: "",
    },
    {
      id: `${PORTFOLIO_PREFIX_ID}5`,
      title: "Projeto 6",
      description: "Descrição do projeto 6.",
      image: "/images/portfolio/project-6.png",
      technologies: ["ReactJS", "NextJS", "TypeScript", "GraphQL"],
      link: "",
    },
  ],
};
