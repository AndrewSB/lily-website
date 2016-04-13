import { copy } from '../content'
import { styles } from '../constants'

view Home.Expose {
  <h1>{copy.expose.title}</h1>

  <icons>
      <Icon repeat={copy.expose.iconsAndDescriptions} {..._} />
  </icons>

  $ = {
    textAlign: 'center',
  }

  $h1 = {
    textAlign: 'center',
  }

  $icons = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
}

view Icon {
  <span>
    <img src={view.props.image} align='center'/>
  </span>
  <h4>{view.props.heading}</h4>
  <p>{view.props.description}</p>

  $ = {
    margin: [0, 12],
    textAlign: 'center',
    width: 460,
  }

  $span = {
    display: "block",
  }
}
