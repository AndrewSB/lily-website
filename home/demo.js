import { images, chat } from '../content'
import { Banner } from 'rebass'

view Home.Demo {
  <Banner align="center" backgroundImage={images.background.demo}>
    <chatBubbles repeat={chat}>
      <ChatBubble {..._}/>
    </chatBubbles>
  </Banner>

  $chatBubbles = {
    marginLeft: '30%',
    marginRight: '30%'
  }
}

view ChatBubble {
  let fromMe = view.props.fromMe

  <p>{view.props.text}</p>

  $ = {
    borderRadius: 22,
    marginTop: 10,
    marginBottom: 10,
    maxWidth: '80%',
    fontSize: 18,
    textAlign: 'left',
    background: fromMe ? '#E5E5EA' : '#36A2F8',
    color: fromMe ? 'black' : 'white',
    marginLeft: fromMe ? 'auto' : '0',
    marginRight: fromMe ? '0' : 'auto',
  }

  $p = {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 22,
    paddingRight: 22
  }
}
