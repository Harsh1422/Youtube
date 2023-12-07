import axios from "axios";
const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': "f3edbabfabmshbea3f17ad640655p15de1djsnca105a961143",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI=async(url)=>
  {
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }
  