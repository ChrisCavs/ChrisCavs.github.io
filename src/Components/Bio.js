import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { iconMap, ifBigDesktop, ifDesktop, translateAnimation, useInViewOnce } from '../Library/utils'
import { PageSubtitle, PageTitle } from '../Library/copy'
import { ContactLink } from '../Library/link'
import Spacer from '../Library/spacer'

import avatar from '../Static/avatar.jpeg'

const Bio = () => {
  const { isBigDesktop } = useContext(ThemeContext)
  const { ref, inView } = useInViewOnce()

  return (
    <BioContainer ref={ref} className="bio" $inView={inView}>
      <LeftSide>
        <AvatarContainer $inView={inView} $idx={1}>
          <Avatar alt="avatar" src={avatar} />
        </AvatarContainer>
        <Spacer height="20px" deskHeight="20px" />
        <BioPageTitle $inView={inView} $idx={2}>
          Chris Cavalea
        </BioPageTitle>
        <Spacer height="20px" deskHeight="20px" />
        <ContactContainer $inView={inView} $idx={3}>
          <ContactLink
            text="GitHub"
            Icon={iconMap.Github}
            href="https://github.com/ChrisCavs"
          />
          <Spacer height="14px" deskWidth="36px" />
          <ContactLink
            text="LinkedIn"
            Icon={iconMap.Linkedin}
            href="https://www.linkedin.com/in/chriscavalea"
          />
          <Spacer height="14px" deskWidth="36px" />
          <ContactLink
            text="Email"
            Icon={iconMap.Email}
            href="mailto:chriscavs94@gmail.com"
          />
        </ContactContainer>
        {!isBigDesktop && <Spacer height="34px" deskHeight="48px" />}
      </LeftSide>
      <RightSide $inView={inView} $idx={4}>
        <PageSubtitle>
          I'm a frontend developer building bespoke user interfaces 
          that deliver a fantastic user experience. I like working 
          with teams of engineers that share my passion, and companies that 
          challenge the status quo.
        </PageSubtitle>
      </RightSide>
    </BioContainer>
  )
}

const BioContainer = styled.section`
  ${ifBigDesktop(`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `)}
`

const BioPageTitle = styled(PageTitle)`
  ${translateAnimation()}
`

const RightSide = styled.div`
  ${translateAnimation()}

  ${ifBigDesktop(`
    max-width: 558px;
  `)}
`

const ContactContainer = styled.div`
  ${translateAnimation()}

  ${ifDesktop(`
    display: flex;
  `)}
`

const AvatarContainer = styled.div`
  ${translateAnimation()}
  width: 53.9px;
  height: 53.9px;
  border-radius: 17.23px;
  overflow: hidden;

  ${ifDesktop(`
    width: 68.86px;
    height: 68.86px;
    border-radius: 22px;
  `)}
`

const Avatar = styled.img`
  width: 100%;
`

const LeftSide = styled.div``

export default Bio