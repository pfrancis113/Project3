import React from 'react';
import { Component, Fragment } from 'react';
import './QuoteGenerator.css'

import { quotes } from './mtQuotes.json';


class QuoteGenerator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: "Click for wisdom and motivation...",
            
        }
    }
    
    getQuote= () => {
        let quote = quotes[Math.floor(Math.random()*quotes.length)];
        this.setState({quote: quote});
    }


    render() {
        console.log(this.state);
        
        return(
            <Fragment>
            <header onClick={this.getQuote}>
                {this.state.quote}
            </header> 
            
            </Fragment>
        )
    }
}

export default QuoteGenerator;