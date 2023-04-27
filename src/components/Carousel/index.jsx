import './style.scss'
import pic1 from '../../assets/dpic1.jpg'
import pic2 from '../../assets/dpic2.jpg'
import pic3 from '../../assets/dpic3.jpg'
import pic4 from '../../assets/dpic4.jpg'
import { useRef } from 'react'

const ListImg = [
    {
        thumnail: pic1,
        details: {
            name: "Room cleaning",
            price: 50,
            content: 'Orci varius natoque pen'
        }
    },
    {
        thumnail: pic2,
        details: {
            name: "Drink Included",
            price: 30,
            content: 'Orci varius natoque pen'
        }
    },
    {
        thumnail: pic3,
        details: {
            name: "Room Breakfast",
            price: 30,
            content: 'Orci varius natoque pen'
        }
    },
    {
        thumnail: pic4,
        details: {
            name: "Safe & Secure",
            price: 15,
            content: 'Orci varius natoque pen'
        }
    }

]

export const Carousel = () => {

    const carouselRef = useRef()
    const itemlRef = useRef()


    var carousel = carouselRef.current;
    
    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;

    }

    const dragStop = () => {
        isDragStart = false;
        if(!isDragging) return;
        isDragging = false;
    }

    if (carousel) {
        carousel.addEventListener("mousedown", dragStart);
    
        document.addEventListener("mousemove", dragging);
    
        document.addEventListener("mouseup", dragStop);

    }

    return (
        <div className='carousel-container'>
            <div className="carousel__main" ref={carouselRef}>
                {   
                    ListImg.map((index, key) => (
                        <div className='carousel__item' key={key} ref={itemlRef}>
                            <img className='img-feature' src={index.thumnail} alt="" />
                            <div>
                                <h3>{index.details.name}</h3>
                                <span>{'$' + index.details.price}<span>/ month</span></span>
                                <p>{index.details.content}</p>
                                <p>{index.details.content}</p>
                                <p>{index.details.content}</p>
                            </div>
                        </div>
                    ))
                    
                }

            </div>
        </div>
    )
}

// import './style.scss'
// import pic1 from '../../assets/dpic1.jpg'
// import pic2 from '../../assets/dpic2.jpg'
// import pic3 from '../../assets/dpic3.jpg'
// import pic4 from '../../assets/dpic4.jpg'
// import { useRef } from 'react'

// const ListImg = [
//     {
//         thumnail: pic1,
//         details: {
//             name: "Room cleaning",
//             price: 50,
//             content: 'Orci varius natoque pen'
//         }
//     },
//     {
//         thumnail: pic2,
//         details: {
//             name: "Drink Included",
//             price: 30,
//             content: 'Orci varius natoque pen'
//         }
//     },
//     {
//         thumnail: pic3,
//         details: {
//             name: "Room Breakfast",
//             price: 30,
//             content: 'Orci varius natoque pen'
//         }
//     },
//     {
//         thumnail: pic4,
//         details: {
//             name: "Safe & Secure",
//             price: 15,
//             content: 'Orci varius natoque pen'
//         }
//     }

// ]

// export const Carousel = () => {

//     return (
//         <div className='carousel-container'>
//             <div className="carousel__main" >
//                 {   
//                     ListImg.map((index, key) => (
//                         <div className='carousel__item' key={key}>
//                             <img className='img-feature' src={index.thumnail} alt="" />
//                             <div>
//                                 <h3>{index.details.name}</h3>
//                                 <span>{'$' + index.details.price}<span>/ month</span></span>
//                                 <p>{index.details.content}</p>
//                                 <p>{index.details.content}</p>
//                                 <p>{index.details.content}</p>
//                             </div>
//                         </div>
//                     ))      
//                 }
//             </div>
//         </div>
//     )
// }