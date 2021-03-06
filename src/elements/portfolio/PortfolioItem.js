import React from 'react';
import {Link} from "react-router-dom";
import Countdown from 'react-countdown';


const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="rwt-card">
            <div className="inner">
                <div className="thumbnail">
                    <figure className="card-image">
                        <Link to={process.env.PUBLIC_URL + `/products/${portfolio.id}`}>
                            <img className="img-fluid" src={portfolio.portfolioImage} alt="Portfolio-01"/>
                        </Link>
                    </figure>
                    <Link to={process.env.PUBLIC_URL + `/products/${portfolio.id}`} className="rwt-overlay"></Link>
                </div>
                <div className='p_card_wrap'>
                <div className="content">
                    <h5 className="title mb--10">
                        <Link to={process.env.PUBLIC_URL + `/products/${portfolio.id}`}>
                            {portfolio.title}
                        </Link>
                    </h5>
                    <span className="subtitle b2 text-capitalize">{portfolio.category}</span>
                </div>
                <div className='timer_btn_wrap'><div className='timer'><Countdown date={new Date('Jan 08 2022').getTime()} /></div><div className='btnn'><button className='btn btn-default btn-small'>Buy Now</button></div></div>
                </div>
            </div>
        </div>
    )
}


export default PortfolioItem;