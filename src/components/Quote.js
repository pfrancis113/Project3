import React from 'react';
import { quotes } from '../mtQuotes.json';

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "Click for wisdom and motivation..."
        }
    }

    generateQuote() {
        let quote = quotes[Math.floor(Math.random()*quotes.length)];
        this.setState({quote: quote});
    }

    render() {
        return(

        <div>
            <div>
                <button onClick={() => this.generateQuote()}>Generate</button>
            </div>
            <p>
                <Quote quote={this.state.quote} />
            </p>
        </div>
        );
    }
};

export default Quote;