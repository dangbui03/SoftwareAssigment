import SforMPrinterD from '../../SforMPrinterD';
import { homeObjOne} from './Data';
import Footer from '../Footer.js/Footer';
function Disable() {
  return (
    <>
      <SforMPrinterD {...homeObjOne} /> 
      <Footer></Footer>          
    </>
  );
}

export default Disable;
