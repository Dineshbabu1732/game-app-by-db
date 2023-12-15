import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
  params: {
    key: "ce195bec4ae74043b2044144a1ddddc1",
  },
});