import Sticky from 'react-stickynode'

view Home.Header {
  <Sticky enabled={true} top={0}>
    <content>
      <left>
        <img
          src="http://i.imgur.com/F26YRqx.jpg"
          height={44}
          width={44}
          />
        <h1>Lily</h1>
      </left>
      <right>
        <button>
          <img
            src="http://i.imgur.com/ZsL2bCp.png"
            height={44}
            width={44}
            />
          Messenger
        </button>
      </right>
    </content>
  </Sticky>

  $content = {
    backgroundColor: "white",
    display: 'flex',
  }

  $left = {
    textAlign: 'left',
    display: 'flex',
  }

  $right = {
    textAlign: "right",
    display: "flex",
  }

  $button = {
    background: "#1787FB",
    color: 'white',
    fontSize: 22,
  }
}
