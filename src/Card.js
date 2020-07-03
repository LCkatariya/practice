import React from 'react';
import { Button,Card, Carousel, CardDeck, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';

function Cardd(){


    return(
        
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img height="500px"
                    className="d-block w-100"
                    src="data:image/jpeg;base64,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"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height="500px"
                    className="d-block w-100"
                    src="http://www.kings-mulch.com/publishImages/CourseL~~element2.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height="500px"
                    className="d-block w-100"
                    src="data:image/jpeg;base64,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"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
            <br></br>
          <CardDeck>
          <Card border="danger" className="container" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title className="mb-2">Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
   <br></br>
                <Card border="warning" style={{ width: '18rem' }}>
                    <Card.Header as="h5">Feature</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Footer as="h6">Footer</Card.Footer>
                </Card>
                <br></br>

                <Card border="primary" className="text-center" style={{ width: '18rem' }}>
                    <Card.Header as="h5">Feature</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Footer className="text-muted" as="h6">Footer</Card.Footer>
                </Card>
          </CardDeck>
          <br></br>
          
         <ButtonGroup className="mb-2">
         <Dropdown className="mr-2">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <Dropdown.Item href="action-1">action-1</Dropdown.Item>
                  <Dropdown.Item href="action-2">action-1</Dropdown.Item>
                  <Dropdown.Item href="action-3">action-1</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          <DropdownButton title="Dropdown Button" className="mr-2 ">
              <Dropdown.Item href="#">Action-1</Dropdown.Item>
              <Dropdown.Item href="#">Action-2</Dropdown.Item>
              <Dropdown.Item href="#">Action-3</Dropdown.Item>
              <Dropdown.Item href="#">Action-4</Dropdown.Item>
          </DropdownButton>
         

         {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            (variant) => (
            <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            ),
        )}
            </ButtonGroup>
            <br></br>
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                    Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>{' '}
            <Dropdown as={ButtonGroup}>
                <Button variant="info">mix it up style-wise</Button>
                <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                <Dropdown.Menu className="super-colors">
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                    Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        
    )
}

export default Cardd;