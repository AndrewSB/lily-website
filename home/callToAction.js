import { styles } from '../constants'
import { copy } from '../content'
import { Banner } from 'rebass'

view Home.CallToAction {
  <h1>{copy.callToAction.title}</h1>
  <h3>{copy.callToAction.subtitle}</h3>
  <MessengerButton
    text={copy.callToAction.buttonTitle}
    iconSize={33}
    fontSize="22px"
    borderWidth='inherit'
    />

  $ = [styles.flexAndCenter, {
    background: 'url(' + copy.callToAction.backgroundImage + ')',
    color: 'white',
    flexDirection: 'column',
    padding: [55, 33],
  }]

  $h3 = {
    margin: [8, 0, 44, 0],
  }
}
