view Home.Expose {
  <h1>A new way to shop, focused on you.</h1>
  <icons>
    <Icon
      image="https://d1vfnsg13zvlk4.cloudfront.net/icon-global.svg"
      heading="Personalized Service"
      description="We tailor recommendations to match your taste. No consideration is too small."
    />
    <Icon
      image="https://d1vfnsg13zvlk4.cloudfront.net/icon-global.svg"
      heading="Personalized Service"
      description="We tailor recommendations to match your taste. No consideration is too small."
    />
    <Icon
      image="https://d1vfnsg13zvlk4.cloudfront.net/icon-global.svg"
      heading="Personalized Service"
      description="We tailor recommendations to match your taste. No consideration is too small."
    />
  </icons>

  $h1 = {
    textAlign: "center",
  }

  $icons = {
    display: "flex"
  }
}

view Icon {
  <span>
    <img src={view.props.image} align='center'/>
  </span>
  <h4>{view.props.heading}</h4>
  <p>{view.props.description}</p>

  $ = {
    width: '30%',
    marginLeft: '3%',
    marginRight: '3%'
  }

  $span = {
    display: "block",
    textAlign: "center",
  }

  $h4 = {
    textAlign: "center",
  }

  $p = {
    textAlign: "center",
  }
}
