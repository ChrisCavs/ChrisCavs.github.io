import React from "react"
import styled from "styled-components"

import { getThemeProp } from "./utils"

const BlockIconWrapper = styled.div`
    width: 14px;
    height: 10.4px;
    margin-right: 10px;
    margin-left: 15px;
`

const StarIconWrapper = styled.div`
    display: inline-block;
    width: 9.6px;
    height: 9.1px;
`

const ContactIconWrapper = styled.div`
    display: flex;
    width: 27px;
    height: 27px;
    padding: 6px;
    box-sizing: border-box;
    border-radius: 8.5px;
    border: 1px solid ${getThemeProp('secondary')};
`

const wrapperMap = {
    block: BlockIconWrapper,
    star: StarIconWrapper,
    contact: ContactIconWrapper,
}

const StyledIcon = ({ Icon, type }) => {
    const Wrapper = wrapperMap[type]
    return (
        <Wrapper>
            <Icon fill="currentColor" stroke="currentColor" />
        </Wrapper>
    )
}



export default StyledIcon