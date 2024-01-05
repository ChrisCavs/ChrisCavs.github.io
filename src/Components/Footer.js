import React from 'react'
import styled from 'styled-components'

import { iconMap, translateAnimation, useInViewOnce } from '../Library/utils'
import { PageTitle, SectionTitle } from '../Library/copy'
import { ContactLink } from '../Library/link'
import Spacer from '../Library/spacer'

const Footer = () => {
  const { ref, inView } = useInViewOnce()
  return (
    <footer className="contact">
      <SectionTitle title="Contact" num="04" />
      <Spacer height="45px" deskHeight="87px" />
      <FooterPageTitle ref={ref} $inView={inView} $idx={1}>
        Let's work together!
      </FooterPageTitle>
      <Spacer height="20px" deskHeight="28px" />
      <ContactContainer $inView={inView} $idx={2}>
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
}

const FooterPageTitle = styled(PageTitle)`
  ${translateAnimation()}
`

const ContactContainer = styled.div`
  ${translateAnimation()}
  display: flex;
`

export default Footer