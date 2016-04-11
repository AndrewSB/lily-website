import { device } from '../constants'
import { images } from '../content'
import { Banner } from 'rebass'

view Home.Head {
  <Banner align="center" backgroundImage={images.background.head}>
    <headerText>
      <h3>We make incorporation short and easy</h3>
      <p>Lily is a service that connects you to experts to help you incorporate your business</p>
      <MessengerButton text="Text us" iconSize={33} fontSize="22px" borderWidth='inherit'/>
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
    margin: [2, 0, 2, 0],
  }

  $p = {
    margin: [2, 0, 2, 0],
    fontSize: '.75em',
  }

  $MessengerButton = {
    marginTop: 12,
  }
}
