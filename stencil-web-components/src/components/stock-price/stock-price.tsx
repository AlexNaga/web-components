import { Component, h } from '@stencil/core';

import config from './config/config.json';
const API_KEY = config.API_KEY;

@Component({
  tag: 'pn-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  componentWillLoad() {
    console.log('Hello, World!');
    console.log(API_KEY);
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    console.log('Submitted!');
  }

  render() {
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id='stock-symbol' />
        <button type='submit'>Fetch</button>
      </form>,
      <div>
        <p>Price: {0}</p>
      </div>
    ]
  }
}