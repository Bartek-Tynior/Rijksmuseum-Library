import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios"

function IndexPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `https://www.rijksmuseum.nl/api/nl/collection?key=ZSi2lYRS&involvedMaker=Rembrandt+van+Rijn`
            );
            setData(response.data);
            setError(null);
            console.log(response.data.artObjects);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);


  return (
    <>
    <div className="IndexPage">
        <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.artObjects.map(({ title, objectNumber }) => (
            <li key={title}>
                <Link to={`/${objectNumber}`}>
              <h3>{title}</h3>
              </Link>
            </li>
          ))}
      </ul>
    </div>
    </>
  )
}

export default IndexPage