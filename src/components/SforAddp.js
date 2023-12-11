import React from 'react';
import './SforAddp.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function SforAddp({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={ 'home__hero-section' }
      >
        <div className='container'>
            <h1 className={'title dark'}>
                {headline}
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
                <div className='printer_name'>{topLine}
                    <input
                        className='no-border-input'
                        type="text"
                        placeholder=""
                    />
                </div>
                <p
                  className={ 'printer4_details dark' }
                >
                    <div>
                        <label>
                            Brand:
                                <input
                                    className='no-border-input'
                                    type="text"
                                    placeholder=""
                                />
                        </label>
                    </div>
                    <div>
                        <label>
                            Model:
                                <input
                                    className='no-border-input'
                                    type="text"
                                    placeholder=""
                                />
                        </label>
                    </div><div>
                        <label>
                            Status: 
                                <input
                                    className='no-border-input'
                                    type="text"
                                    placeholder=""
                                />
                        </label>
                    </div>
                  Description: <br/>
                  {description}<br/>
                  Open from 9am - 4pm on weekends.
                </p>
                <Link to='/m_printer'>
                    <Button buttonSize='btn--small' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img } alt={alt} className='home__img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SforAddp;
