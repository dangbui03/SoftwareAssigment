import './SforMPrinter.css';
import { Button } from './Button';
import { Link} from 'react-router-dom';


function SforMPrinter ({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    buttonLabel1,
    buttonLabel2,
    img,
    alt,
    imgStart
  }) {
    return (
      <>
        <div
            className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
        >
          <div className='container'>
{/*=============================== printer 1 page start here =====================================*/}
          <h1 className={lightText ? 'heading' : 'heading dark'}>
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
                  <div className='printer_name'>{topLine}</div>
                  <p
                    className={
                      lightTextDesc
                        ? 'printer_details'
                        : 'home__hero-subtitle dark'
                    }
                  >
                    {description}<br/>
                    Locate in B4-303.
                  </p>
                    <div>
                        <Link to='/sign-up'>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                {buttonLabel}
                            </Button>
                        </Link> 
                    </div>       <br/>             
                    <div>
                        <Link to='/sign-up'>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                {buttonLabel1}
                            </Button>
                        </Link>
                    </div>       <br/>             
                    <div>
                        <Link to='/sign-up'>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                {buttonLabel2}
                            </Button>
                        </Link>
                    </div>
                </div>
              </div>
              <div className='col'>
                <div className='home__hero-img-wrapper'>
                  <img src={img} alt={alt} className='home__img2' />
                </div>
              </div>
            </div>
{/*======================= Printer 2 page from here ============================== */}

            <div
              className='row home__hero-row lightBg'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  <div className='printer_name'>Printer 2: Name of printer</div>
                  <p
                    className={
                      lightTextDesc
                        ? 'printer_details'
                        : 'home__hero-subtitle dark'
                    }
                  >
                    {description}<br/>
                    Locate in C6-404.
                  </p>
                  <div>
                    <Link to='/sign-up'>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                            {buttonLabel}
                        </Button>
                    </Link> 
</div>       <br/>             <div>
                    <Link to='/sign-up'>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                            {buttonLabel1}
                        </Button>
                    </Link>
</div>       <br/>             <div>
                    <Link to='/sign-up'>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                            {buttonLabel2}
                        </Button>
                    </Link>
                    </div>
                </div>
              </div>
              <div className='col'>
                <div className='home__hero-img-wrapper'>
                  <img src={img} alt={alt} className='home__img2' />
                </div>
              </div>
            </div>
{/*====================================== printer page end here =====================================*/}
          </div>
        </div>
      </>
    );
  }
  
  export default SforMPrinter;