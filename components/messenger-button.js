view MessengerButton {
  <button>
    <img src="http://i.imgur.com/91CqGdN.png"
      width={view.props.iconSize || 33}
      height={view.props.iconSize || 33}
      />
    {view.props.text || 'Messenger'}
  </button>

  let fadeText = view.props.fadeText || false
  let textColor = 'white'
  on.scroll(window, e => {
    let w = e.path[0]
    let rgbVal = Math.ceil((1 - Math.min(1, w.pageYOffset / w.outerHeight)) * 255)
    textColor = fadeText ? 'rgb(' + rgbVal + ',' + rgbVal + ',' + rgbVal + ')' : textColor
  })

  $button = {
    padding: [6, 25, 6 , 10],
    background: view.props.backgroundColor || '#1787FB',
    color: textColor + ' ',
    fontSize: view.props.fontSize || 18,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    border: 'solid',
    borderWidth: view.props.borderWidth || 1,
    borderColor: textColor,
    cursor: 'hand',
  }

  $img = {
    margin: [0, 5, 0, 5],
  }
}
