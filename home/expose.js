import { exposeLinks } from '../constants'

view Home.Expose {
  <h1>A new way to shop, focused on you.</h1>

  <icons>
    <icon repeat={exposeLinks}>
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
