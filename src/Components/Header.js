import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import avatarImage from '../Static/Avatar.png'
import { AppBar, Toolbar, Divider, Box, Button, Typography, Avatar } from '@mui/material'
import { MobileContext } from '../App'

const navItems = [
    {name: 'Projects', route: '/projects'},
    {name: 'Open Source', route: '/open-source'},
    {name: 'Contact', route: '/contact'}
]

const Header = (props) => {
    const isMobile = useContext(MobileContext)
    const navigate = useNavigate()

    const navElements = isMobile ? null : (
        <Box>
            {navItems.map((item) => (
                <Button key={item.name} sx={{ color: '#fff' }} onClick={() => navigate(item.route)}>{item.name}</Button>
            ))}
        </Box>
    )

    return (
        <>
            <AppBar component="nav" sx={{ maxWidth: '800px', left: '50%', transform: 'translateX(-50%)'}}>
                <Toolbar>
                    <Box sx={{ display: 'flex', flexGrow: 1, maxWidth: '800px', alignItems: 'center', margin: 'auto' }}>
                        <Avatar alt="Chris Cavalea" src={avatarImage} onClick={() => navigate('/')} sx={{ cursor: 'pointer' }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '16px'}}>Chris Cavalea</Typography>
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