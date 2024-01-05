import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { ReactComponent as Star } from '../Icons/star.svg'
import { ReactComponent as Github } from '../Icons/github.svg'
import { ReactComponent as Linkedin } from '../Icons/linkedin.svg'
import { ReactComponent as Email } from '../Icons/email.svg'
import { ReactComponent as DownArrow } from '../Icons/downArrow.svg'
import { ReactComponent as Bug } from '../Icons/bug.svg'
import { ReactComponent as Check } from '../Icons/check.svg'
import { ReactComponent as Eye } from '../Icons/eye.svg'
import { ReactComponent as Gear } from '../Icons/gear.svg'
import { ReactComponent as Js } from '../Icons/js.svg'
import { ReactComponent as Person } from '../Icons/person.svg'
import { ReactComponent as Question } from '../Icons/question.svg'
import { ReactComponent as ArrowUp } from '../Icons/arrowUp.svg'

const iconMap = {
  Star,
  Github,
  Linkedin,
  Email,
  DownArrow,
  Bug,
  Check,
  Eye,
  Gear,
  Js,
  Person,
  Question,
  ArrowUp,
}

const getThemeProp = (key) => ({ theme }) => theme[key]
const ifDesktop = (styles) => ({ theme }) => theme['isDesktop'] && styles
const ifBigDesktop = (styles) => ({ theme }) => theme['isBigDesktop'] && styles
const ifActive = (styles) => ({ $inView }) => $inView && styles
const ifHover = (styles) => `
  @media (hover: hover) {
    &:hover {
      ${styles}
    }
  }
`
const translateAnimation = () => ({ $idx, $inView }) => `
  opacity: 0;
  transform: translateY(4vh);
  transition: transform 1s, opacity 1s;

  ${$idx ? `
    transition-delay: calc(0.1s * ${$idx});
  ` : ''}

  ${$inView ? `
    opacity: 1;
    transform: translateY(0); 
  ` : ''}
`

const useInViewOnce = () => {
  const [viewState, setViewState] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.4 })

  useEffect(() => {
    if (inView && !viewState) {
      setViewState(true)
    }
  }, [viewState, inView])

  return { ref, inView: viewState }
}

export {
  iconMap,
  getThemeProp,
  ifDesktop,
  ifBigDesktop,
  ifActive,
  ifHover,
  useInViewOnce,
  translateAnimation,
}