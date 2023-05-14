import React, { useRef, useEffect } from 'react'
import Typewriter from 't-writer.js'
import { Typography } from '@mui/material'

let writerStarted = false

const Writer = (props) => {
    const target = useRef(null)

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
            writerStarted = true
        }
    }, [])

    return (
        <Typography ref={target} variant="h2" component="div" color />
    )
}

export default Writer