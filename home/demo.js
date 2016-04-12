import { images, copy } from '../content'
import { Banner } from 'rebass'

view Home.Demo {
  <Banner align="center" backgroundImage={images.background.demo}>
    <chatBubbles>
      <ChatBubble repeat={copy.demo.chat} {..._} />
    </chatBubbles>
  </Banner>

  $chatBubbles = {
    margin: [0, '30%'],
  }
}

view ChatBubble {
  <p>{view.props.text}</p>

  let fromMe = view.props.fromMe
  const toFromStyling = {
    background: fromMe ? '#E5E5EA' : '#36A2F8',
    color: fromMe ? 'black' : 'white',
    marginLeft: fromMe ? 'auto' : '0',
    marginRight: fromMe ? '0' : 'auto',
  }

  $ = [toFromStyling, {
    borderRadius: 22,
    margin: [10],
    maxWidth: '80%',
    fontSize: 18,
    textAlign: 'left',
  }]

  $p = {
    margin: [10, 0],
    padding: [0, 22],
  }
}
