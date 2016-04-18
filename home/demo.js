import { device } from '../constants'
import { images, copy } from '../content'
import { spring, Motion } from 'react-motion'
import { Banner } from 'rebass'

view Home.Demo {
  let visibleBubbles = []

  on.every(2 * 1000, () => {
    let newChatBubble = copy.demo.chat[visibleBubbles.length]
    if (newChatBubble !== undefined) {
      visibleBubbles.push(newChatBubble)
    }
  })

  <Banner style={{margin: 0, padding: ['auto', 0]}} align="center" backgroundImage={images.background.demo}>
    <chatBubbles>
        <Motion repeat={visibleBubbles} defaultStyle={{x: -40}} style={{x: spring(0) }}>
          {i => <ChatBubble style={{marginBottom: i.x}} {..._} />}
        </Motion>
    </chatBubbles>
  </Banner>

  $chatBubbles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: [10, '15%', 10, '50%'],

    [device.small]: {
      margin: [10, '12%'],
    },
  }
}

view ChatBubble {
  <bubble>
    <p>{view.props.text}</p>
  </bubble>

  let fromMe = view.props.fromMe
  const toFromStyling = {
    background: fromMe ? '#36A2F8' : '#E5E5EA',
    color: fromMe ? 'white' : 'black',
  }

  $ = {
    maxWidth: '75%',
    alignSelf: fromMe ? 'flex-end' : 'flex-start',
    marginLeft: fromMe ? '20%' : 0,
    marginRight: fromMe ? 0 : '20%',
  }

  $bubble = [toFromStyling, {
    display: 'inline-block',
    borderRadius: 25,
    margin: [15, 1],
    fontSize: 18,
    textAlign: 'left',
  }]

  $p = {
    fontSize: 15,
    margin: [10, 0],
    padding: [10, 14],
  }
}
