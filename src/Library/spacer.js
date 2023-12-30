import React from "react"

const Spacer = ({ width, height }) => (
    <span style={{
        display: `${width ? 'inline-block' : 'block'}`,
        width: `${width || '0px'}`,
        height: `${height || '0px'}`
    }} />
)

export default Spacer