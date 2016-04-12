import { styles } from '../constants'
import { copy } from '../content'

view Home.Footer {
  <h4>{copy.footer.title}</h4>
  <p>{copy.footer.subtitle}</p>

  $ = [styles.flexAndCenter, {
    flexDirection: 'column',
    width: '100%',
    padding: [22],
    background: '#50ABF1',
  }]
}
