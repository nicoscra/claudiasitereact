import { Col, Container } from "reactstrap";



const HomePage = () => {
    
        return(
            <Container>
                
                    <Col>
                        <h2>Biography</h2>
                        <p id="biographyContent" className="mx-auto">
                            I was born in Sinaloa and grew up in the beautiful port city of Ensenada. This is where I embraced
                            my
                            love for culture and fine arts, and dedicated myself to painting.
                            My influences come from various cultures and international painters of whom I studied under. I took
                            up
                            painting in 2011 and got to explore my passions of sketching painting.
                            I use acrylics and charcoals to create vivid memorable images on canvas, paper and wood. My work is
                            a
                            journey that allows everyone to connect with their innerselves.
                        </p>
                    </Col>
                    <Col>
                        <h2>Resume</h2>
                        <ul className="mx-auto " id="resumeList">
                            <li>CRIA (Centro de Residencias e Investigación Artística). Ensenada, Mexico.
                                Maestro Hector Herrera. 2011-2012.</li>
                            <li>Programa de Arte Profesional. Ensenada, Mexico. Maestro Alfredo Zavala. 2012-2015.</li>
                            <li>Curso de dibujo Mexico city. 2016-2017.</li>
                            <li>Curso Madrid Spain. 2018-2019.</li>
                            <li>Latin American Art Festival in 2016 and 2017 (San Diego, CA), Little Italy</li>
                            <li>Art Walk in 2016 and 2017 (San Diego, CA)</li>
                            <li>Madrid Spain (4 elements).</li>
                        </ul>
                        
                    </Col>
               
            
            </Container>
        );

};

export default HomePage;