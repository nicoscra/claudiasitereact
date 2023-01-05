import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current = 'Contact Page'/>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Get your own personalized piece of art.</h2>
                    <hr/>
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;