import { device, styles } from '../constants'
import { copy } from '../content'

view Home.Footer {
  <section>
    <h3>{copy.footer.left.title}</h3>
    <p>{copy.footer.left.description}</p>
  </section>
  <section>
    <h3>{copy.footer.center.title}</h3>
    <a href={'mailto:' + copy.footer.center.email}>{copy.footer.center.email}</a>
    <a href={'sms:' + copy.footer.center.phoneNumber}>{copy.footer.center.phoneNumber}</a>
  </section>
  <section>
    <h3>{copy.footer.right.title}</h3>
    <p>{copy.footer.right.disclaimer}</p>
  </section>

  $ = [styles.flexAndCenter, {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'top',
      justifyContent: 'space-between',
      padding: [50, '12%'],
      color: 'white',
      background: '#262626',

      [device.small]: {
        justifyContent: 'center',
      },
  }]

  $section = [styles.flexAndCenter, {
    flexDirection: 'column',
    textAlign: 'center',
    width: 250,
  }]

  const colorAndPadding = {
    color: '#818181',
    padding: [8, 0],
  }

  $a = colorAndPadding
  $p = colorAndPadding
}
