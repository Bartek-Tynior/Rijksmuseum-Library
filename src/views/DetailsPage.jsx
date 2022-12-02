import {
  useParams
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"


function DetailsPage() {

  let { objectNumber } = useParams();
  let url = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?key=ZSi2lYRS`

  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, updateQuery] = useState('');

     useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(url);
            setData(response.data.artObject)
            setError(null);
            console.log(response.data.artObject);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        }
        fetchData();
      }, [url]);


  return (
    <div className="DetailsPage">
      
    </div>
  )
}

export default DetailsPage