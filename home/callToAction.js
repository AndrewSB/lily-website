import { device, styles } from '../constants'
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
    paddingHeight="9px"
    borderWidth='inherit'
    />

  $ = [styles.flexAndCenter, {
    textAlign: 'center',
    background: 'url(' + images.background.callToAction + ') no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    flexDirection: 'column',
    padding: [100, 33],
  }]

  $h1 = {
    marginBottom: 8
  }

  $h3 = {
    margin: [8, 0, 44, 0],
    fontWeight: 'inherit',
  }
}
