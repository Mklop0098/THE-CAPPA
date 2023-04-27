import './style.scss'
import {IoBedOutline} from 'react-icons/io5'
import {TbBath} from 'react-icons/tb'
import {MdOutlineFreeBreakfast} from 'react-icons/md'
import {GiTowel} from 'react-icons/gi'
import {AiOutlineArrowRight} from 'react-icons/ai'

export const Room = () => {
    return (
        <div className='parent'>
            <div className='child'>
            </div>
            <div className='parent__content'>
                <div className='content-item'>
                    <span>150$ / NIGHT</span>
                    <h3>Junior Suite</h3>
                </div>
                <div className='content-item_hide'>
                    <div className="content_hide-icon">
                        <IoBedOutline size={20} className="icon-style"/>
                        <TbBath size={20} className="icon-style"/>
                        <MdOutlineFreeBreakfast size={20} className="icon-style"/>
                        <GiTowel size={20} className="icon-style"/>
                    </div>
                    <div className='content__hide-arrow'>
                        <span>Details</span>
                        <AiOutlineArrowRight size={14}/>
                    </div>
                </div>
            </div>

        </div>
    )
} 