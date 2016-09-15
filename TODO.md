class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tweets: []
    }

    this.updateTweets = this.updateTweets.bind(this);
  }

  componentDidMount(){
    // debugger
    $.ajax({
      url: '/tweets/recent',
      method: 'get'
    })
    .done((response) => {
      this.setState({tweets: response})
    })
  }

  updateTweets(newTweet) {
    this.setState({
      // tweets: [newTweet, ...this.state.tweets]
      tweets: [newTweet].concat(this.state.tweets)
    });
  }

  render() {
    return (
      <div>
        <header id="top-nav">
          <div id="brand">Lil' Twitter API</div>
          <form id="search-form">
            <input id="search" type="text" name="query" />
          </form>
          <i className="fa fa-search" />
        </header>
        <section className="container">
          <ComposeBox onUpdate={this.updateTweets} />
          <section id="trends-container">
            <h3>Trends</h3>
            <ul>
              <li>filler</li>
              <li>filler</li>
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
          <section id="tweets-container">
            <h3>Tweets</h3>
              <ListTweets tweets={this.state.tweets}/>
          </section>
        </section>
      </div>
    )
  }
}
