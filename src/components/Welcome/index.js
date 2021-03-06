import { h } from 'preact'
import Title from '../Title'
import theme from '../Theme/style.css'
import style from './style.css'
import {preventDefaultOnClick} from '../utils'
import Button from '../Button'
import { trackComponent } from '../../Tracker'
import {localised} from '../../locales'

const localisedDescriptions = translate =>
  [translate('welcome.description_p_1'), translate('welcome.description_p_2')]

const Welcome = ({title, descriptions, nextStep, translate}) => {
  const welcomeTitle = title ? title : translate('welcome.title')
  const welcomeDescriptions = descriptions ? descriptions : localisedDescriptions(translate)
  return (
    <div>
      <Title title={welcomeTitle} />
      <div className={theme.thickWrapper}>
        <div className={style.text}>
          {welcomeDescriptions.map(description => <p>{description}</p>)}
        </div>
        <Button onClick={preventDefaultOnClick(nextStep)} variants={['centered', 'primary']}>
          {translate('welcome.next_button')}
        </Button>
      </div>
    </div>
  )
}

export default trackComponent(localised(Welcome))
