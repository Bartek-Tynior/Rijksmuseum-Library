import {
  useParams
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import AnimatedCursor from "../components/AnimeCursor";
import Description from "../components/Description";


function DetailsPage() {

  let { objectNumber } = useParams();
  let url = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?key=ZSi2lYRS`

  const [data, setData] = useState(null);
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
    <div className="container">
      <AnimatedCursor/>
      {data && (
        <div className="content_detail">
          <div className="left">
            <img src={data.webImage.url}/>
            <div className="detail_title">
                <h1 className="title_detail">{data.title}</h1>
                <h2 className="author_detail">door {data.principalOrFirstMaker}</h2>
            </div>
          </div>
          <div className="right">
            <Description artObject={data} />
          </div>
        </div>
            )}
    </div>
  )
}

export default DetailsPage