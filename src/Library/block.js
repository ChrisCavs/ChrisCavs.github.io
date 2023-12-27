import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../App';

const iconMap = {
}

const Block = (props) => {
    const theme = useContext(ThemeContext)
    return (
        <StyledBlock theme={theme}>
            {iconMap[props.icon]}
        </StyledBlock>
    )
}

const StyledBlock = styled.div`

`