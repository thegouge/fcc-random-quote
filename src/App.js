import React, {Component} from "react";
import QuoteBox from "./components/QuoteBox";
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: "",
      quoteAuthor: "",
      quoteCat: "none"
    };

    this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  getRandomQuote() {
    fetch("https://talaikis.com/api/quotes/random/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quoteText: result.quote,
            quoteAuthor: result.author,
            quoteCat: result.cat
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  componentDidMount() {
    this.getRandomQuote();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random Quotes!</h1>
        </header>

        <QuoteBox
          quoteText={this.state.quoteText}
          quoteAuthor={this.state.quoteAuthor}
          getQuote={this.getRandomQuote}
        />
      </div>
    );
  }
}

export default App;
