
import {NavLink} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FormConnexion = () =>{
    return(
                <Container className="container-form-connect">
                    <div className="form-connect">
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Adresse email</Form.Label>
                                <Form.Control type="email" placeholder="Entrer votre adresse email" />
                            </Form.Group>

                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Entrer votre mot de passe" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Connexion
                            </Button>
                        </Form>

                            <a href="/passwordforget">Mot de passe oublié.</a>
                            <NavLink exact to="/inscription">Vous n'avez pas de compte ? Inscrivez-vous dès maintenant !</NavLink>
                    </div>
                </Container>


    )
}

export default FormConnexion