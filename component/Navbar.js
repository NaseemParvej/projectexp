import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

// import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  return (
    <>
      {/* <div calssNameName="text-align-centre"> */}
      {/* <nav calssName="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top">
          <div calssName="container-fluid">
            <a calssName="navbar-brand" href="">
              <span calssNameName="fs-2" style={{ color: "red" }}>
                U
              </span>
              <span calssNameName=" fs-6">1108</span>
            </a>
            <button
              calssName="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span calssName="navbar-toggler-icon"></span>
            </button>
            <div calssName="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul calssName="navbar-nav me-auto mt-2 mb-lg-0">
                <li calssName="nav-item">
                  <Link href="/Home">
                    <a calssName="nav-link active" aria-current="page">
                      Home
                    </a>
                  </Link>
                </li>
                <li calssName="nav-item">
                  <Link href="/Registation">
                    <a calssName="nav-link">Registation</a>
                  </Link>
                </li>
                <li calssName="nav-item">
                  <Link href="/About">
                    <a calssName="nav-link">About</a>
                  </Link>
                </li>
                <li calssName="nav-item">
                  <Link href="/">
                    <a calssName="nav-link" tabindex="-1" aria-disabled="true">
                      <NavDropdown
                        title="Dropdown"
                        // style={{ backgroundColor: "darkblue" }}
                        id="collasible-nav-dropdown"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
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
                    </a>
                  </Link>
                </li>
                <li calssName="nav-item">
                  <Link href="/Blog">
                    <a calssName="nav-link" tabindex="-1" aria-disabled="true">
                      Blog
                    </a>
                  </Link>
                </li>
                <li calssName="nav-item">
                  <Link href="/dataSErver">
                    <a calssName="nav-link">DataServer</a>
                  </Link>
                </li>
              </ul>
              <form calssName="d-flex">
                <input
                  calssName="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button calssName="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav> */}
      {/* </div> */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <span class="fs-2" style={{ color: "red" }}>
              U
            </span>
            <span class=" fs-6">1108</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mt-2" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link href="/Home">
                  <a class="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link href="/About">
                  <a class="nav-link">About</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/Registation">
                  <a class="nav-link">Registation</a>
                </Link>
              </li>

              <li class="nav-item">
                <Link href="/Blog">
                  <a class="nav-link" tabindex="-1" aria-disabled="true">
                    Blog
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/dataSErver">
                  <a class="nav-link">DataServer</a>
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
