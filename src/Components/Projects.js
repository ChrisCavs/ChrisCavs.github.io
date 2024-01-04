import React from 'react'

import { CardArrangement, ImageCard } from '../Library/card'
import { SectionTitle } from '../Library/copy'
import Spacer from '../Library/spacer'

import MeadImg from '../Static/mead.png'
import ChrisCavsImg from '../Static/chriscavs.png'

const projects = [
  {
    title: 'ChrisCavs.Github.io',
    subtitle1: 'My personal website,',
    subtitle2: 'made with React',
    gitLink: 'https://github.com/ChrisCavs/ChrisCavs.github.io',
    src: ChrisCavsImg,
    alt: 'Chris Cavalea personal website project',
  },
  {
    title: 'Mead',
    subtitle1: 'A fancy Medium clone,',
    subtitle2: 'built on React/Redux + Rails',
    gitLink: 'https://github.com/ChrisCavs/Mead',
    src: MeadImg,
    alt: 'Mead, a Medium clone',
  },
]

const Projects = () => (
  <section className="projects">
    <SectionTitle title="Projects" num="03" />
    <Spacer height="39.3px" deskHeight="67.5px" />
    <CardArrangement>
      {projects.map((item) => (
        <ImageCard key={item.title} {...item} />
      ))}
    </CardArrangement>
  </section>
)

export default Projects