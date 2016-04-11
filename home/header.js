import Sticky from 'react-stickynode'

view Home.Header {
  let headerOpacity = 0
  on.scroll(window, e => {
    let w = e.path[0]
    headerOpacity = Math.min(1, w.pageYOffset / w.outerHeight)
    console.log(headerOpacity)
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
          <h1>Lily</h1>
        </left>
        <right>
          <MessengerButton />
        </right>
      </content>
    </nonPhantomContent>
  </Sticky>

  $ = {
    position: 'absolute',
    width: '100%',
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
    textAlign: 'left',
    display: 'flex',
    alignItems: "center",
  }

  $right = {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    float: 'right'
  }
}
