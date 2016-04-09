import { Banner } from 'rebass'

view Home.Demo {
  <Banner
    align="center"
    backgroundImage="https://pixabay.com/static/uploads/photo/2011/08/03/02/13/balloon-8480_960_720.jpg"
    >
    <chatBubbles>
      <ChatBubble text="Hey Lily, the app I build is doing really well. I want to raise money from investors, so I am thinking about incorporating" fromMe={true}/>
      <ChatBubble text="Hey Andrew, that sounds great. If you’re thinking about raising money, you probably need a C-Corp based in Delaware" fromMe={false}/>
      <ChatBubble text="That makes sense. Let’s do it!" fromMe={true}/>
      <ChatBubble text="Ok great, I’ll walk you through the steps" fromMe={false}/>
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
