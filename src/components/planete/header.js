import imgplaneteheader from '../../assets/imgheadermars.jpg';
import FormDestination from '../formulaire/Form_destination';

const HeaderPlanete = () =>{
    return(
      <div className="HeaderPlanete">
       <img src={imgplaneteheader} width="1920px" height="600px"></img>
       <FormDestination/>
      </div>
    )
}

export default HeaderPlanete