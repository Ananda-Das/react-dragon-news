// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftSideNav";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";
import BreakingNews from "./BreakingNews";
import News from "./News";

const Home = () => {

    const news = useLoaderData();
    console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid lg:grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* all news start  */}
                <div className="col-span-2">
                    <h1 className="text-3xl">Dragon News Home</h1>
                    {
                        news.map(anews=> <News key={anews._id} news={anews}></News>)
                    }
                </div>
                {/* all news end  */}
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;