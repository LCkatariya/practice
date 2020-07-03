import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup,ButtonToolbar,InputGroup,Button,Breadcrumb,Badge,FormControl, DropdownButton, Dropdown,Pagination} from 'react-bootstrap';

function App(){

  
  
  return(
    <div className="container">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
  <h1>
    Example heading <Badge variant="primary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge variant="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge variant="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge variant="secondary">New</Badge>
  </h4>
  <h5>
  Example heading <Badge variant="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge variant="secondary">9</Badge>
  </h6>
  <div>
  <Badge pill variant="primary">
    Primary
  </Badge>{' '}
  <Badge pill variant="secondary">
    Secondary
  </Badge>{' '}
  <Badge pill variant="success">
    Success
  </Badge>{' '}
  <Badge pill variant="danger">
    Danger
  </Badge>{' '}
  <Badge pill variant="warning">
    Warning
  </Badge>{' '}
  <Badge pill variant="info">
    Info
  </Badge>{' '}
  <Badge pill variant="light">
    Light
  </Badge>{' '}
  <Badge pill variant="dark">
    Dark
  </Badge>
</div>
<Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
  <br></br><br></br>
  <Button variant="outline-primary" active>primary</Button>{" "}
  <Button variant="outline-secondary" disabled>secondary</Button>{" "}
  <Button variant="outline-success">success</Button>{" "}
  <Button variant="outline-warning">warning</Button>{" "}
  <Button variant="outline-danger">danger</Button>{" "}
  <Button variant="outline-info">info</Button>{" "}
  <Button variant="outline-light">light</Button>{" "}
  <Button variant="outline-dark">dark</Button>{" "}
  <Button variant="outline-link">link</Button>{" "}
<br></br><br></br>
  <div>
  <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  <Button variant="secondary" size="sm" as="input" type="button" value="Input" />{' '}
  <Button variant="danger" size="lg" as="input" type="submit" value="Submit" />{' '}
  <Button as="input" type="reset" value="Reset" block />
  </div>
<br></br>
  <div>
  <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
  </div>

  <div>
    <ButtonToolbar className="Toolbar with Button Group">
       <ButtonGroup className="mr-2" aria-label="Frist group">
         <Button>1</Button><Button>2</Button><Button>3</Button><Button>4</Button>
       </ButtonGroup>
       <ButtonGroup className="mr-2" aria-aria-label="Second group">
         <Button>5</Button> <Button>6</Button> <Button>7</Button>
       </ButtonGroup>
       <ButtonGroup className="mr-2">
         <Button >8</Button>
       </ButtonGroup>
    </ButtonToolbar>
  </div>
  <ButtonToolbar className="justify-content-between mt-3 mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="mr-2" aria-label="First group">
      <Button variant="secondary">1</Button>{' '}
      <Button variant="secondary">2</Button>{' '}
      <Button variant="secondary">3</Button>{' '}
      <Button variant="secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
      />
    </InputGroup>
  </ButtonToolbar>

  <ButtonToolbar
    className="justify-content-between"
    aria-label="Toolbar with Button groups"
  >
    <ButtonGroup className="mr-2" aria-label="First group">
      <Button variant="secondary">1</Button>{' '}
      <Button variant="secondary">2</Button>{' '}
      <Button variant="secondary">3</Button>{' '}
      <Button variant="secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
      />
    </InputGroup>
  </ButtonToolbar>

<div>
  <ButtonGroup className="mt-3">
    <Button>1</Button>
    <Button>2</Button>
    <DropdownButton as={ButtonGroup} className="" title="Dropdown">
      <Dropdown.Item event="2">Dropdown Link1</Dropdown.Item>
      <Dropdown.Item event="1">Dropdown Link2</Dropdown.Item>
    </DropdownButton>
  </ButtonGroup>
</div>
<div >
  <ButtonGroup className="mt-3" vertical>
    <Button>1</Button>
    <Button>2</Button>
    <DropdownButton as={ButtonGroup} className="" title="Dropdown">
      <Dropdown.Item event="2">Dropdown Link1</Dropdown.Item>
      <Dropdown.Item event="1">Dropdown Link2</Dropdown.Item>
    </DropdownButton>
    <Button>1</Button>
    <Button>2</Button>
    <DropdownButton as={ButtonGroup} className="" title="Dropdown">
      <Dropdown.Item event="2">Dropdown Link1</Dropdown.Item>
      <Dropdown.Item event="1">Dropdown Link2</Dropdown.Item>
    </DropdownButton>
    <Button>1</Button>
    <Button>2</Button>
  </ButtonGroup>
</div>
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
</div>

    
  )
}

export default App;


 