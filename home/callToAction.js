import { styles } from '../constants'
import { copy } from '../content'

view Home.CallToAction {
  <h2>{copy.callToAction.title}</h2>
  <h4>{copy.callToAction.subtitle}</h4>
  <MessengerButton
    text={copy.callToAction.buttonTitle}
    iconSize={33}
    fontSize="22px"
    borderWidth='inherit'
    />

  $ = [styles.flexAndCenter, {
    color: 'white',
    flexDirection: 'column',
    background: '#555555',
    padding: [33, 33],
  }]

  $h2 = {
    padding: [0],
  }

  $h4 = {
    padding: [0],
  }
}
