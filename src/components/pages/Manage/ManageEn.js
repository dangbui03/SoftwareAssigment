import { homeObjOne} from './Data';
import MPrinter4en from '../../MPrinter4en';
import Footer from '../Footer.js/Footer';
function ManageEn() {
  return (
    <> 
      <MPrinter4en {...homeObjOne}/>
      <Footer></Footer>          
    </>
  );
}

export default ManageEn;
