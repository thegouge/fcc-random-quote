import React from "react";
import "../css/QuoteBox.css";

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <div id="quote-graphic">
        <img
          className="quoteSymbol quoteStart"
          src={props.quoteIcon}
          alt="quote-start"
        />
        <div id="text">{props.quoteText}</div>
        <div id="author">-{props.quoteAuthor}</div>
        <img
          className="quoteSymbol quoteEnd"
          src={props.quoteIcon}
          alt="quote-end"
        />
      </div>
      <div className="button-box">
        <span
          className="button"
          style={{backgroundColor: props.background}}
          id="new-quote"
          onClick={props.getQuote}
        >
          New Quote
        </span>
        <a
          className="button"
          style={{backgroundColor: props.background}}
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&text=%22" +
            props.urlText(props.quoteText) +
            "%22%20%20-%20" +
            props.urlText(props.quoteAuthor)
          }
          id="tweet-quote"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
