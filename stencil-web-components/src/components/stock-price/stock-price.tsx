import { Component } from '@stencil/core';

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
}