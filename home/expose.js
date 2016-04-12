import { copy, expose } from '../content'

view Home.Expose {
  <h1>{copy.expose.title}</h1>

  <icons>
    <icon repeat={expose}>
      <Icon {..._}/>
    </icon>
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
