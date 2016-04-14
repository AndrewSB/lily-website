import { styles } from '../constants'
import { copy } from '../content'

view Home.Footer {
  <left>
    <h3>LILY</h3>
    <p>description</p>
  </left>
  <center>
    <h3>CONTACT</h3>
    <a>+1 (650) 815-5781</a>
    <a>hello@textlily.com</a>
  </center>
  <right>
    <h3>PRESS</h3>
    <a>press@textlily.com</a>
  </right>

  $ = [styles.flexAndCenter, {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: [50, 22],
      color: 'white',
      background: '#0a0a0a',
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
