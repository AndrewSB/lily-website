import { styles } from '../constants'
import { copy } from '../content'

view Home.Footer {
  <left>
    <h3>{copy.footer.left.title}</h3>
    <p>{copy.footer.left.description}</p>
  </left>
  <center>
    <h3>{copy.footer.center.title}</h3>
    <a href={'mailto:' + copy.footer.center.email}>{copy.footer.center.email}</a>
    <a href={'sms:' + copy.footer.center.phoneNumber}>{copy.footer.center.phoneNumber}</a>
  </center>
  <right>
    <h3>{copy.footer.right.title}</h3>
    <a href={'mailto:' + copy.footer.right.email}>{copy.footer.right.email}</a>
  </right>

  $ = [styles.flexAndCenter, {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: [50, 22],
      color: 'white',
      background: '#262626',
  }]

  const commonStyle = [styles.flexAndCenter, {
    flexDirection: 'column',
    textAlign: 'center',
    width: '30%',
    // padding: [0, "3%"],
  }]

  $left = commonStyle
  $center = commonStyle
  $right = commonStyle

  const colorAndPadding = {
    color: '#818181',
    padding: [8, 0],

  }

  $a = colorAndPadding
  $p = colorAndPadding
}
