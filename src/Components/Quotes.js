import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../actions/quoteAction";
class Quote extends Component {
  componentWillMount() {
    this.props.fetchQuote();
  }
  render() {
    const quoteDetails = this.props.quotes.map(quote => {
      return (
        <div key={quote.id}>
          <h3>Author: {quote.author}</h3>
          <h4>Category: {quote.cat}</h4>
          <p className="quotation">Quotation: {`"${quote.quote}"`}</p>
        </div>
      );
    });
    return (
      <div>
        <h1 className="quote-header">Famous Quotes</h1>
        <div className = "quote-container">
        {quoteDetails}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  quotes: state.quotes.quotes,
});
export default connect(
  mapStateToProps,
  { fetchQuote }
)(Quote);
