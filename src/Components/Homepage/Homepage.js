import React, { useContext } from 'react'
import { MobileContext } from '../../App'
import SearchBox from './SearchBox'

import { Typography, Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Announcement, Build, Code, Favorite, Group, Lightbulb, PestControl, Science, ScreenShare, Web } from '@mui/icons-material'

const Homepage = (props) => {
    const isMobile = useContext(MobileContext)

    return (
        <Box sx={{
            maxWidth: '800px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: isMobile ? '0' : '40px',
            marginBottom: '60px',
        }}>
            <Box sx={{
                margin: isMobile ? '20px 40px 20px 40px' : '0',
                display: isMobile ? 'block' : 'flex',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                <Box sx={{margin: '0 0 0 26px', marginBottom: isMobile ? '20px' : '0', flex: 1}}>
                    <Typography variant='h6'>I am a</Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Web />
                            </ListItemIcon>
                            <ListItemText primary="Frontend developer" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Code />
                            </ListItemIcon>
                            <ListItemText primary="JavaScript expert" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <PestControl />
                            </ListItemIcon>
                            <ListItemText primary="Obsession bug hunter" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Lightbulb />
                            </ListItemIcon>
                            <ListItemText primary="Practical problem-solver" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Science />
                            </ListItemIcon>
                            <ListItemText primary="React/Redux Enthusiast" />
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{margin: '0 0 0 26px', flex: 1}}>
                    <Typography variant='h6'>I like to</Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Build beautiful and intuitive experiences at scale" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Announcement />
                            </ListItemIcon>
                            <ListItemText primary="Challenge the status quo" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Build />
                            </ListItemIcon>
                            <ListItemText primary="Optimize performance" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ScreenShare />
                            </ListItemIcon>
                            <ListItemText primary="Develop open-source projects" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Favorite />
                            </ListItemIcon>
                            <ListItemText primary="Work with engineers that share my passion" />
                        </ListItem>
                    </List>
                </Box>
            </Box>
            {!isMobile && <>
                <Divider sx={{ width: '100%', borderBottomWidth: 2, margin: isMobile ? '20px 0' : '40px 0' }} />
                <SearchBox />
            </>}
        </Box>
    )
}

export default Homepage