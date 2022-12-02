import { useState, useEffect } from "react";
import axios from "axios"
import Card from "../components/Card";
import Fuse from "fuse.js";
import { motion } from "framer-motion"

function IndexPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, updateQuery] = useState('');

     useEffect(() => {
        async function getData() {
          try {
            const response = await axios.get(
              `https://www.rijksmuseum.nl/api/nl/collection?key=ZSi2lYRS&ps=10`
            );
            setData(response.data.artObjects)
            setError(null);
            console.log(response.data);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        }
        getData();
      }, []);

      const fuse = new Fuse(data, {
        keys: [
          'title',
          'principalOrFirstMaker',
        ],
        includeScore: true
      });

      const results = fuse.search(query);
      const collectionResult = query ? results.map(collectionArt => collectionArt.item) : data;

      function onSearch({ currentTarget = {}}) {
        const { value } = currentTarget;
        updateQuery(value);
      }

  return (
    <div className="container">
    <h1 className="page_title">Rijksmuseum Index</h1>
    <div className="content_bottom">
      <div className="content">
        <div className="searchbar">
            <input className="search__input" type="text" value={query} onChange={onSearch} placeholder="Search for the pieces"/>
        </div>
        <motion.div className="list">
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
          {data &&
            collectionResult.map((object, index) => (
              <Card artObject={object} key={index} />
            ))}
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default IndexPage