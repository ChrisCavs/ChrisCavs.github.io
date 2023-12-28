import { ReactComponent as ArrowUp } from '../Icons/arrowUp.svg'
import { ReactComponent as Bug } from '../Icons/bug.svg'
import { ReactComponent as Check } from '../Icons/check.svg'
import { ReactComponent as Eye } from '../Icons/eye.svg'
import { ReactComponent as Gear } from '../Icons/gear.svg'
import { ReactComponent as Person } from '../Icons/person.svg'
import { ReactComponent as Js } from '../Icons/js.svg'
import { ReactComponent as Question } from '../Icons/question.svg'
import { ReactComponent as Star } from '../Icons/star.svg'

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
}

const getThemeProp = (key) => ({ theme }) => theme[key]

export {
    iconMap,
    getThemeProp,
}