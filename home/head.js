import { device } from '../constants'
import { copy, images } from '../content'
import { Banner } from 'rebass'

view Home.Head {
  <Banner align="center" backgroundImage={images.background.head}>
    <headerText>
      <h3>{copy.head.title}</h3>
      <p>{copy.head.subtitle}</p>
      <MessengerButton
        text={copy.head.callToAction}
        iconSize={33}
        fontSize="22px"
        borderWidth='inherit'
        />
    </headerText>
  </Banner>

  $headerText = {
    paddingRight: '33%',
    textAlign: 'left',

    [device.small]: {
      padding: 'inherit',
      textAlign: 'center',
    },
  }

  $h3 = {
    margin: [2, 0],

    [device.small]: {
    },
  }

  $p = {
    margin: [2, 0],
    fontSize: '.75em',
  }

  $MessengerButton = {
    marginTop: 12,
  }
}
