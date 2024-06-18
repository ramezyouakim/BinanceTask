import {makeRequest} from './Caller';
import {endpoints, FetchMethods} from '../../constants/main';

export const api = {
  IP: {
    getInfo: async () => {
      const url = endpoints.IPUrlPaths.main;
      return await makeRequest(url, FetchMethods.GET);
    },
    getInfoByIp: async (ip: string) => {
      const url = `${endpoints.IPUrlPaths.main}/${ip}`;
      return await makeRequest(url, FetchMethods.GET);
    },
  },
};
