import React from 'react'
import avatarImage from '../Static/Avatar.png'
import { AppBar, Toolbar, Divider, Box, Button, Typography, Avatar } from '@mui/material'

const navItems = ['Projects', 'Open Source', 'Contact']

const Header = (props) => {
    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                    <Avatar alt="Chris Cavalea" src={avatarImage}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '16px'}}>Chris Cavs</Typography>
                    <Divider />
                    <Box>
                        {navItems.map((item) => (
                            <Button key={item} sx={{color: '#fff'}}>{item}</Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default Header