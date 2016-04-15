import { styles, color } from '../constants'
import { copy } from '../content'

view Home.Description {
  <h2>{copy.description.header}</h2>
  <h3>{copy.description.description}</h3>

  <products>
    <product repeat={copy.description.products}>
      <img src={_.url} />
    </product>
  </products>

  $ = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: [22],
    textAlign: 'center',
  }

  $h2 = {
    color: '#2F79D8'
  }

  $h3 = {
    padding: [0, 150],
  }

  $products = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%'
  }

  $product = [styles.flexAndCenter, {
    flexDirection: 'column',
  }]
}
