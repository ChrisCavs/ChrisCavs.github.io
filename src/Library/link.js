import React, { useContext } from "react"
import styled from "styled-components"
import jump from "jump.js"

import { MobileContext } from "../App"
import { getThemeProp } from "./utils"

const Link = ({ children, target }) => {
    const isMobile = useContext(MobileContext)
    const content = isMobile
        ? children
        : `[ ${children} ]`
    return (
        <StyledLink onClick={() => jump(target)}>
            {content}
        </StyledLink>
    )
}

const ContactLink = ({ href, children }) => {
    const isMobile = useContext(MobileContext)
    return (
        <StyledContactLink href={href} target="_blank">
            {children}
        </StyledContactLink>
    )
}

const StyledLink = styled.span`
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.22px;
    cursor: pointer;
    color: ${getThemeProp('text')}
`

const StyledContactLink = styled.a`
    display: flex;
    align-items: center;
    font-size: 13.93px;
    line-height: 16.72px;
    letter-spacing: 0.22px;
    cursor: pointer;
    color: ${getThemeProp('text')}
`

export {
    Link,
    ContactLink,
}