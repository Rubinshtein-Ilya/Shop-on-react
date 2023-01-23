import './our-best.scss';
import Card from '../card/card';

const OurBest = ({items}) => {

    const card = items.map(item => {
        const {id, ...itemProps} = item;
        return(
            <Card
                key={id}
                {...itemProps}/>
        )
    });
    return (
        <section>
            <div className="our-best">
                <div className="heading">
                    <h2 className="heading__title">Our best</h2>
                </div>
                <div className="cards-container cards-container_our-best">
                    {card}
                </div>
            </div>
        </section>
    )
}

export default OurBest;