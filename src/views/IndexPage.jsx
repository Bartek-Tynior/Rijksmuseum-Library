import { useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Fuse from "fuse.js";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCursor from "../components/AnimeCursor";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useQuery } from "react-query";

function IndexPage() {
  const [query, updateQuery] = useState("");
  const [page, setPage] = useState(1);
  const [collection, setCollection] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const getCollection = async () => {
    const response = await axios.get(
      `https://www.rijksmuseum.nl/api/nl/collection?key=ZSi2lYRS&p=${page}&ps=10`
    );
    let collection = response.data.artObjects;
    setCollection(collection);
    return collection;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["collection", page],
    queryFn: () => getCollection(page),
    staleTime: 60000,
    keepPreviousData: false,
  });

  const paginate = (newPage) => {
    setPage(newPage);
  };

  const fuse = new Fuse(collection, {
    keys: ["title", "principalOrFirstMaker"],
    includeScore: true,
  });

  const results = fuse.search(query);
  const collectionResult = query ? results.map((item) => item.item) : data;

  function onSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    updateQuery(value);
  }

  return (
    <div className="container">
      <head>
        <title>Index</title>
      </head>

      <AnimatedCursor />
      {isLoading && <Loading />}
      {isError && <Error errorMessage={error} />}
      {isLoading == false && <h1 className="page_title">Rijksmuseum Index</h1>}
      {isLoading == false && (
        <div className="content">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              value={query}
              onChange={onSearch}
              placeholder="Zoek naar de kunstenaars of objecten..."
            />
          </div>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="list"
            >
              {data &&
                collectionResult.map((artObject) => (
                  <Card artObject={artObject} key={artObject.objectNumber} />
                ))}
            </motion.div>
          </AnimatePresence>
          <div className="pagination_container ">
            <div className="pagination">
              <button
                onClick={() => {
                  paginate(1);
                  setActivePage(1);
                }}
                className={`pagination_link_${activePage == 1 && "active"}`}
              >
                1
              </button>
              <button
                onClick={() => {
                  paginate(2);
                  setActivePage(2);
                }}
                className={`pagination_link_${activePage == 2 && "active"}`}
              >
                2
              </button>
              <button
                onClick={() => {
                  paginate(3);
                  setActivePage(3);
                }}
                className={`pagination_link_${activePage == 3 && "active"}`}
              >
                3
              </button>
              <button
                onClick={() => {
                  paginate(4);
                  setActivePage(4);
                }}
                className={`pagination_link_${activePage == 4 && "active"}`}
              >
                4
              </button>
              <button
                onClick={() => {
                  paginate(5);
                  setActivePage(5);
                }}
                className={`pagination_link_${activePage == 5 && "active"}`}
              >
                5
              </button>
              <button
                onClick={() => {
                  paginate(6);
                  setActivePage(6);
                }}
                className={`pagination_link_${activePage == 6 && "active"}`}
              >
                6
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IndexPage;
