import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
function LandingPage(){
    return(
        <div className="flex flex-col items-center gap-9 mx-52 mt-24">
            <h1 className="text-[52px] font-extrabold text-center mt-7">
                <span className="text-[#babde2]">Unlock Your Financial Edge: </span>
                Global Insights on Economy, Stocks, and Equity for Smarter Decisions and Winning Picks!</h1>
            <p className="text-gray-500 text-xl text-center">Stay ahead with our application—delivering real-time global financial news and expert stock insights to help you make smarter investment decisions.</p>
            <Link to={'/local-news'}>
                <Button className='border-black bg-black text-white hover:bg-[#895159]'>Get Started</Button>
            </Link>
            {/* <Footer/> */}
        </div>
    )
}
export default LandingPage;