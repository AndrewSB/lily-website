import Sticky from 'react-stickynode'

view Home.Header {
  <Sticky enabled={true} top={0}>
    <content>
      <left>
        <img
          src="http://i.imgur.com/F26YRqx.jpg"
          height={75}
          width={75}
          />
        <h1>Lily</h1>
      </left>
      <right>
        <button>
          <img
            src="http://i.imgur.com/ZsL2bCp.png"
            height={33}
            width={33}
            />
          Messenger
        </button>
      </right>
    </content>
  </Sticky>

  $content = {
    backgroundColor: "white",
    display: 'flex',
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

  $button = {
    background: "#1787FB",
    color: 'white',
    fontSize: 18,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
  }
}
