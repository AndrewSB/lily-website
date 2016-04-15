import { device, styles } from '../constants'
import { copy, images } from '../content'
import Sticky from 'react-stickynode'

view Home.Header {
  let headerOpacity = 0
  let textColor = 'white'
  on.scroll(window, () => {
    let normalizedDecimalScroll = Math.min(1, window.pageYOffset / window.outerHeight)
    headerOpacity = normalizedDecimalScroll

    let rgbVal = Math.ceil((1 - normalizedDecimalScroll) * 255)
    textColor = ['rgb(', ',', ',', ')'].join(rgbVal)
  })

  <Sticky enabled={true} top={0}>
    <phantomBackground />
      <content>
        <left>
          <h1>{copy.header.title}</h1>
        </left>
        <right>
          <MessengerButton backgroundColor='transparent' fadeText={true} shrink={true} />
        </right>
      </content>
  </Sticky>

  $ = {
    position: 'absolute',
    width: '100%',
  }

  $h1 = {
    color: textColor,
  }

  $phantomBackground = {
    height: 80,
    opacity: headerOpacity,
    backgroundColor: '#fff',
  }

  $content = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    padding: [0, 25, 0, 12],
    height: 80,
    width: '100%',

    [device.small]: {
      padding: [0],
    },
  }

  $left = [styles.flexAndCenter, {
    marginLeft: 50,
    textAlign: 'left',
  }]

  $right = [styles.flexAndCenter, {
    marginRight: 50,
    textAlign: 'right',

    [device.small]: {
      marginRight: 22,
    },
  }]
}
