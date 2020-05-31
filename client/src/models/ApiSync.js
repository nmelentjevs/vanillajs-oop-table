import axios from 'axios';
export class ApiSync {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
  }
  fetch(id) {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  save(data) {
    const { id } = data;
    if (id) {
      return axios.patch(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
  delete(id) {
    return axios.delete(`${this.rootUrl}/${id}`);
  }
}
