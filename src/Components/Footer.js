import React from 'react'
import styled from 'styled-components'

import { PageTitle, SectionTitle } from '../Library/copy'
import { ContactLink } from '../Library/link'
import { iconMap } from '../Library/utils'
import Spacer from '../Library/spacer'

const Footer = () => (
  <footer className="contact">
    <SectionTitle title="Contact" num="04" />
    <Spacer height="44.8px" deskHeight="87px" />
    <PageTitle>Let's work together!</PageTitle>
    <Spacer height="20px" deskHeight="27.5px" />
    <ContactContainer>
      <ContactLink
        isFooter
        text="LinkedIn"
        Icon={iconMap.Linkedin}
        href="https://www.linkedin.com/in/chriscavalea"
      />
      <Spacer width="25px" deskWidth="39px" />
      <ContactLink
        isFooter
        text="Email"
        Icon={iconMap.Email}
        href="mailto:chriscavs94@gmail.com"
      />
    </ContactContainer>
    <Spacer height="69px" deskHeight="79px" />
  </footer>
)

const ContactContainer = styled.div`
  display: flex;
`

export default Footer