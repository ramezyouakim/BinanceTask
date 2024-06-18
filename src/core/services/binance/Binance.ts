import {action, makeObservable, observable} from 'mobx';
import WebSocketService from '../backend/WebSocket';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import {binanceWebSokectURL} from '../../constants/main';

class BinanceService {
  private static instance: any;
  private websocket!: WebSocketService;
  @observable loading: boolean = false;

  constructor() {
    if (BinanceService.instance) {
      return BinanceService.instance;
    }

    BinanceService.instance = this;
    this.websocket = new WebSocketService(binanceWebSokectURL);
    makeObservable(this);
  }

  @action private setLoading(state: boolean) {
    this.loading = state;
  }

  async subscribeToData(callback: (data: any) => void) {
    try {
      this.setLoading(true);
      this.websocket.subscribeToChannel('SUBSCRIBE', ['btcusdt@trade'], 1);
      this.websocket.addMessageListener(newData => {
        callback(newData);
      });
    } catch (error) {
      console.log('Failed to open connection:', error);
    } finally {
      // this.setLoading(false);
    }
  }

  unSubscribeToData() {
    try {
      this.websocket.socket.close();
    } catch (error) {
      ErrorHandler.showErrorMessage();
    }
  }
}

export default BinanceService;
