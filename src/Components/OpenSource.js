import React, { useContext } from 'react'
import { Box } from '@mui/material'
import CardWrapper from './CardWrapper'
import { MobileContext } from '../App'

const openSource = [
    {
        title: 'Aimless.js',
        body: 'The missing JS randomness library',
        gitUrl: 'https://github.com/ChrisCavs/aimless.js',
        demoUrl: 'https://chriscavs.github.io/aimless-demo',
    },
    {
        title: 'Rallax.js',
        body: 'Dead simple parallax scrolling',
        gitUrl: 'https://github.com/ChrisCavs/rallax.js',
        demoUrl: 'https://chriscavs.github.io/rallax-demo',
    },
    {
        title: 'Bounds.js',
        body: 'Asynchronous boundary detection',
        gitUrl: 'https://github.com/ChrisCavs/bounds.js',
        demoUrl: 'https://chriscavs.github.io/bounds-demo',
    },
    {
        title: 'T-Writer.js',
        body: 'Native typewriter effect',
        gitUrl: 'https://github.com/ChrisCavs/t-writer.js',
        demoUrl: 'https://chriscavs.github.io/t-writer-demo',
    },
    {
        title: 'Heads-Up.js',
        body: 'Sticky headers that hide on scroll',
        gitUrl: 'https://github.com/ChrisCavs/headsup.js',
        demoUrl: 'https://chriscavs.github.io/headsup-demo/',
    },
    {
        title: 'getClass.react',
        body: 'Better React classes',
        gitUrl: 'https://github.com/ChrisCavs/getClass.react',
    },
    {
        invisible: true,
    }
]

const OpenSource = (props) => {
    const isMobile = useContext(MobileContext)

    return (
        <Box sx={{
            display: 'flex',
            maxWidth: '800px',
            margin: '60px auto',
            marginTop: isMobile ? '20px' : '60px',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
        }}>
            {openSource.map((propObj) => (
                <CardWrapper {...propObj} />
            ))}
        </Box>
    )
}

export default OpenSource