import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Header(props) {
    return (
      <header>
        <Navbar bg="primary justify-content-between" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Form inline>
              <InputGroup>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup>
                <FormControl type="text" placeholder="Password" className=" mr-sm-2" />
              </InputGroup>
              <InputGroup>
                <Button type="submit" variant="dark">Login</Button>
              </InputGroup>
              <InputGroup>
                <Button className="logoutbutton" type="submit" variant="danger">Log Out</Button>
              </InputGroup>
            </Form>
        </Navbar>
      </header>
    )
  }