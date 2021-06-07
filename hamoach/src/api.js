import axios from "axios";

const baseURL = "http://10.10.244.28:3000";
const userURL = `${baseURL}/users`;
const reportURL = `${baseURL}/reports`;

export default {
  users: {
    login: (username, password) => {
      axios.post(`${userURL}/login`, {
        username: username,
        password: password
      });
    }
  },
  reports: {
    allReports: () => {
      return axios.get(`${reportURL}`);
    }
  }
};
