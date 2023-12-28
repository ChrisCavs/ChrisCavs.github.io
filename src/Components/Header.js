import React, { useContext } from 'react'
import jump from 'jump.js'
import avatarImage from '../Static/avatar.jpeg'
import { MobileContext } from '../App'
import Block from '../Library/block'
import { StarButton, StyledButton } from '../Library/button'
import Link from '../Library/link'

const navItems = [
    { name: 'Open Source', onClick: () => jump('.open-source')},
    { name: 'Projects', onClick: () => jump('.projects')},
    { name: 'Contact', onClick: () => jump('.contact')},
]

const Header = () => {
    const isMobile = useContext(MobileContext)

    return (
        <>
            <Block icon="Eye" text="Frontend developer" />
            <StyledButton variant="primary">
                GitHub
            </StyledButton>
            <StarButton>
                1.5k
            </StarButton>
            <Link>Open Source</Link>
        </>
    )
}

export default Header