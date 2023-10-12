// axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.weatherapi.com/v1", //base URL
  timeout: 5000, // Request timeout in milliseconds
});
//API KEY
const apiKey = "efd87b3c0d764ff49fc81629231210";
// example call to get current data : https://api.weatherapi.com/v1/current.json?key=efd87b3c0d764ff49fc81629231210&q=London&aqi=no

//GET CALL
export const getCall = (url: string, params: any) =>
  instance
    .get(url, {
      params: { key: apiKey, ...params },
    })
    .then((response) => {
      // Return the data from the response
      return response.data;
    })
    .catch((error) => {
      throw error; // Handle or re-throw errors as needed
    });

export default instance;
