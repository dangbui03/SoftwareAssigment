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
                <ul>
                    <li>
                        <label>
                            Brand:
                                <input
                                    className='no-border-input'
                                    type="text"
                                    placeholder="Toshiba"
                                />
                        </label>
                    </li>
                    <li>
                        <label>
                            Model:
                                <input
                                    className='no-border-input'
                                    type="text"
                                    placeholder="Toshiba e-Studio 855"
                                />
                        </label>
                    </li><li>
                        <label>
                            Status: 
                                <input
                                    className='no-border-input'
                                    type="text"
                                    placeholder="In use"
                                />
                        </label>
                    </li>
                </ul>
                    Location:<br/>
                <ul>
                    <li>
                        <label>
                            Campus: 
                                <input
                                    className='no-border-input'
                                    type="text"
                                    placeholder="Đại học Bách Khoa cs1"
                                />
                        </label>
                    </li>
                    <li>
                        <label>
                            Building: 
                                <input
                                    className='no-border-input'
                                    type="text"
                                    placeholder="A5 building"
                                />
                        </label>
                    </li>
                    <li>
                        <label>
                            Room: 
                                <input
                                    className='no-border-input'
                                    type="text"
                                    placeholder="A5-Hall"
                                />
                        </label>
                    </li>
                    </ul>
                  Description: <br/>
                  {description}<br/>
                  Open from 9am - 4pm on weekends.
                </p>
                <div  class="button-container" >
                    <Link to='/m_printer'>
                        <Button buttonSize='btn--small' buttonColor='blue'>
                        Add 
                    </Button>
                    </Link>
                    <Link to='/services'>
                        <Button buttonSize='btn--small' buttonColor='blue' >
                        Cancel
                    </Button>
                    </Link>
                </div>
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
