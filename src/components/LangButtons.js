import { Button, ButtonGroup, Col } from 'reactstrap';
import MexicanFlag from '../img/mexican-flag-lang.png';
import AmericanFlag from '../img/american-flag-lang.png';

const LangButtons = () => {
    return (
        <ButtonGroup id='langbtn'>
            <Col className='sm-2'>
                <Button data-toggle='tooltip' title='English' size='sm' color='dark'>
                    <img src={AmericanFlag} alt="English" height={30} width={30} />
                </Button>
                <Button data-toggle='tooltip' title='Español' size='sm'color='dark'>
                    <img src={MexicanFlag} alt='Español' height={30} width={30} />
                </Button>
            </Col>
        </ButtonGroup>
    );
}

export default LangButtons;