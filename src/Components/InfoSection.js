import React, { useContext } from "react"
import { Announcement, Build, Code, Favorite, Group, Lightbulb, PestControl, Web } from "@mui/icons-material"
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { MobileContext } from "../App"

const leftItems = [
    { icon: <Web />, name: 'Frontend developer'},
    { icon: <Code />, name: 'JavaScript expert'},
    { icon: <PestControl />, name: 'Obsessive bug hunter'},
    { icon: <Lightbulb />, name: 'Practical problem-solver'},
]

const rightItems = [
    { icon: <Group />, name: 'Builds intuitive experiences at scale' },
    { icon: <Announcement />, name: 'Challenges the status quo' },
    { icon: <Build />, name: 'Optimizes performance' },
    { icon: <Favorite />, name: 'Works with other passionate engineers' },
]

const getListGroup = (items) => (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <List disablePadding>
            {items.map(({ icon, name }) => (
                <ListItem>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    </Box>
)

const InfoSection = () => {
    const isMobile = useContext(MobileContext)
    return (
        <Box sx={{
            display: isMobile ? 'block' : 'flex',
            justifyContent: 'space-around',
            width: '100%',
        }}>
            {getListGroup(leftItems, 'About Me', isMobile)}
            {!isMobile && getListGroup(rightItems, 'I like to', isMobile)}
        </Box>
    )
}

export default InfoSection