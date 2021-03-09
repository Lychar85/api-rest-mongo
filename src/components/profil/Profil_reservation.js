

const ProfilReservation = () =>{
    return (
        <div className="Profil">
            <h3>Mes réservations</h3>

            <ul className="list-Profil">
                <li>
                    <h5>Destination</h5>
                    <p>jupiter</p>
                </li>
                <li>
                    <h5>date de départ</h5>
                    <p>le 14/08/2035</p>
                </li>

                <li>
                    <h5>Nombre de personnes</h5>
                    <p>1</p>
                </li>

                <li>
                    <h5>Tarif</h5>
                    <p>250 000 €</p>
                </li>

            </ul>

            <ul className="list-Profil">
                <li>
                    <h5>Destination</h5>
                    <p>Mars</p>
                </li>
                <li>
                    <h5>date de départ</h5>
                    <p>le 21/06/2022</p>
                </li>

                <li>
                    <h5>Nombre de personnes</h5>
                    <p>2</p>
                </li>

                <li>
                    <h5>Tarif</h5>
                    <p>450 000 €</p>
                </li>

            </ul>
        </div>

    )
}

export default ProfilReservation