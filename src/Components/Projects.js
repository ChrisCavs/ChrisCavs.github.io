import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'

import MeadImg from '../Static/Mead.png'
import ChrisCavsImg from '../Static/ChrisCavs.png'
import CardWrapper from './CardWrapper'
import { MobileContext } from '../App'

const projects = [
    {
        title: 'ChrisCavs.Github.io',
        body: 'My personal website, made with React + Material UI',
        gitUrl: 'https://github.com/ChrisCavs/ChrisCavs.github.io',
        image: {
            image: ChrisCavsImg,
            title: 'Chris Cavalea personal website project',
        },
    },
    {
        title: 'Mead',
        body: 'A fancy Medium clone, built on React/Redux + Rails',
        gitUrl: 'https://github.com/ChrisCavs/Mead',
        image: {
            image: MeadImg,
            title: 'Mead, a Medium clone',
        },
    },
]

const Projects = (props) => {
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
            {projects.map((propObj) => (
                <CardWrapper {...propObj} />
            ))}
            <Box sx={{width: '350px', margin: '20px'}}>
                <Typography variant="h6" sx={{marginBottom: '10px'}}>More to come</Typography>
                <Typography variant="body1">A ChatGPT integration, Lessons in React, who knows what else...</Typography>
            </Box>
        </Box>
    )
}

export default Projects