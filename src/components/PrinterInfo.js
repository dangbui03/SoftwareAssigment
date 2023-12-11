import React from 'react';
import './PrinterInfo.css';
//import { Link } from 'react-router-dom';

function PrinterInfo ({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    img,
    alt,
    imgStart
}) {
    const descriptionLines = description.split('\n').map((line, index) => {
        return (
            <p key={index}>{line}</p>
        );
    });
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className='container'>
                    <h1 className={lightText ? 'title' : 'title dark'}>
                        {topLine}
                    </h1>
                    <div
                        className='row home__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='printer_name'>{headline}</div>
                                <div
                                    className={
                                        lightTextDesc
                                            ? 'printer_details'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    {/* Sử dụng thông tin về Location và các thuộc tính con */}
                                    {descriptionLines}
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='img'>
                                <img src={img} alt={alt} className='home__img2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrinterInfo