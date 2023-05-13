import React, { useState } from 'react'
import { Autocomplete, TextField, Button, Box } from '@mui/material'

const SearchBox = (props) => {
    const [selectedOption, setSelected] = useState(null)

    const onClick = () => {
        console.log(selectedOption)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '380px' }}>
            <Autocomplete

                options={['hello', 'test']}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Looking for something?" />}
                onChange={(e) => setSelected(e.target.innerText)}
            />
            <Button variant="contained" size="large" disabled={!selectedOption} onClick={onClick}>Go</Button>
        </Box>
    )
}

export default SearchBox