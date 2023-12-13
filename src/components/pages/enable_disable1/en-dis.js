import SforMPrinter from '../../SforMPrinter';
import { homeObjOne} from './Data';
import MPrinter4 from '../../MPrinter4';
import Footer from '../Footer.js/Footer';
function En_dis() {
  return (
    <> 
      <MPrinter4 {...homeObjOne}/>
      <Footer></Footer>          
    </>
  );
}

export default En_dis;
