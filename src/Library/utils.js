import { ReactComponent as Star } from '../Icons/star.svg'
import { ReactComponent as Github } from '../Icons/github.svg'
import { ReactComponent as Linkedin } from '../Icons/linkedin.svg'
import { ReactComponent as Email } from '../Icons/email.svg'
import { ReactComponent as DownArrow } from '../Icons/downArrow.svg'

const iconMap = {
  Star,
  Github,
  Linkedin,
  Email,
  DownArrow,
}

const getThemeProp = (key) => ({ theme }) => theme[key]
const ifDesktop = (styles) => ({ theme }) => theme['isDesktop'] && styles
const ifBigDesktop = (styles) => ({ theme }) => theme['isBigDesktop'] && styles

export {
  iconMap,
  getThemeProp,
  ifDesktop,
  ifBigDesktop,
}