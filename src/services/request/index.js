import axios from "axios";
import { baseURL, TIMEOUT } from "./config";

class DtmRequest {
  constructor(baseURL, TIMEOUT) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: TIMEOUT,
    });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log("request err:", err);
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

const dtmrequest = new DtmRequest(baseURL, TIMEOUT);
export default dtmrequest;
