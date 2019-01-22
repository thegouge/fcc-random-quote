import React, {Component} from "react";
import QuoteBox from "./components/QuoteBox";
import Footer from "./components/Footer";
import quotes from "./assets/quote.png";
import "./css/App.css";

let background = "rgb(38, 42, 49)";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesArray: [],
      currentQuoteText: "if it ain't broke, break it 'till it's fixed",
      currentQuoteAuthor: "Brawl Minus"
    };
  }

  getQuotesArray = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({quotesArray: result.quotes});
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  changeQuote = () => {
    const newQuote = this.state.quotesArray[this.getRandomNumber(103)];
    const {currentQuoteText} = this.state;
    if (currentQuoteText !== newQuote.quote) {
      this.setState({
        currentQuoteAuthor: newQuote.author,
        currentQuoteText: newQuote.quote
      });
      this.backgroundChanger(newQuote.author);
    } else {
      this.changeQuote();
    }
  };

  backgroundChanger = (author) => {
    if (this.state.currentQuoteAuthor !== author) {
      background = `rgb(${this.getRandomNumber(256)}, ${this.getRandomNumber(
        256
      )}, ${this.getRandomNumber(256)})`;
    }
  };

  getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  urlText = (text) => {
    return text.replace(/\s/, "%20");
  };

  componentWillMount() {
    this.getQuotesArray();
  }
  render() {
    return (
      <div className="App" style={{backgroundColor: background}}>
        <header className="App-header">
          <h1>Random Quotes!</h1>
        </header>

        <QuoteBox
          quoteText={this.state.currentQuoteText}
          quoteAuthor={this.state.currentQuoteAuthor}
          getQuote={this.changeQuote}
          quoteIcon={quotes}
          background={background}
          urlText={this.urlText}
        />

        <Footer background={background} />
      </div>
    );
  }
}

export default App;
