import { styles } from '../constants'
import { copy } from '../content'

view Home.Description {
  <h3>{copy.description.header}</h3>
  <h5>{copy.description.description}</h5>

  <products>
    <product repeat={copy.description.products}>
      <img src={_.url} />
      <p>{_.description}</p>
    </product>
  </products>

  $ = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  $products = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  }

  $product = [styles.flexAndCenter, {
    flexDirection: 'column',
  }]
}
