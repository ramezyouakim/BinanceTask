import {action, makeObservable, observable} from 'mobx';
import {ServiceOnAppStartHandler} from './types';

class MainServices {
  private static instance: any;
  @observable private onAppStartQueue: ServiceOnAppStartHandler[];
  @observable loading: boolean = false;

  constructor() {
    this.onAppStartQueue = [];

    makeObservable(this);

    if (MainServices.instance) {
      return MainServices.instance;
    }

    MainServices.instance = this;
  }

  @action private setLoading(state: boolean) {
    this.loading = state;
  }

  @action registerOnAppStartHandler(element: ServiceOnAppStartHandler) {
    this.onAppStartQueue.push(element);
  }

  @action async init(): Promise<void> {
    try {
      this.setLoading(true);
      this.onAppStartQueue.forEach(async item => {
        item.OnAppStart && (await item.OnAppStart());
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setLoading(false);
    }
  }
}

export default new MainServices();
