const device = {}
device.small = '@media (max-width: 850px)'

const exposeLinks = [
  {
    image: "https://d1vfnsg13zvlk4.cloudfront.net/icon-global.svg",
    heading: "Personalized Service",
    description: "We tailor recommendations to match your taste. No consideration is too small.",
  },
  {
    image: "https://d1vfnsg13zvlk4.cloudfront.net/icon-global.svg",
    heading: "Personalized Service",
    description: "We tailor recommendations to match your taste. No consideration is too small.",
  },
  {
    image: "https://d1vfnsg13zvlk4.cloudfront.net/icon-global.svg",
    heading: "Personalized Service",
    description: "We tailor recommendations to match your taste. No consideration is too small.",
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

export default {
  device,
  exposeLinks,
  chat
}
