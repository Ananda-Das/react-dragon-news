import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";

const NewsDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();

  const NewsDetails = news.find((news) => news._id === id);

  const { image_url, title, details } = NewsDetails;

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold">Dragon News</h2>
          <div className="ml-5 p-5 mt-5 space-y-5">
            <img src={image_url} alt="" />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg text-gray-500 text-justify">{details}</p>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
