import { Banner } from 'rebass'
import Sticky from 'react-stickynode'

view Home.Head {

  <Sticky enabled={true} top={0}>
    <h1>Lily</h1>
  </Sticky>

  <Banner
    align="center"
    backgroundImage="https://pixabay.com/static/uploads/photo/2016/03/13/03/37/hot-air-balloons-1253229_960_720.jpg">
    <h1>Lily</h1>
    <h2>We make incorporation short and easy</h2>
  </Banner>

}
