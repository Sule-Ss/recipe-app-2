import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Şule S.</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h1>Hi, I'am Şule !</h1>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
        I know JS, ReactJS, Django, NodeJS, MongoDB, SQL, Python, AWS Services...
        </h4>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
