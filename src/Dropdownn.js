import React,{useState} from 'react';
import {DropdownButton,Alert,Spinner,Table,Tabs,Tab,Toast,ProgressBar,ButtonGroup,Dropdown, Form,Button,Row,Col,Container,Image,Jumbotron,Pagination} from 'react-bootstrap';

function Dropdownn(){

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);


    return(
        <div className="container">
           { [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
                This is a {variant} alert—check it out!
            </Alert>
            ))}
          {['Primary','Secondary',"Success"].map(
            (variant) => (
            <DropdownButton
                as={ButtonGroup}
                 key={variant}
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

        <Form className="container" >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="type your email address"></Form.Control>
                <Form.Text className="text-muted">We will never share your Email with anyone else. </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="type your email password" ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formbasicCheckBox">
                <Form.Check type="checkbox" label="Cheak me out" />
            </Form.Group>
            <Button type="submit" variant="primary" >Submit</Button>

            <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            </Form>
            
        </Form>
            <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image src="https://cdn.pixabay.com/photo/2020/06/29/00/03/parrots-5350976_960_720.jpg" width="350px" rounded />
                </Col>
                <Col xs={6} md={4}>
                <Image src="https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg" width="350px" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src="https://cdn.pixabay.com/photo/2014/07/10/10/20/golden-gate-bridge-388917_960_720.jpg" width="350px" thumbnail />
                </Col>
            </Row>
            </Container>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
                </Jumbotron>
                <div>
                <ProgressBar variant="success" now={40} />
                <ProgressBar variant="info" now={20} />
                <ProgressBar variant="warning" now={60} />
                <ProgressBar variant="danger" now={80} />
                <ProgressBar animated now={45} />
                </div>
                <br></br>
            <Image src="https://cdn.pixabay.com/photo/2014/05/02/23/46/new-york-city-336475_960_720.jpg" width="1100px" height="500px" fluid />
            <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
            </Pagination>
            <div className="ml-5">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
            </div>
            <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
            </div>
            <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                Those lines that I before have writ do lie, Even those that said I could not love you dearer:
                 Yet then my judgment knew no reason why My most full flame should afterwards burn clearer.
                  But reckoning Time, whose million'd accidents Creep in 'twixt vows, and change decrees of kings,
                   Tan sacred beauty, blunt the sharp'st intents, Divert strong minds to the course of altering things;
                 Alas! why fearing of Time's tyranny, Might I not then say, 'Now I love you best,'
                </Tab>
                <Tab eventKey="profile" title="Profile">
                Those lines that I before have writ do lie, Even those that said I could not love you dearer:
                 Yet then my judgment knew no reason why My most full flame should afterwards burn clearer.
                  But reckoning Time, whose million'd accidents Creep in 'twixt vows, and change decrees of kings,
                   Tan sacred beauty, blunt the sharp'st intents, Divert strong minds to the course of altering things;
                 Alas! why fearing of Time's tyranny, Might I not then say, 'Now I love you best,'
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                     Nescode
                </Tab>
             </Tabs>
            </div>
            <Row>
            <Col xs={6}>
                <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                    />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={toggleShowA}>
                Toggle Toast <strong>with</strong> Animation
                </Button>
            </Col>
            <Col xs={6} className="my-1">
                <Toast onClose={toggleShowB} show={showB} animation={false}>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                    />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={toggleShowB}>
                Toggle Toast <strong>without</strong> Animation
                </Button>
            </Col>
            </Row>
        </div>
    )
}
export default Dropdownn;