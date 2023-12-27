import React, { useContext } from 'react'
import jump from 'jump.js'
import { MobileContext } from '../App'

// const Footer = () => {
//     const isMobile = useContext(MobileContext)

//     return isMobile ? (
//         <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2}} elevation={3}>
//             <BottomNavigation showLabels>
//                 <BottomNavigationAction
//                     label="About"
//                     icon={<Home />}
//                     onClick={() => jump('.about', { offset: -86 })}
//                 />
//                 <BottomNavigationAction
//                     label="OpenSource"
//                     icon={<Code />}
//                     onClick={() => jump('.open-source', { offset: -86 })}
//                 />
//                 <BottomNavigationAction
//                     label="Projects"
//                     icon={<Folder />}
//                     onClick={() => jump('.projects', { offset: -86 })}
//                 />
//                 <BottomNavigationAction
//                     label="Contact"
//                     icon={<ContactPage />}
//                     onClick={() => jump('.contact', { offset: -86 })}
//                 />
//             </BottomNavigation>
//         </Paper>
//     ) : null
// }

// export default Footer