import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = ()=> {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                               <Link to= '/portfolio'>Portfolio</Link>
                            </li>
                            <li>
                                <Link to= '/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                    <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='https://www.instagram.com/artclaudiacota/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://facebook.com/artclaudiacota/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        
                    </Col>
                    <Col sm='4' className='text-center'>
                    <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+16195551234'
                        >
                            <i className='fa fa-phone' /> 1-619-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> artclaudiacota@gmail.com 
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
        )
}

export default Footer