import React, { useContext, useState } from 'react'
import { MobileContext } from '../App'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { Home, Folder, Code, ContactPage } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Footer = (props) => {
    const [value, setValue] = useState(0)
    const navigate = useNavigate()
    const isMobile = useContext(MobileContext)
    const bottomNav = isMobile ? (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2}} elevation={3}>
            <BottomNavigation showLabels value={value} onChange={(e, newVal) => setValue(newVal)}>
                <BottomNavigationAction label="Home" icon={<Home />} onClick={() => navigate('/')} />
                <BottomNavigationAction label="Projects" icon={<Folder />} onClick={() => navigate('/projects')} />
                <BottomNavigationAction label="OpenSource" icon={<Code />} onClick={() => navigate('/open-source')} />
                <BottomNavigationAction label="Contact" icon={<ContactPage />} onClick={() => navigate('/contact')} />
            </BottomNavigation>
        </Paper>
    ) : null

    return (
        <>{bottomNav}</>
    )
}

export default Footer