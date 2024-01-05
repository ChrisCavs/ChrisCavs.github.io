import React from 'react'
import styled from 'styled-components'

import { getThemeProp, translateAnimation, useInViewOnce } from './utils'

const Line = () => {
  const { ref, inView } = useInViewOnce()
  return <LineBreak ref={ref} $inView={inView} />
}

const LineBreak = styled.div`
  ${translateAnimation()}
  width: 100%;
  height: 2px;
  background-color: ${getThemeProp('line')};
`

export default Line