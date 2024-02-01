import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome! <br />
        I'm Sharaf Syed
      </SectionTitle>
      <SectionText center>
        Lorem ipsum dolor sit amet
      </SectionText>
      <Button onclick = {() => window.location= 'https://'}>Learn More</Button>

    </LeftSection>
  </Section>
);

export default Hero;