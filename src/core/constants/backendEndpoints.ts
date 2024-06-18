/**
 * we can add the hostname to and .env file
 */

export const binanceWebSokectURL = 'wss://stream.binance.com:443/ws/btcusdt';

enum IPUrlPaths {
  main = 'https://ipwho.is/',
}

export const endpoints = {
  IPUrlPaths: IPUrlPaths,
};

export enum FetchMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
