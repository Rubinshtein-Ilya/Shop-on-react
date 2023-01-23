import './card.scss';
// import CardImage from '../../images/815O9ktyfUL.png';

const Card = (props) => {
    const {im, name, price} = props;
    
    return (
        <div className="card">
            <div className="card__img-wraper">
                <img src={im}  alt="item" className="card__img" />
            </div>
            <a className="card__name" href='/'>{name}</a>
            <span className="card__price">{`${price}$`}</span>
        </div>
    )
}

export default Card;