import React from "react"

const Spacer = ({ width, height }) => (
    <span style={{
        display: 'inline-block',
        width: `${width || '0px'}`,
        height: `${height || '0px'}`
    }} />
)

export default Spacer