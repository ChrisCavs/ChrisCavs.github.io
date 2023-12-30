import React, { useContext } from 'react'
import jump from 'jump.js'
import avatarImage from '../Static/avatar.jpeg'
import { MobileContext } from '../App'
import Block from '../Library/block'
import { StarButton, StyledButton } from '../Library/button'
import { ContactLink, Link } from '../Library/link'
import { Card, ImageCard } from '../Library/card'
import chriscavsImage from '../Static/chriscavs.png'
import StyledIcon from '../Library/icon'
import { iconMap } from '../Library/utils'
import Spacer from '../Library/spacer'
import { PageSubtitle, PageTitle, SectionTitle } from '../Library/copy'

const navItems = [
    { name: 'Open Source', onClick: () => jump('.open-source')},
    { name: 'Projects', onClick: () => jump('.projects')},
    { name: 'Contact', onClick: () => jump('.contact')},
]

const Header = () => {
    return (
        <>
            <Block icon="Eye" text="Frontend developer" />
            <StyledButton>
                GitHub
            </StyledButton>
            <StarButton>
                1.5k
            </StarButton>
            <Link>Open Source</Link>
            <Card
                title="AIMLESS.JS"
                subtitle="The missing js randomness library"
                stars="612"
                gitLink="https://github.com/ChrisCavs/aimless.js"
                demoLink="https://chriscavs.github.io/aimless-demo"
            />
            <ImageCard
                title="CHRISCAVS.GITHUB.IO"
                subtitle="My personal website, made with React"
                gitLink="https://github.com/ChrisCavs/ChrisCavs.github.io"
                src={chriscavsImage}
                alt="personal website"
            />
            <ContactLink Icon={iconMap['Github']} text="GitHub"/>
            <SectionTitle title="Contact" num="04" />
            <PageTitle>Chris Cavalea</PageTitle>
            <PageSubtitle>I'm a frontend developer building bespoke user interfaces that deliver a fantastic user experience. I like working with teams of engineers that share my passion, and companies that challenge the status quo.</PageSubtitle>
        </>
    )
}

export default Header