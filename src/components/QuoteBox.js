import React, {Component} from "react";
import "../css/QuoteBox.css";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "https://twitter.com/intent/tweet?hashtags=quotes&text=%22" +
        this.urlText(this.props.quoteText) +
        "%22%20%20-%20" +
        this.urlText(this.props.quoteAuthor)
    };
  }
  urlText(text) {
    return text.replace(/\s/g, "%20");
  }
  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.props.quoteText}</div>
        <div id="author">{this.props.quoteAuthor}</div>
        <button id="new-quote" onClick={this.props.getQuote}>
          Get new Quote
        </button>
        <a href={this.state.url} id="tweet-quote">
          tweet
        </a>
      </div>
    );
  }
}

export default QuoteBox;
