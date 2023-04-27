import React, { useEffect, useRef, useState } from "react";
import './style.scss'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import {BsPlay} from 'react-icons/bs'

import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import cpic1 from '../../assets/cpic1.jpg'
import cpic2 from '../../assets/cpic2.jpg'
import video from '../../assets/video/video.mp4'

import { FiveStar } from "../../components/FiveStar";
import { Room } from "../../components/Room";
import { ServiceCard } from "../../components/ServiceCard";
import { Carousel } from "../../components/Carousel";
import { ExploreCard } from "../../components/ExploreCard";


const Services = [
    {
        title: "Pick Up & Drop",
        content: "We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant."
    }, 
    {
        title: "Parking Space",
        content: "Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
    }, 
    {
        title: "Room Service",
        content: "Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
    }, 
    {
        title: "Swimming Pool",
        content: "Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant."
    }, 
    {
        title: "Fibre Internet",
        content: "Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
    }, 
    {
        title: "Breakfast",
        content: "Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant."
    }, 

]

const Experience = [
    {
        index: 1,
        thumbnail: "https://duruthemes.com/demo/html/cappa/demo1-light/img/restaurant/1.jpg",
        tag: "DISCOVER",
        title: "The Restaurant",
        content: "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
    },
    {   
        index: 2,
        thumbnail: "https://duruthemes.com/demo/html/cappa/demo1-light/img/spa/3.jpg",
        tag: "EXPERIENCES",
        title: "Spa Center",
        content: "Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
    },
    {
        index: 3,
        thumbnail: "https://duruthemes.com/demo/html/cappa/demo1-light/img/spa/2.jpg",
        tag: "MODERN",
        title: "Fitness Center",
        content: "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
    },
    {   
        index: 4,
        thumbnail: "https://duruthemes.com/demo/html/cappa/demo1-light/img/spa/1.jpg",
        tag: "EXPERIENCES",
        title: "The Health Club & Pool",
        content: "The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
    },
]

export const HomePage = () => {

    const [current, setCurrent] = useState(0)
    const [isPlay, setIsPlay] = useState(false)
    const videoRef = useRef()
    const viRef = useRef()

    
    const handlePrev = () => {

        if(current > 0) {
            setCurrent(current - 1)
        }
        else {
            setCurrent(2)
        }
    }

    const handleNext = () => {
        current < 2 ? setCurrent(current + 1) : setCurrent(0)
    }

    const handleClick = () => {
        if (isPlay) {
            videoRef.current.classList.remove('video-play');
            viRef.current.pause()
            setIsPlay(false)
        }
        else {
            videoRef.current.classList.add('video-play');
            setIsPlay(true)
        }
    }


    return (
        <div className="home__wrapper">
            <div className="home__carousel">
                <div className={`home__carousel-background ${0 === current && "active"}`} style={{backgroundImage: `url(${pic1})`}}>
                    <div className="home__background-container">
                        <div className="home__background-content">
                            <FiveStar />
                            <span className="home__content-title">
                                Unique Place to Relax & Enjoy
                            </span>
                            <h1>
                                The Perfect Base For You
                            </h1>
                            <button className={`mouse`}>
                                <span>Rooms & Suites</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`home__carousel-background ${1 === current && "active"}`} style={{backgroundImage: `url(${pic2})`}}>
                    <div className="home__background-container">
                        <div className="home__background-content">
                            <FiveStar />
                            <span className="home__content-title">
                                Unique Place to Relax & Enjoy
                            </span>
                            <h1>
                                Enjoy the best moments of life 
                            </h1>
                            <button className={`mouse`}>
                                <span>Rooms & Suites</span>
                                <div className="mouse-in"></div>
                                <div className="mouse-out"></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`home__carousel-background ${2 === current && "active"}`} style={{backgroundImage: `url(${pic3})`}}>
                    <div className="home__background-container">
                        <div className="home__background-content">
                            <FiveStar />
                            <span className="home__content-title">
                                Unique Place to Relax & Enjoy
                            </span>
                            <h1>
                                Enjoy a Luxury Experience
                            </h1>
                            <button className={`mouse`}>
                                <span>Rooms & Suites</span>
                                <div className="mouse-in"></div>
                                <div className="mouse-out"></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home__carousel-handle">
                    <div className="home-carousel-btn">
                        <button onClick={handlePrev}>
                            <AiOutlineLeft />
                        </button>
                    </div>
                    <div className="home-carousel-btn">
                        <button onClick={handleNext}>
                            <AiOutlineRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="home__content-first">
                <div className="content__first-detail">
                    <div className="content__detail-info">
                        <FiveStar />
                        <span>THE CAPPA LUXURY HOTEL</span>
                        <h1>Enjoy a Luxury Experience</h1>
                        <p>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
                        <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
                    </div>

                    <div className="content__detail-picture">
                        <div className="content__first-img first-img">
                            <img src={cpic1} alt="picture" />
                        </div>
                        <div className="content__first-img">
                            <img src={cpic2} alt="picture" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__content-second">
                <div className="home__second-wrapper">
                    <div className="home__wrapper-title">
                        <span>THE CAPPA LUXURY HOTEL</span>
                        <h1>Rooms & Suites</h1>
                    </div>
                    <div className="home__wrapper-content">
                        <div className="home__wrapper-content_item">
                            <Room />
                        </div>
                        <div className="home__wrapper-content_item">
                            <Room />
                        </div>
                        <div className="home__wrapper-content_item">
                            <Room />
                        </div>
                    </div>
                </div>

            </div>
            <div className="home__content-bestprice">
                <div className="home__bestprice-wrapper">
                    <div className="home__bestprice-title">
                        <span>Best prices</span>
                        <h1>Extra Services</h1>
                        <p>The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</p>
                        <p>Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.</p>
                    </div>
                    <div className="home__bestprice-slide">
                        <Carousel />
                    </div>
                </div>
            </div>
            <div className="home__video">


                <FiveStar/>
                <div className="home__video-title">
                    <span>The cappa Luxury hotel</span>
                    <h1>Promotional Video</h1>
                    <div className="home__video-play"> 
                        <div><div></div></div>
                        <div className="play-btn" onClick={handleClick}>
                            <BsPlay  size={50}/>
                        </div>
                    </div>
                </div>



            </div>
            <div className="home__video-video" ref={videoRef} onClick={handleClick}>
                <video controls width="800" ref={viRef}>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>

            <div className="home__services">
                <div className="home__services-title"> 
                    <span>OUR SERVICES</span>
                    <h1>Hotel Facilities</h1>
                </div>
                <div className="home__services-content">
                    {
                        Services.map((item, key) => (
                            <div key={key}>
                                <ServiceCard props={item}/>
                            </div>   
                        ))
                    }
                </div>
            </div>
            
            <div className="home__explore">
                {
                    Experience.map((item, index) => (
                        <div key={index}>
                            <ExploreCard props={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}