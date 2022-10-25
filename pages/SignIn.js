import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { useState } from "react";
import { useNavigate } from "nextjs-routes";
import { useRouter } from "next/router";
import Img from "../pages/img";

function SignIn() {
  const router = useRouter();
  // const history = useNavigate();
  const [inputVal, setinputVal] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  let signData = (e) => {
    const { value, name } = e.target;

    setinputVal(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
  };

  let formSubmit = (e) => {
    e.preventDefault();

    const getuserData = localStorage.getItem("userform");
    console.log(getuserData);

    const { email, password } = inputVal;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert('must "@" field is required');
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length greater 5");
    } else {
      if (getuserData && getuserData.length) {
        const userInfo = JSON.parse(getuserData);
        // console.log(userInfo);
        const userLogin = userInfo.filter((ele, index) => {
          return ele.email === email && ele.password === password;
        });
        console.log(userLogin);
        if (userLogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("Login Successfully");

          localStorage.setItem("userLogin", JSON.stringify(getuserData));

          router.push("/projectexp/component/Detail.js");
          // history("/projectexp/component/Detail");
          // router.replace({ pathname: "/projectexp/component/Detail.js" });
        }
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-6 mt-5">
            <h3 className="mb-3 text-center">Login In</h3>
            <Form className="mt-6 bg-info rounded-4 p-5 m-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={signData}
                  placeholder="Enter Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={signData}
                  placeholder="Enter Password"
                />
              </Form.Group>

              <p>
                <Link href="/Registation">
                  <a calssName="nav-link">forget Password</a>
                </Link>
              </p>

              <Button
                className="col-12"
                variant="primary"
                type="submit"
                onClick={formSubmit}
              >
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-6 ">
            <Img />
          </div>
        </div>
        <div class="text-center mt-4">
          <Link href="/">
            <a class=" rounded-2 bg-info text-dark border border-dark">
              click to Main Page
            </a>
          </Link>
        </div>
      </div>
    </>
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Control type="email" placeholder="Enter email" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Link href="/Registation">
    //       <a calssName="nav-link">forget Password</a>
    //     </Link>
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
}

export default SignIn;
