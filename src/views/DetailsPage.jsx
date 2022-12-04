import { useParams } from "react-router-dom";
import axios from "axios";
import AnimatedCursor from "../components/AnimeCursor";
import Description from "../components/Description";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import Error from "../components/Error";

function DetailsPage() {
  let { objectNumber } = useParams();
  let url = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber}?key=ZSi2lYRS`;

  const getArtObject = async () => {
    const response = await axios.get(url);
    let artObject = response.data.artObject;
    return artObject;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["artObject", url],
    queryFn: () => getArtObject(),
    staleTime: 60000,
    keepPreviousData: true,
  });

  return (
    <motion.div
      className="container_detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <head>
        <title>Details</title>
      </head>
      <AnimatedCursor />
      {isLoading && <Loading />}
      {isError && <Error errorMessage={error} />}
      {data && (
        <div className="content_detail">
          <div className="left">
            <img src={data.webImage.url} />
            <div className="detail_title">
              <h1 className="title_detail">{data.title}</h1>
              <h2 className="author_detail">
                door {data.principalOrFirstMaker}
              </h2>
            </div>
          </div>
          <div className="right">
            <Description artObject={data} />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default DetailsPage;
