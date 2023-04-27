import './style.scss'


export const ServiceCard = (props) => {

    const data = props.props

    return (

        <div className='service__wrapper'>
            <h3>{data.title}</h3>
            <span>{data.content}</span>
        </div>

    )
}