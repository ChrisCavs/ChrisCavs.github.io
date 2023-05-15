import React, { useRef, useEffect, useState } from 'react'
import Typewriter from 't-writer.js'
import { Typography } from '@mui/material'

const Writer = (props) => {
    const target = useRef(null)
    const [writerStarted, setStarted] = useState(false);

    useEffect(() => {
        if (target.current && !writerStarted) {
            const writer = new Typewriter(target.current, { loop: true })
            writer.strings(
                2000,
                'JavaScript Expert...',
                'Cat Enthusiast...',
                'Relentless Bug Hunter...',
                'Tall Enough...',
                'React/Redux Wizard...',
                'Afraid of Airplanes...',
                'Pixel-Perfect Perfectionist...',
                'Loves Pizza...',
                'Performance Prioritizer...',
                'Coffee Aficionado...',
                'TypeScript Technologist...',
            ).start()
            setStarted(true)
        }
    }, [writerStarted])

    return (
        <Typography ref={target} variant="h2" component="div" color />
    )
}

export default Writer