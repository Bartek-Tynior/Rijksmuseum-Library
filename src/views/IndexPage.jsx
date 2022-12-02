import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
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
    <>
    <div className="IndexPage">
        <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <input type="text" value={query} onChange={onSearch} />
      <motion.div className="list">
        {data &&
          collectionResult.map((object, index) => (
            <Card artObject={object} key={index} />
          ))}
      </motion.div>
    </div>
    </>
  )
}

export default IndexPage