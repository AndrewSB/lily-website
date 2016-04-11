import { images } from '../content'
import Sticky from 'react-stickynode'

view Home.Header {
  let headerOpacity = 0
  on.scroll(window, e => {
    let w = e.path[0]
    headerOpacity = Math.min(1, w.pageYOffset / w.outerHeight)
  })

  let textColor = 'white'
  on.scroll(window, e => {
    let w = e.path[0]
    let rgbVal = Math.ceil((1 - Math.min(1, w.pageYOffset / w.outerHeight)) * 255)
    textColor = 'rgb(' + rgbVal + ',' + rgbVal + ',' + rgbVal + ')'
  })


  <Sticky enabled={true} top={0}>
    <phantomBackground></phantomBackground>
    <nonPhantomContent>
      <content>
        <left>
          <img
            src="http://i.imgur.com/1wLaA85.png?1"
            height={70}
            width={70}
            />
        </left>
        <right>
          <MessengerButton backgroundColor='transparent' fadeText={true} />
        </right>
      </content>
    </nonPhantomContent>
  </Sticky>

  $ = {
    position: 'absolute',
    width: '100%',
    color: textColor,
  }

  $phantomBackground = {
    height: 80,
    opacity: headerOpacity,
    backgroundColor: "#fff",
  }

  $nonPhantomContent = {
    position: 'absolute',
    top: 0,
    height: 80,
    width: '100%',
  }

  $content = {
    padding: [0, 25, 0, 12],
    display: 'flex',
    justifyContent: 'space-between',
    height: 80,
  }

  $left = {
    marginLeft: 50,
    textAlign: 'left',
    display: 'flex',
    alignItems: "center",
  }

  $img = {
  }

  $right = {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    float: 'right',
    marginRight: 50,
  }
}
