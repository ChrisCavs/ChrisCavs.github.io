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

const StyledLink = styled.span`
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.22px;
    color: ${getThemeProp('text')}
`

export default Link