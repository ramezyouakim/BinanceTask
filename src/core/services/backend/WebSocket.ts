import {makeAutoObservable} from 'mobx';
import ErrorHandler from '../ErrorHandler/ErrorHandler';

class WebSocketService {
  public socket!: WebSocket;
  private messageListeners: Array<(data: any) => void> = [];
  private url: string;

  constructor(url: string) {
    this.url = url;
    makeAutoObservable(this);
    this.initialize();
  }

  private initialize() {
    this.socket = new WebSocket(this.url);
    this.setEventHandlers();
  }

  private setEventHandlers() {
    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onerror = this.onError.bind(this);
    this.socket.onclose = this.onClose.bind(this);
  }

  subscribeToChannel(method: string, params: Array<any>, id: number): void {
    const message = JSON.stringify({
      method: method,
      params: params,
      id: id,
    });

    const sendMessage = () => {
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(message);
      } else {
        setTimeout(sendMessage, 1000);
      }
    };

    sendMessage();
  }

  private onMessage(event: any) {
    const data = JSON.parse(event.data);
    if (data) {
      this.messageListeners.forEach(listener => listener(data));
    }
  }

  private onError(error: Event) {
    ErrorHandler.showErrorMessage();
    console.log('WebSocket error: ', error);
  }

  private onClose() {
    // Optional: Attempt to reconnect
    setTimeout(() => {
      this.initialize();
    }, 5000); // Retry after 5 seconds
  }

  addMessageListener(callback: (data: any) => void) {
    this.messageListeners.push(callback);
  }
}

export default WebSocketService;
