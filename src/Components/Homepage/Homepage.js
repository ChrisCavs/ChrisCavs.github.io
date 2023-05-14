import React, { useContext } from 'react'
import { MobileContext } from '../../App'
import SearchBox from './SearchBox'

import { Typography, Box } from '@mui/material'

import Writer from './Writer'

const Homepage = (props) => {
    const isMobile = useContext(MobileContext)
    const writer = isMobile ? null : <Writer />
    const staticText = isMobile ? (
        <Typography variant="h4" component="div">
            Frontend Developer
        </Typography>
    ) : null

    return (
        <Box sx={{
            maxWidth: '1000px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: isMobile ? '150px' : '200px',
            marginTop: isMobile ? '30px' : '20px'
        }}>
            {writer}
            {staticText}
            <SearchBox />
        </Box>
    )
}

export default Homepage