import './SforMPrinter.css';
import { Button } from './Button';
import { Link} from 'react-router-dom';


function SforMPrinterD ({
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
          <h1 className={lightText ? 'title' : 'title dark'}>
            {headline} <br/> 
          </h1>
          <div>
          <Link to='/addprinter'>
            <Button buttonSize='btn--small' buttonColor='blue'>
              ADD PRINTERS
            </Button>
          </Link>
          </div><br/><br/><br/>
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
                        <Link to='/printer-info1'>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                {buttonLabel}
                            </Button>
                        </Link> 
                    </div>       <br/>             
                    <div>
                        <Link to='/editprinter'>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                {buttonLabel1}
                            </Button>
                        </Link>
                    </div>       <br/>             
                    <div>
                        <Link to='/services'>
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
                  <div className='printer_name'>Printer 2: Ricoh Im 6000</div>
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
                    <Link to='/printer-info2'>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                            {buttonLabel}
                        </Button>
                    </Link> 
</div>       <br/>             <div>
                    <Link to='/editprinter2'>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                            {buttonLabel1}
                        </Button>
                    </Link>
</div>       <br/>             <div>
                    <Link to='/services'>
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
{/*======================= Printer 3 page from here ============================== */}
            <div><br/><br/></div>
            <div
              className='row home__hero-row'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  <div className='printer_name'>Printer 3: Toshiba e-Studio 5008A</div>
                  <p
                    className={
                      lightTextDesc
                        ? 'printer_details'
                        : 'home__hero-subtitle dark'
                    }
                  >
                    {description}<br/>
                    Locate in A4-404.
                  </p>
                  <div>
                    <Link to='/printer-info3'>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                            {buttonLabel}
                        </Button>
                    </Link> 
</div>       <br/>             <div>
                    <Link to='/editprinter3'>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                            {buttonLabel1}
                        </Button>
                    </Link>
</div>       <br/>             <div>
                    <Link to='/services'>
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
  
  export default SforMPrinterD;