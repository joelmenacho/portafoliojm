
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import hogarmenacho from "../../images/projects/hogarm.jpg";
import patita from "../../images/projects/patita.jpg";
import anjhely from "../../images/projects/anjhely.jpg";
import dinero from "../../images/projects/dinero.jpg";
import hm from "../../images/projects/hm.jpg";
import tarjeta from "../../images/projects/tarjeta.jpg";

export const projectsPortfolio = [
  {
    title: "Cita Patita Feliz",
    image: patita,
    techs: [
      { name: "React ", src: reactImage },
      { name: "CSS", src: reactBootstrapImage },
    ],
    description:
      "Aplicación creada con React JS y Bootstrap para realizar una cita.",
    repository: "#",
    website: "https://patitafeliz1.vercel.app/",
  },
  {
    title: "Anjhely",
    image: anjhely,
    techs: [
      { name: "React ", src: reactImage },
      { name: "CSS", src: cssImage },
    ],
    description:
      "Aplicación creada con React Vue y CSS para realizar animaciones para niños.",
    repository: "#",
    website: "https://anjhely.vercel.app/",
  },
  
  {
    title: "Tarjeta JM",
    image: tarjeta,
    techs: [
      { name: "HTML5 ", src: cssImage },
      { name: "CSS", src: cssImage },
    ],
    description:
      "Aplicación creada con HTML5 JS y CSS.",
    repository: "#",
    website: "https://joelmenacho.github.io/mitarjeta/",
  },
  {
    title: "Controle su dinero",
    image: dinero,
    techs: [
      { name: "React ", src: reactImage },
      { name: "Bootstrap", src: reactBootstrapImage },
    ],
    description:
      "Aplicación creada con React  y Bootstrap para gestionar el control de gastos.",
    repository: "#",
    website: "https://controlesudinero.netlify.app/",
  },
  {
    title: "HM",
    image: hm,
    techs: [
      { name: "React JS ", src: reactImage },
      { name: "Styled Components", src: styledImage },
    ],
    description:
      "Aplicación creada con React  y css ver la funcional de carrito de compra.",
    repository: "#",
    website: "https://hogarmenachoapp.netlify.app/",
  },
  {
    title: "Hogar Menacho",
    image: hogarmenacho,
    techs: [
      { name: "React", src: reactImage },
      { name: "React Router ", src: reactRouterdomImage },
      { name: "Sass", src: sassImage },
      { name: "Semantic", src: semanticImage },
    ],
    description:
      "Aplicación creada con React  y css ver la funcional de carrito de compra y se continua desarollando",
    repository: "#",
    website: "https://hm-joelmenacho.vercel.app/",
  },

];
