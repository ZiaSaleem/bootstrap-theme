import React from 'react';
import SEO from "../common/SEO";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import {Link} from "react-router-dom";
import HeaderOne from '../common/header/HeaderOne';
import ServiceOne from '../elements/service/ServiceOne';
import AboutFour from '../elements/about/AboutFour';
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AdvanceTabOne from '../elements/advancetab/AdvanceTabOne';


const BannerData = [
    {
        image: "/images/bg/bg-image-20.jpg",
        title: "Royal Mint <br /> of Metaverse",
        description: "Gold is the safest investment you will ever make, <br /> let it be the Real World or the Metaverse."
    },
]


const WebAgency = () => {
    return (
        <>
            <SEO title="Web Agency" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />


                {/* Start Slider Area  */}
                <div className="slider-area slider-style-8 height-650">
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="inner text-center">
                                            <span className="subtitle theme-gradient">Introducing World to the Only & Prestige</span>
                                            <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                            <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                            <div className="button-group mt--30">
                                                <a className="btn-default btn-large round" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Explore Now</a>
                                                <a className="btn-default btn-border btn-large round" href="#">Buy at OpenSea.io</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End Slider Area  */}


                {/* Start Counterup Area  */}
                <div className="our-counterup-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="thumbnail">
                                    <img className="radius w-100" src="./images/bg/bg-image-21.jpg" alt="Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Counterup Area  */}

                <Separator />

                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">RMM© mints limited quantity of gold every year</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">Royal Mint of Metaverse mints a limited quantity of gold every year to preserve its value across the metaverse and give investors an ever increasing valued assest. This is the first ever risk-free NFT investment of its kind.</p>
                                <div className="readmore-btn">
                                    <Link className="btn-read-more" to="#"><span>View More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "An Asset Which Retains Value is - Gold"
                                    title = "Gold Can Make Money For You"
                                    description = ""
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                            serviceStyle = "service__style--1 icon-circle-style"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <AboutFour image="./images/about/contact-image.jpg" />

                {/* Start Elements Area  */}
                <div className="rwt-advance-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Strongest of All Currencies"
                                    title = "Official categories of RMM© Mints"
                                    description = "There are only three types of bars minted, <br /> at the Royal Mint of Metaverse (*as per Schedule-2022)"
                                />
                            </div>
                        </div>
                        <AdvanceTabOne />
                    </div>
                </div>
                {/* End Elements Area  */}

                <div className="main-content">
                    <div className="rwt-elements-area rn-section-gap">
                        <div className="container-fluid plr--30">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Portfolio Box Layout"
                                        title = "Happily Clients Complete <br /> Our Business Project!"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <PortfolioOne Column="col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay" />
                        </div>
                    </div>
                </div>

                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default WebAgency;