import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Limited Mints',
        description: 'Our gold is difficult to get as we mint a very *limited quantity every year to ensure the value preservation. See Annex-A of RMM© Schedule-2022.'
    },
    {
        icon: <FiCast />,
        title: 'Ever Growing Value',
        description: 'Strong demand in the metaverse makes our gold prestigious and offers an ever growing value of the asset. Making it essentialy risk-free.'
    },
    {
        icon: <FiMap />,
        title: 'We Buy Back',
        description: 'We will always buy back from you at live market price of gold. RMM© independently monitors the price of gold being circulated in metaverse.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;