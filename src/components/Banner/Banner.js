import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://techsupportsnumber.com/wp-content/uploads/2020/10/netflix-service.jpg")`,
            backgroundPosition:"center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">MyList</button>
                </div>
                <h1 className="banner__description">This is a description</h1>
            </div>

            <div className="banner--fadeButton">
                
            </div>
        </header>
    )
}

export default Banner;
