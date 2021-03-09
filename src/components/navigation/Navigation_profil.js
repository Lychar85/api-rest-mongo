import {NavLink} from 'react-router-dom';
const Navigation_profil = () =>{
    return(
        <div className="Navigation-profil">
            <NavLink exact to="/profil" activeClassName="navProfil-active">Information</NavLink>
            <NavLink exact to="/profil/reservation" activeClassName="navProfil-active">Mes réservations</NavLink>
        </div>
    )
}

export default Navigation_profil