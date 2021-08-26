import React from 'react';

const BeerCard = (props) => {
   
    const {name, image_url, abv, ibu, contributed_by} = props.beer;
    return (
        <div>
            <img style ={{height: '200px'}} src={image_url} alt="" />
            <h3 className = "mt-3 mb-3">{name}</h3>
            <p className = "text-secondary">Contributed by: {contributed_by}</p>
            <p>ABV: {abv}% IBU: {ibu}</p>
        </div>
    );
};

export default BeerCard;