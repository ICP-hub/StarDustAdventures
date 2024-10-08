import './index.css'
export type CardProps = {
    title : string;
    description : string;
    image : string;
}

const Card = ({title, description,image}:CardProps)=>{
    return(
        <div role="card" className="gameplay-card">
            <img src={image} alt={title} title={title} width={86} height={86}/>
            <h4 className='card-title'>{title}</h4>
            <p className='card-description'>{description}</p>
        </div>
    )
}

export default Card;