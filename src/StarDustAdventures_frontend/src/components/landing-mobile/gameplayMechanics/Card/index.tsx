import { CardProps } from "../../../landing/gamePlayMechanics/Cards";
import './index.css';

export default function Card({title, description,image}:CardProps) {
    return(
        <div aria-roledescription='card' role="region" className="mob-gameplay-card">
            <img src={image} alt={title} title={title} width={86} height={86}/>
            <h4 className='card-title'>{title}</h4>
            <p className='card-description'>{description}</p>
        </div>
    )
}