import { styles } from '../constants'
import { copy, images } from '../content'
import { Banner } from 'rebass'

view Home.CallToAction {
  <h1>{copy.callToAction.title}</h1>
  <h3>{copy.callToAction.subtitle}</h3>
  <MessengerButton
    backgroundColor={'orange'}
    text={copy.callToAction.buttonTitle}
    iconSize={33}
    fontSize="22px"
    borderWidth='inherit'
    />

  $ = [styles.flexAndCenter, {
    background: 'url(' + images.background.callToAction + ') no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    flexDirection: 'column',
    padding: [55, 33],
  }]

  $h3 = {
    margin: [8, 0, 44, 0],
  }
}
