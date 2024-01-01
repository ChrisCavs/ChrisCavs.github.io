import { ReactComponent as ArrowUp } from '../Icons/arrowUp.svg'
import { ReactComponent as Bug } from '../Icons/bug.svg'
import { ReactComponent as Check } from '../Icons/check.svg'
import { ReactComponent as Eye } from '../Icons/eye.svg'
import { ReactComponent as Gear } from '../Icons/gear.svg'
import { ReactComponent as Person } from '../Icons/person.svg'
import { ReactComponent as Js } from '../Icons/js.svg'
import { ReactComponent as Question } from '../Icons/question.svg'
import { ReactComponent as Star } from '../Icons/star.svg'
import { ReactComponent as Github } from '../Icons/github.svg'
import { ReactComponent as Linkedin } from '../Icons/linkedin.svg'
import { ReactComponent as Email } from '../Icons/email.svg'

const iconMap = {
    Eye,
    ArrowUp,
    Bug,
    Check,
    Gear,
    Person,
    Js,
    Question,
    Star,
    Github,
    Linkedin,
    Email,
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