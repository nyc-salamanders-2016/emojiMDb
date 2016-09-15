class Movies extends React.Component {

  constructor(){
    super()
    this.state = {
      movies: []
    }

    // this.updateTweets = this.updateTweets.bind(this);
  }

  componentDidMount(){
    // debugger
    $.ajax({
      url: 'http://www.omdbapi.com/?s=jason&y=&plot=short&r=json',
      method: 'get'
    })
    .done((response) => {
      this.setState({movies: response})
    })
  }

  render() {
    return (
      <div>
        <header id="top-nav">
          <div id="brand">🤓MDb</div>
          <form id="search-form">
            <input id="search" type="text" name="query" />
          </form>
          <i className="fa fa-search" />
        </header>
        <section className="container">
          <section id="movies-container">
            <h2>Movies</h2>
            <ul>
              <li>{this.props.data[0].name}</li>
              <li>{this.props.data[0].name}</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
            </ul>
          </section>
          <section id="search-container">
            <h2>Search</h2>
          </section>
        </section>
      </div>
    )
  }

}
