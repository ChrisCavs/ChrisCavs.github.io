import React from 'react'
import styled from 'styled-components'

import { ifDesktop } from '../Library/utils'
import { SectionTitle } from '../Library/copy'
import Block from '../Library/block'
import Spacer from '../Library/spacer'

const blockItems = [
  { icon: 'Eye', text: 'Frontend developer' },
  { icon: 'Js', text: 'JavaScript expert' },
  { icon: 'Bug', text: 'Obsessive bug hunter' },
  { icon: 'Check', text: 'Practical problem-solver' },
  { icon: 'ArrowUp', text: 'Builds intuitive experiences at scale' },
  { icon: 'Question', text: 'Challenges the status quo' },
  { icon: 'Gear', text: 'Optimizes performance' },
  { icon: 'Person', text: 'Works with other passionate engineers' },
]

const About = () => (
  <section className="about">
    <SectionTitle title="About" num="01" />
    <Spacer height="39px" deskHeight="65px" />
    <AboutContainer>
      {blockItems.map((item, idx) => 
        <Block key={idx} {...item} />)}
    </AboutContainer>
  </section>
)

const AboutContainer = styled.div`
  width: 100%;

  ${ifDesktop(`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `)}
`

export default About