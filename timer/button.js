view Button {
  <button yield>{view.props.children}</button>
  
  $ = {
    border: 0,
    cursor: 'pointer',
    opacity: view.props.disabled ? .3 : 1,
    marginLeft: 16,
    ':hover': {
      borderColor: view.props.disabled ? 'none' : '#737373'
    },
    width: 50,
    height: 50,
    color: 'black',
    background: 'transparent',
    borderRadius: '50%',
    border: '1px solid #dedede',
    padding: 16,
    position: 'relative',
    transition: 'all 300ms ease-in',
    userSelect: 'none',
    outline: 'none',
  }
  
}