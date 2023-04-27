import {IoStar} from 'react-icons/io5'
import './style.scss'


export const FiveStar = () => {
    return (
        <div className='fivestar__wrapper'>
            {new Array(5).fill(0).map(() => <IoStar />)}
        </div>
    )
}