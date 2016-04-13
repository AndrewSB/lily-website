import { images, copy } from '../content'
import { spring, Motion } from 'react-motion'
import { Banner } from 'rebass'

view Home.Demo {
  let visibleBubbles = []

  setInterval(() => {
    let newChatBubble = copy.demo.chat[visibleBubbles.length]
    if (newChatBubble !== undefined) {
      addChatBubble(newChatBubble)
    }
  }, 1.5 * 1000)

  let addChatBubble = (chatBubble) => {
    visibleBubbles.push(chatBubble)
  }

  <Banner align="center" backgroundImage={images.background.demo}>
    <chatBubbles>
      <chatBubble repeat={visibleBubbles}>
        <Motion defaultStyle={{x: -40}} style={{x: spring(0) }}>
          {i => <ChatBubble style={{marginBottom: i.x}} {..._} />}
        </Motion>
      </chatBubble>
    </chatBubbles>
  </Banner>

  $chatBubbles = {
    margin: [0, '30%'],
  }
}

view ChatBubble {
  <bubble>
    <p>{view.props.text}</p>
  </bubble>

  let fromMe = view.props.fromMe
  const toFromStyling = {
    background: fromMe ? '#E5E5EA' : '#36A2F8',
    color: fromMe ? 'black' : 'white',
  }

  $ = {
    marginLeft: fromMe ? '20%' : 0,
    marginRight: fromMe ? 0 : '20%'
  }

  $bubble = [toFromStyling, {
    borderRadius: 22,
    margin: [10],
    maxWidth: '70%',
    fontSize: 18,
    textAlign: 'left',
  }]

  $p = {
    fontSize: 16,
    margin: [10, 0],
    padding: [18],
  }
}
