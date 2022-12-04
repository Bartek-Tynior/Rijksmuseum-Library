import { useState, useEffect } from "react";
import axios from "axios"
import Card from "../components/Card";
import Fuse from "fuse.js";
import { motion, AnimatePresence } from "framer-motion"
import AnimatedCursor from "../components/AnimeCursor";
import Loading from "../components/Loading";
import Error from "../components/Error";

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
      const collectionResult = query ? results.map(collection => collection.item) : data;

      function onSearch({ currentTarget = {}}) {
        const { value } = currentTarget;
        updateQuery(value);
      }

  return (
    <div className="container">
      <AnimatedCursor/>
      {loading && <Loading/>}
        {error && (
          <Error errorMessage={error} />
        )}
    {loading==false && (<h1 className="page_title">Rijksmuseum Index</h1>)}
      {loading==false && (<div className="content">
        <div className="searchbar">
            <input className="search_input" type="text" value={query} onChange={onSearch} placeholder="Zoek naar de kunstenaars of objecten..."/>
        </div>
        <AnimatePresence>
        <motion.div layout
  initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 1 }}
        className="list">
          {data &&
            collectionResult.map((object, index) => (
              <Card artObject={object} key={index}/>
            ))}
        </motion.div>
        </AnimatePresence>
      </div>)}
    </div>
  )
}

export default IndexPage