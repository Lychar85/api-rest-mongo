import {NavLink} from 'react-router-dom';
const NavAdmin = () =>{
    return(
        <div className="NavAdmin">
            <div className="navAdmin-link">
            <NavLink exact to="/dashboard" activeClassName="NavAdmin-active">Accueil</NavLink>
            <NavLink exact to="/dashboard/destination" activeClassName="NavAdmin-active">Destinations</NavLink>
            <NavLink exact to="/dashboard/utilisateur" activeClassName="NavAdmin-active">Utilisateurs</NavLink>
            <NavLink exact to="/dashboard/statistique" activeClassName="NavAdmin-active">Statistiques</NavLink>
            </div>
        </div>
    )
}

export default NavAdmin