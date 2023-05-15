import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const Contact = (props) => {
    return (
        <Box sx={{ margin: '40px auto', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton href="https://github.com/ChrisCavs" target="_blank">
                        <ListItemIcon>
                            <GitHub />
                        </ListItemIcon>
                        <ListItemText primary="Github" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="https://linkedin.com/in/chriscavalea" target="_blank">
                        <ListItemIcon>
                            <LinkedIn />
                        </ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="mailto:chriscavs94@gmail.com" target="_blank">
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        <ListItemText primary="Email" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Contact