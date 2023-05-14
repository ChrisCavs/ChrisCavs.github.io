import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Autocomplete, TextField, Button, Box } from '@mui/material'
import { MobileContext } from '../../App'

const optionsAndRoutes = {
    'Projects': '/projects',
    'Open-Source': '/open-source',
    'Contact': '/contact',
    'Email': '/contact',
    'Socials': '/contact',
}

const options = Object.keys(optionsAndRoutes)

const SearchBox = (props) => {
    const isMobile = useContext(MobileContext)
    const [selectedOption, setSelected] = useState(null)
    const navigate = useNavigate()

    const onClick = () => {
        const route = optionsAndRoutes[selectedOption]
        navigate(route)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: isMobile ? '340px' : '380px' }}>
            <Autocomplete
                options={options}
                sx={{ width: isMobile ? 250 : 300 }}
                renderInput={(params) => <TextField {...params} label="Looking For Something?" />}
                onChange={(e) => setSelected(e.target.innerText)}
            />
            <Button variant="contained" size="large" disabled={!selectedOption} onClick={onClick}>Go</Button>
        </Box>
    )
}

export default SearchBox