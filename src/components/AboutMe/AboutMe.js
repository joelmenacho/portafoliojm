import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";
import logoUdemy from "../../svg/udemy.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/joel.menacho",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/joelmenachoa/",
      logo: logoLinkedin,
    },
    {
      name: "Udemy",
      link: "https://udemy.com/user/joelmenacho",
      logo: logoUdemy,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCFjjBPFhDgly_YXYtaknqew",
      logo: logoYoutube,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, soy</p>
            <p>Joel Menacho</p>
            <p>Frontend Developer</p>
          </S.Title>
          <S.DescriptionText>
          Soy un friki de la tecnologia, empeze a meterme en el mundillo a finales de 2015, 
          cuando vi por primera vez un video en TED "El futuro del dinero", 
          más adelante encontre articulos sobre el desarrollo de la Blockhain, 
          desde ese entonces no eh parado en aprender.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/profile.png" alt="Joel Menacho - Frontend Developer" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
