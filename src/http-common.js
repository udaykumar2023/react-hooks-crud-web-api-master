import axios from "axios";

export default axios.create({
  baseURL: "https://8ureh7i7n7.execute-api.ap-south-1.amazonaws.com",
  headers: {
    "Content-type": "application/json"
  }
});
