import React, { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Blog = () => {
  const [blog, setblog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setblog(parsed);
        console.log(parsed);
      });
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <div className="mt-4 list-group">
        <h1>Latest Blogs</h1>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className=" d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                {blog.map((ele) => {
                  return (
                    <>
                      <div key={ele.slug}>
                        <Link href={`./blogpost/${ele.slug}`}>
                          <h3>{ele.title}</h3>
                        </Link>
                        <p>{ele.content.substr(0, 120)}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <br />

      <div></div>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        cupiditate assumenda fuga accusamus debitis ipsam dignissimos, provident
        unde! Quas, saepe!
      </p>

      {/* <Navbar collapseOnSelect bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Account</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown
                title="Dropdown"
                // style={{ backgroundColor: "darkblue" }}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <div class="text-center mt-4">
        <Link href="/">
          <a class=" rounded-2 bg-info text-dark border border-dark">
            click to Main Page
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
