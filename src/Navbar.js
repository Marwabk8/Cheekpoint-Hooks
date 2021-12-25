import {Form,NavDropdown,FormControl,Nav,Button,Navbar,Container} from 'react-bootstrap';

function Navigation ({search,setSearch}) {

    return(
      <div className='Nav'>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Movies2020</Nav.Link>
            <Nav.Link href="#action2">New Movies</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Best Movies</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Action Movies 2020</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Romantic Movies
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Most Popular
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl onChange ={(e)=> setSearch(e.target.value)} value ={search}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
            )
            }



export default Navigation;