import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current = 'Contact Page'/>
            <Row className='row-content align-items-center'>
                <Col>
                    <a 
                    role='button'
                    ClassName='btn btn-link'
                    href='tel:+16195551234'
                    >
                        <i className='fa fa-phone'/>1-619-555-1234
                    </a>
                    <br/>
                    <a 
                    role='button'
                    className='btn btn-link'
                    href='mailto:fakeemail@fakeemail.co'
                    >
                        <i className='fa fa-envelope-o' />artclaudiacota@gmail.com
                    </a>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
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