import { useEffect, useRef } from 'react'
import './style.scss'


export const ExploreCard = (props) => {

    const data = props.props

    const exRef = useRef()

    useEffect(() => {
        if (data.index % 2 === 0) {
            exRef.current.classList.add('revert')
        }
    }, [])

    return (
        <div className='explore__wrapper' ref={exRef}>
            <img src={data.thumbnail} alt="" />
            <div className='explore__content'>
                <span>{data.tag}</span>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <button className='explore__content-btn'>
                    <span>Learn More</span>
                </button>
            </div>
        </div>
    )
}