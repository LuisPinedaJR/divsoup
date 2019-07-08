import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 0% center;
  background-size: cover;
  height: 50vw;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  /* background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00); */
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 calc((100vw / 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    margin-top: 2rem;
    margin-right: 2rem;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
    margin-right: 5.5rem;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql``);
  return (
    <ImageBackground>
      <TextBox>
        <h1>Div Soup Blog &hearts;</h1>
        <p>
          By Luis Pineda
          <br />
          <Link to="/about/">about me &darr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
