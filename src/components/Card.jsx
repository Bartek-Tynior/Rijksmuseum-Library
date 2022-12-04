import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ artObject }) {
  return (
    <motion.div
      layout={{ duration: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Link to={`/${artObject.objectNumber}`}>
        <div className="card_image">
          <img className="image" src={artObject.headerImage.url} />
          <div className="content_card">
            <h2 className="card_title">{artObject.title}</h2>
            <p className="card_author">{artObject.principalOrFirstMaker}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Card;
