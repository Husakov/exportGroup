import axios from "axios";

export default axios.create({
  baseURL: "https://nf-api.imperea.ba/api/v1",
  responseType: "json"
});
