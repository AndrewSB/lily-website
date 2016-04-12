import { copy } from '../content'
import { styles } from '../constants'

view Home.Expose {
  <h1>{copy.expose.title}</h1>

  <icons>
      <Icon repeat={copy.expose.iconsAndDescriptions} {..._}/>
  </icons>

  $h1 = {
    textAlign: "center",
  }

  $icons = {
    display: 'flex'
  }
}

view Icon {
  <span>
    <img src={view.props.image} align='center'/>
  </span>
  <h4>{view.props.heading}</h4>
  <p>{view.props.description}</p>

  $ = {
    margin: [0, '3%'],
    textAlign: 'center',
  }

  $span = {
    display: "block",
  }
}
