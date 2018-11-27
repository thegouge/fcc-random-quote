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
      quoteText: "if it ain't broke, break it 'till it's fixed",
      quoteAuthor: "Brawl Minus",
      quoteCat: "mahDick"
    };

    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.backgroundChanger = this.backgroundChanger.bind(this);
  }
  getRandomQuote() {
    fetch("https://talaikis.com/api/quotes/random/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.backgroundChanger(result.cat);
          this.setState({
            quoteText: result.quote,
            quoteAuthor: result.author,
            quoteCat: result.cat
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      );
  }
  backgroundChanger(category) {
    if (this.state.quoteCat !== category) {
      background = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
    }
  }
  getRandomColor() {
    return Math.floor(Math.random() * 256);
  }
  componentDidMount() {
    this.getRandomQuote();
  }
  urlText(text) {
    return text.replace(/\s/, "%20");
  }
  render() {
    return (
      <div className="App" style={{backgroundColor: background}}>
        <header className="App-header">
          <h1>Random Quotes!</h1>
        </header>

        {this.state.error && <div>{this.state.error}</div>}

        <QuoteBox
          quoteText={this.state.quoteText}
          quoteAuthor={this.state.quoteAuthor}
          getQuote={this.getRandomQuote}
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
