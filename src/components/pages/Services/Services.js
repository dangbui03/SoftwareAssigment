
import SforMPrinter from '../../SforMPrinter';
import { homeObjOne} from './Data';
import Footer from '../Footer.js/Footer';
function Services() {
  return (
    <>
      <SforMPrinter {...homeObjOne} /> 
      <Footer></Footer>          
    </>
  );
}

export default Services;
