
import {NavLink} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FormInscription = () =>{
    return(
        <Container className="container-form-inscription">
                    <div className="form-inscription">
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text" placeholder="Prénom" />
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" placeholder="Nom" />
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Age" />
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Adresse email</Form.Label>
                                <Form.Control type="email" placeholder="Entrer votre adresse email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Entrer votre mot de passe" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Continuer
                            </Button>
                        </Form>
                    </div>
                    <NavLink exact to="/connexion">Retour</NavLink>
                </Container>
    )
}

export default FormInscription