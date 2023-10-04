/* eslint-disable react/prop-types */
import { BsShare } from "react-icons/bs";
import { RiSaveLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const { author, title, image_url, details, _id } = news;
  return (
    <div className="mb-5">
      {/* author-card-start */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
        <div className="flex gap-3">
          <img className="btn-circle avatar" src={author.img} alt="" />
          <div>
            <p className="text-xl font-bold">{author.name}</p>
            <p className="text-xs">{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-4 text-xl">
          <Link to="/">
            <RiSaveLine></RiSaveLine>
          </Link>
          <Link to="/">
            <BsShare></BsShare>
          </Link>
        </div>
      </div>
      {/* author-card-end */}
      <div>
        <h1 className="text-2xl">{title}</h1>
        <img src={image_url} alt="" />
        <p>
            {
                details.length>200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-500 underline">Read More...</Link></p> : <p>{details}</p>
        }
        </p>
      </div>
      {/* news-card-start  */}

      {/* news-card-end  */}
    </div>
  );
};

export default News;
