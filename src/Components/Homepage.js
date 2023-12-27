import React, { useContext } from 'react'
import { MobileContext } from '../App'

// import { Box, Divider, Typography } from '@mui/material'
// import InfoSection from './InfoSection'
// import OpenSource from './OpenSource'
// import Projects from './Projects'
// import Contact from './Contact'

// const sectionHeader = (text, classname, marginBottom) => (
//     <Typography
//         variant='h6'
//         className={classname}
//         sx={{
//             margin: '0 0 40px 10px',
//             marginBottom: marginBottom
//         }}
//     >
//         {text}
//     </Typography>
// )

// const divider = (isMobile) => (
//     <Divider sx={{
//         width: '100%',
//         margin: `${isMobile? '30px' : '40px'} 0`
//     }} />
// )

// const Homepage = (props) => {
//     const isMobile = useContext(MobileContext)

//     return (
//         <Box sx={{
//             maxWidth: '800px',
//             margin: '0 auto',
//             display: 'flex',
//             flexDirection: 'column',
//             marginTop: isMobile ? '10px' : '20px',
//             marginBottom: '160px',
//         }}>
//             {sectionHeader('About Me', 'about', '12px')}
//             <InfoSection />
//             {divider(isMobile)}
//             {sectionHeader('Open Source', 'open-source')}
//             <OpenSource />
//             {divider(isMobile)}
//             {sectionHeader('Projects', 'projects')}
//             <Projects />
//             {divider(isMobile)}
//             {sectionHeader('Contact', 'contact')}
//             <Contact />
//         </Box>
//     )
// }

// export default Homepage