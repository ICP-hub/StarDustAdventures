import './index.css'
// Card Props
export type CardProps = {
    title : string;
    description : string;
    image : string;
}

/*
    * Card Component
    * - Component that renders a card with an image, title, and description
    * - Returns a div with an image, title, and description
    * - Used in Landing Page
*/

const Card = ({title, description,image}:CardProps)=>{
    return(
        <div aria-roledescription='Gameplay Card' className="gameplay-card">
            <img src={image} alt={title} title={title} width={86} height={86}/>
            <h4 className='card-title'>{title}</h4>
            <p className='card-description'>{description}</p>
        </div>
    )
}

export default Card;