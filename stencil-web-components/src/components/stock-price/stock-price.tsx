import { Component, h, State, Prop } from '@stencil/core';

import config from './config/config.json';
const API_KEY = config.API_KEY;

@Component({
  tag: 'pn-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput: HTMLInputElement;

  @Prop() stockSymbol: string;

  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() errorMsg: string;

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    const stockSymbol = this.stockInput.value;
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${API_KEY}`;
    fetch(url)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Invalid response');
        }
        return res.json();
      })
      .then(data => {
        const priceData = data['Global Quote']['05. price'];
        if (!priceData) {
          throw new Error('Invalid symbol');
        }
        this.errorMsg = null;
        this.fetchedPrice = +priceData;
      })
      .catch(err => {
        this.errorMsg = err.message;
      })
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true;
    } else {
      this.stockInputValid = false;
    }

    const isInputEmpty = this.stockUserInput.trim() === '';
    this.stockInputValid = isInputEmpty ? false : true;
  }

  render() {
    let dataContent = <p>Please enter a stock key</p>;

    if (this.errorMsg) {
      dataContent = <p>{this.errorMsg}</p>
    }

    if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>
    }
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id='stock-symbol'
          ref={elem => this.stockInput = elem}
          value={this.stockUserInput}
          onInput={this.onUserInput.bind(this)}
        />
        <button type='submit' disabled={!this.stockInputValid}>Fetch</button>
      </form>,
      <div>
        {dataContent}
      </div>
    ]
  }
}