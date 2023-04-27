import './style.scss'
import logo from '../../assets/logo.png'
import logodark from '../../assets/logo-dark.png'

import {BsChevronDown} from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const NavbarList = [
    {
        name: "HOME",
        sub: [
            "Home Layout 1",
            "Home Layout 2",
            "Home Layout 3",
            "Home Layout 4",
            "Video 1",
            "Video 2",
            "Video 3",
            "Slideshow 1",
            "Slideshow 2",
            "Slideshow 3",
            "Parallax Image 1",
            "Parallax Image 2",
            "Parallax Image 3",
            "Grid Background 1",
            "Grid Background 2"
        ]
    }, 
    {
        name: "ABOUT"
    },
    {
        name:"ROOMS & SUITES",
        sub: [
            "Rooms 1",
            "Rooms 2",
            "Rooms 3",
            "Room Details",
        ]
    },
    {
        name: "RESTAURANT"},
    {
        name: "SPA"
    },
    {
        name: "PAGES", 
        sub: [
            "Services",
            "Facilites",
            "Gallery",
            "Team",
            "Pricing",
            "Careers",
            "F.A.Qs",
            "404",
            "Coming Soon"
        ]
    } ,
    {
        name: "NEWS",
        sub: [
            "News 1",
            "News 2",
            "Single Post"
        ]
    } ,
    {
        name: "CONTACT"
    }
]



export const Header = (props) => {

    const {top} = props;

    const [isOpenMenu, setOpenMenu] = useState(false)

    const togglePanelRef = useRef();
    const headerRef = useRef();

    const handleTogglePanel = () => {
        if (isOpenMenu) {
            togglePanelRef.current.classList.remove("navbar-menu--open");
            setOpenMenu(false)
        }
        else {
            togglePanelRef.current.classList.add("navbar-menu--open");
            setOpenMenu(true)
        }
    }

    useEffect(() => {
        if (headerRef.current) {
            if (top > 90) {
                headerRef.current.classList.add('header--display')
                headerRef.current.classList.remove('header--hide')
            }
            else if (headerRef.current.classList.contains('header--display')) {
                headerRef.current.classList.add('header--hide')
                headerRef.current.classList.remove('header--display')
            }
        }
    }, [top])

    return (
        <div className='header__wrapper'>
                   
                <div className={'header__navbar'}  ref={headerRef} onAnimationEnd={() => {
                    if (headerRef.current.classList.contains('header--hide')) {
                        headerRef.current.classList.remove('header--hide')
                    }
                }}>
                    <div className="header__navbar-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='header__navbar-menu'>
                        <div className='toggle'>
                            {
                                isOpenMenu
                                ?  <RiCloseLine color="#aa8453" size={27} onClick={handleTogglePanel}/>
                                :  <RiMenu3Line color="#aa8453" size={27} onClick={handleTogglePanel} />
                            }
                        </div>
                        <div className="header__navbar-menu_container " ref={togglePanelRef}>
                            <div className="header__navbar-menu_container-links">
                                {
                                    NavbarList.map((item, index) => (
                                        <p key={index}>
                                            <a href="#">
                                                {item.name}
                                                <span>{item.sub && <BsChevronDown size={8}/>}</span>
                                            </a>
                                            {
                                                item.sub && <div className='header__item-sub'>
                                                    {
                                                        item.sub.map((i, idx) => (
                                                            <div key={idx}>{i}</div>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </p>
                                        
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='header__navbar-menu_flex'>
                        {
                            NavbarList.map((item, index) => (
                                <div key={index} className={`header__menu-item ${item.sub && "sub-menu"}`}>
                                    <div className='header__item-btn'>
                                        {item.name}
                                        <span>{item.sub && <BsChevronDown />}</span>
                                    </div>

                                    <div className='header__item-sub'>
                                        {
                                            item.sub && item.sub.map((i, idx) => (
                                                <div key={idx}>{i}</div>
                                            ))
                                        }
                                    </div>
                                </div>  
                            ))
                        }
                    </div>
                    

                    
                </div> 
            
        </div>
    )
}