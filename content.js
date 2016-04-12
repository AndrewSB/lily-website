const expose = [
  {
    image: "http://imgur.com/96TgMfH",
    heading: "Personalized Service",
    description: "We use our expertise to tailor your business needs.",
  },
  {
    image: "http://imgur.com/sw8zhvM",
    heading: "At Your Service",
    description: "We do the research and the leg work helping you save time and energy.",
  },
  {
    image: "http://imgur.com/Bvlw4ag",
    heading: "Incorporation Made Easy",
    description: "We provide the forms and everything else that you will need.",
  },
   {
    image: "http://imgur.com/7RhVux2",
    heading: "Peace of Mind",
    description: "We are here when you have any questions along the way.",
  },
]

const chat = [
  {
    text: "Hey Lily, the app I build is doing really well. I want to raise money from investors, so I am thinking about incorporating",
    fromMe: true,
  },
  {
    text: "Hey Andrew, that sounds great. If you’re thinking about raising money, you probably need a C-Corp based in Delaware",
    fromMe: false,
  },
  {
    text: "That makes sense. Let’s do it!",
    fromMe: true,
  },
  {
    text: "Ok great, I’ll walk you through the steps",
    fromMe: false,
  },
]

const images = {
  logo: 'http://i.imgur.com/1wLaA85.png',
  background: {
    demo: 'http://i.imgur.com/W98uxfx.jpg',
    head: 'http://i.imgur.com/rzJqpd8.jpg',
  },
}

const copy = {
  header: {
    title: 'Lily'
  },
  head: {
    title: 'We make incorporation short and easy',
    subtitle: 'Lily is a service that connects you to experts to help you incorporate your business',
    callToAction: 'Text us',
  },
  description: {
    header: 'Incorporate a business in 15 minutes over text',
    description: 'We\'ll walk you through the entire process',
  },
  expose: {
    title: 'A new way to shop, focused on you.'
  },
  footer: {},
}

export default {
  expose,
  chat,
  images,
  copy,
}
