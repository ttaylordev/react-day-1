


// http://projectguide.devmounta.in/#/react-blog


componentDidMount() {
    console.log( 'componentDidMount' );
    setTimeout( () => {
      this.setState( {
        textToDisplay: 'Hello Brandon.'
      } );
    }, 2000 );
  },





  _handleInputChange: function () {
    this.setState( {
      textToDisplay: e.target.value
    } );
  },
  render: function () {
    console.log( 'render' );
    return ( < div className = 'name' >
      < input onChange = {
        this._handleInputChange
      }
      type = 'text'
      value = {
        this.state.textToDisplay
      }
      /> {
      this.state.textToDisplay
    } < /div>
  );
}
