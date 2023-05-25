import React, { useContext } from 'react'
import { AppBar, Toolbar, Divider, Box, Button, Typography, Avatar } from '@mui/material'
import jump from 'jump.js'
import avatarImage from '../Static/Avatar.png'
import { MobileContext } from '../App'

const navItems = [
    { name: 'Open Source', onClick: () => jump('.open-source', { offset: -86 })},
    { name: 'Projects', onClick: () => jump('.projects', { offset: -86 })},
    { name: 'Contact', onClick: () => jump('.contact', { offset: -86 })}
]

const Header = () => {
    const isMobile = useContext(MobileContext)

    const navElements = isMobile ? null : (
        <Box>
            {navItems.map(({ name, onClick }) => (
                <Button
                    key={name}
                    sx={{ color: '#fff' }}
                    onClick={onClick}
                >
                    {name}
                </Button>
            ))}
        </Box>
    )

    return (
        <>
            <AppBar 
                component="nav"
                sx={{
                    maxWidth: '800px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                <Toolbar>
                    <Box sx={{
                        display: 'flex',
                        flexGrow: 1,
                        maxWidth: '800px',
                        alignItems: 'center',
                        margin: 'auto'
                    }}>
                        <Avatar
                            alt="Chris Cavalea"
                            src={avatarImage}
                            sx={{ cursor: 'pointer' }}
                            onClick={() => jump('.about', { offset: -86 })}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, marginLeft: '16px'}}
                        >
                            Chris Cavalea
                        </Typography>
                        <Divider />
                        {navElements}
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default Header