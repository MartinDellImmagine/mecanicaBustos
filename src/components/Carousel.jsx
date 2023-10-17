import React from 'react';
import bustos1 from '../assets/imagenes/bustos1.jpeg'
import bustos2 from '../assets/imagenes/bustos2.jpeg'
import bustos3 from '../assets/imagenes/bustos3.jpeg'
const Carousel = () => {
    return (
        <>
            <div id="carouselMainIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active c-item">
                        <img src={bustos1} className="d-block w-100 c-img" alt="..."/>
                    </div>
                    <div className="carousel-item c-item">
                        <img src={bustos2} className="d-block w-100 c-img" alt="..."/>
                    </div>
                    <div className="carousel-item c-item">
                        <img src={bustos3} className="d-block w-100 c-img" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselMainIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselMainIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;
