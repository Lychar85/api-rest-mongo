import React from 'react'
import Container from 'react-bootstrap/Container';
const Footer = () =>{

    return (
        <div className="Footer">
         <Container>
             <ul className="list-footer">
                 <li>
                     <a href="/">Twitter</a>
                 </li>

                 <li>
                     <a href="/">Youtube</a>
                 </li>

                 <li>
                     <a href="/">Instagram</a>
                 </li>
             </ul>
             
             </Container>   
        </div>
    )
}

export default Footer