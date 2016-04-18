import { copy } from '../content'
import { styles } from '../constants'

view Home.Expose {
  <h1>{copy.expose.title}</h1>

  <icons>
      <Icon repeat={copy.expose.iconsAndDescriptions} {..._} />
  </icons>

  $ = {
    backgroundColor: '#F0F1F3',
    textAlign: 'center',
    padding: [20],
    paddingBottom: 44,
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
    <img
      src={view.props.image}
      align='center'
      height="130"
      width="130"
      />
  </span>
  <h4>{view.props.heading}</h4>
  <p>{view.props.description}</p>

  $ = {
    margin: [0, 44],
    // padding: [0, 44],
    textAlign: 'center',
    width: 350,
  }

  $span = {
    display: "block",
  }
}
