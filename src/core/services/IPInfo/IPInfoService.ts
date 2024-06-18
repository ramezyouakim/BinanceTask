import {action, computed, makeObservable, observable} from 'mobx';
import {api} from '../backend/api';
import MainServices from '../Main';

class IPInfoService {
  @observable private ip: string = '';
  @observable private location: string = '';
  @observable private timezone: string = '';
  @observable private ISP: string = '';

  @observable loading: boolean = false;

  constructor() {
    makeObservable(this);
    MainServices.registerOnAppStartHandler(this);
  }

  async OnAppStart() {
    await this.getInfo();
  }

  @action private setLoading(state: boolean) {
    this.loading = state;
  }

  @action setIP(ip: string) {
    this.ip = ip;
  }
  @action setISP(isp: string) {
    this.ISP = isp;
  }
  @action setLocation(location: string) {
    this.location = location;
  }
  @action setTimezone(timezone: string) {
    this.timezone = timezone;
  }

  @action private getInfo = async () => {
    this.setLoading(true);
    const response = await api.IP.getInfo();
    if (response) {
      const {ip, connection, timezone, country_code} = response;
      this.setIP(ip);
      this.setISP(connection?.isp);
      this.setLocation(`${country_code}`);
      this.setTimezone(timezone?.utc);
    }
    this.setLoading(false);
  };

  @action getInfoByIp = async (ip: string) => {
    this.setLoading(true);
    const response = await api.IP.getInfoByIp(ip);
    if (response) {
      const {ip: IPB, connection, timezone, country_code} = response;
      this.setIP(IPB);
      this.setISP(connection?.isp);
      this.setLocation(`${country_code}`);
      this.setTimezone(timezone?.utc);
    }
    this.setLoading(false);
  };

  @computed get data() {
    return {
      ip: this.ip,
      ISP: this.ISP,
      location: this.location,
      timezone: this.timezone,
    };
  }
}

export default new IPInfoService();
