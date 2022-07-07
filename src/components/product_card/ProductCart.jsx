import React from 'react';

const ProductCard = ({imgHeight=190}) => {
    return (
        <div className="card card-lego">
            <div className={'card-img-container'}>
                <img src={"src/assets/static/img/downy-003.png"} alt={"img-downy"}  height={imgHeight}/>
            </div>
            <div className={'card-info-container'}>

            </div>
        </div>
    );
};

export default ProductCard;
