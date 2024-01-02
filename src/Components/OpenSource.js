import React, { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { getThemeProp, iconMap } from '../Library/utils'
import { Card, CardArrangement } from '../Library/card'
import { SectionTitle } from '../Library/copy'
import Spacer from '../Library/spacer'

const openSource = [
  {
    title: 'Aimless.js',
    subtitle: 'The missing JS randomness library',
    gitLink: 'https://github.com/ChrisCavs/aimless.js',
    demoLink: 'https://chriscavs.github.io/aimless-demo',
    stars: '819',
  },
  {
    title: 'Rallax.js',
    subtitle: 'Dead simple parallax scrolling',
    gitLink: 'https://github.com/ChrisCavs/rallax.js',
    demoLink: 'https://chriscavs.github.io/rallax-demo',
    stars: '1.5k',
  },
  {
    title: 'Bounds.js',
    subtitle: 'Asynchronous boundary detection',
    gitLink: 'https://github.com/ChrisCavs/bounds.js',
    demoLink: 'https://chriscavs.github.io/bounds-demo',
    stars: '630',
  },
  {
    title: 'T-Writer.js',
    subtitle: 'Native typewriter effect',
    gitLink: 'https://github.com/ChrisCavs/t-writer.js',
    demoLink: 'https://chriscavs.github.io/t-writer-demo',
    stars: '509',
  },
  {
    title: 'Heads-Up.js',
    subtitle: 'Sticky headers that hide on scroll',
    gitLink: 'https://github.com/ChrisCavs/headsup.js',
    demoLink: 'https://chriscavs.github.io/headsup-demo/',
    stars: '18',
  },
  {
    title: 'getClass.react',
    subtitle: 'Better React classes',
    gitLink: 'https://github.com/ChrisCavs/getClass.react',
    demoLink: 'https://github.com/ChrisCavs/getClass.react',
    stars: '16',
  },
]

const OpenSource = () => {
  const { isDesktop } = useContext(ThemeContext)
  const initialItems = isDesktop ? openSource : openSource.slice(0, 4)
  const [sourceItems, setSourceItems] = useState(initialItems)

  const expand = () => setSourceItems(openSource)
  const SeeMoreIcon = iconMap.DownArrow

  return (
    <section className="open-source">
      <SectionTitle title="Open Source" num="01" />
      <Spacer height="39.3px" deskHeight="67.5px" />
      <CardArrangement>
        {sourceItems.map((item) => (
          <Card key={item.title} {...item} />
        ))}
        {!isDesktop && sourceItems.length < openSource.length &&
          <SeeMore onClick={expand}>
            <span>See more</span>
            <IconContainer>
              <SeeMoreIcon />
            </IconContainer>
          </SeeMore>
        }
      </CardArrangement>
    </section>
  )
}

const SeeMore = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 34.23px;
  padding: 0 15px;
  margin-top: 18.62px;
  border-radius: 17.12px;
  box-sizing: border-box;
  font-size: 12.89px;
  cursor: pointer;
  color: ${getThemeProp('text')};
  border: 2px solid ${getThemeProp('line')};
  background-color: ${getThemeProp('background')};
`

const IconContainer = styled.div`
  width: 13.95px;
`

export default OpenSource