import Link from "next/link";
import Image from "next/image";
import Logo from "../public/wolf.jpg";
import "bootstrap/dist/css/bootstrap.css";
// import dataSErver from "./dataSErver";

export default function Home() {
  return (
    <>
      <div className="text-align-centre">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <span className="fs-2" style={{ color: "red" }}>
                U
              </span>
              <span className=" fs-6">1108</span>
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
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mt-2 mb-lg-0">
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
      </div>
      <div>
        <Image src={Logo} alt="Picture of the author" priority />
      </div>
    </>
  );
}
