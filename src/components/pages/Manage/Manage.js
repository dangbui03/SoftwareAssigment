import SforMPrinter from '../../SforMPrinter';
import { homeObjOne, homeObjThree} from './Data';
import MPrinter4 from '../../MPrinter4';
import Footer from '../Footer.js/Footer';
function Manage() {
  return (
    <> 
      <MPrinter4 {...homeObjOne}/>
      <Footer></Footer>          
    </>
  );
}

export default Manage;
