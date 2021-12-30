import  {  useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [data, updateData] = useState(null);
    let requestURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ca45a05a4d7445e597be4e072b1ae48f';
    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(requestURL);
          updateData(response.data.articles);
        }
        fetchData();
    }, []);
    return data
}

export default useFetch;