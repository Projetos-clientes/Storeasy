import React from 'react';
import imagemGrande from '../imgs/garagem.jpg';
import img01 from '../imgs/garagemstore01.png';
import img02 from '../imgs/garagemstore02.jpg';
import img03 from '../imgs/garagemstore03.jpg';
import img04 from '../imgs/garagemstore04.jpg';
import img05 from '../imgs/garagemstore05.jpg';
import img06 from '../imgs/garagemstore06.jpg';
import img07 from '../imgs/garagemstore07.jpg';
    

import './Gallery.scss';

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="itemGrande">
                <img className="imgItemGrande" src={imagemGrande} alt="" />
            </div>
            <div className="itensPequenos">
                <img src={imagemGrande} alt="" className="imgItensPequenos" />
                <img src={img01} alt="" className="imgItensPequenos" />
                <img src={img02} alt="" className="imgItensPequenos" />
                <img src={img03} alt="" className="imgItensPequenos" />
                <img src={img04} alt="" className="imgItensPequenos" />
                <img src={img05} alt="" className="imgItensPequenos" />
                
            </div>
        </div>
    );
};

export default Gallery;
