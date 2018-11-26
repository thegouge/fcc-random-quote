import React, {Component} from "react";
import QuoteBox from "./components/QuoteBox";
import Footer from "./components/Footer";
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
  backgroundChanger(category) {
    if (this.state.quoteCat !== category) {
      background = `rgb(${this.getRandomColor}, ${this.getRandomColor}, ${
        this.getRandomColor
      })`;
    }
  }
  getRandomColor() {
    return Math.floor(Math.random() * 256);
  }
  componentDidMount() {
    this.getRandomQuote();
  }
  render() {
    return (
      <div className="App" style={{backgroundColor: background}}>
        <header className="App-header">
          <h1>Random Quotes!</h1>
        </header>

        <QuoteBox
          quoteText={this.state.quoteText}
          quoteAuthor={this.state.quoteAuthor}
          getQuote={this.getRandomQuote}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
