import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { useState, useEffect } from 'react';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, TitleSpan } from './HeaderStyles';

const Header = () =>  {

  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };


  return (
  <Container   position = 'fixed' top= '0'>
    <Div1>
      <Link href ="/">
        <a style = {{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size = "3rem" /> <TitleSpan>Portfolio</TitleSpan>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/SharafSyed">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      
      <SocialIcons href = "https://www.linkedin.com/in/sharaf-syed/">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      
      
      <SocialIcons href = "https://instagram.com">
        <AiFillInstagram size = "3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);}

export default Header;
