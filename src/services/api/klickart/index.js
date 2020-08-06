import instance from './instance';

const configRequest = () => ({
  withCredentials: true,
});

export default class Klickart {
  constructor(config = {}) {
    this.path = config.path;
    this.axios = instance();
  }

  get(resource = '', config = {}) {
    return this.axios.get(`${this.path}/${resource}`, { ...configRequest(), ...config });
  }

  put(resource = '', data, config = {}) {
    return this.axios.put(`${this.path}/${resource}`, data, { ...configRequest(), ...config });
  }

  post(resource = '', data, config = {}) {
    return this.axios.post(`${this.path}/${resource}`, data, { ...configRequest(), ...config });
  }

  delete(resource = '', config = {}) {
    return this.axios.delete(`${this.path}/${resource}`, { ...configRequest(), ...config });
  }
}
