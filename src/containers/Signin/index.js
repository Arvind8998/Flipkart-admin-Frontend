import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import Input from '../../components/UI/Input/index';
import {login} from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux';

function Signin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if(auth.authenticate){
        return <Redirect to={`/`} />
    }
    
    return (
        <Layout>
        <Container>
            <Row style={{ marginTop: '6em' }}>
                <Col md={{span: 6, offset: 3}}>
                    <Form onSubmit= {userLogin}>
                        <Input 
                            label="Email"
                            placeholder="Email"
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input 
                            label="Password"
                            placeholder="Password"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    </Layout>
    )
}

export default Signin
