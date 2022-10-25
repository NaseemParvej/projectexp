import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useState } from "react";

import SignIn from "../pages/SignIn";
import Img from "../pages/img";

function SignUp() {
  // const router = useRouter();
  const [inputVal, setinputVal] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);

  let signData = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);

    setinputVal(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
  };

  let formSubmit = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inputVal;

    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert('must "@" field is required');
    } else if (date === "") {
      alert("date field is required");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length greater 5");
    } else {
      localStorage.setItem("userform", JSON.stringify([...data, inputVal]));
    }
    console.log(inputVal);
  };

  return (
    <>
      <div className="container">
        <div className=" row mt-5">
          <div className="col-6">
            <h2 className="mb-3 text-center ">Sign Up</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={signData}
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={signData}
                  placeholder="Enter Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Control
                  type="date"
                  name="date"
                  onChange={signData}
                  placeholder="Enter DoB"
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

              <Button
                className="col-12"
                variant="primary"
                type="submit"
                onClick={formSubmit}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already have an Account{" "}
              <span className="text-outline-primary">
                <Link
                  href="/SignIn"
                  // href={{
                  //   pathname: "/projectexp/component/SignIn",
                  //   query: { component: "SignIn" },
                  // }}
                >
                  SignIn
                </Link>
              </span>
            </p>
            {/* <p>
              {" "}
              <Link href={"/SignIn"}>
                <a
                  calssName="bg-success"
                  onChange={() => router.push("/SignIn")}
                >
                  SignIn
                </a>
              </Link>
            </p> */}
          </div>
          <div className="col-6">
            <Img />
          </div>
        </div>
        <div class="text-center mt-5">
          <Link href="/">
            <a class=" rounded-1 bg-dark text-light border border-dark">
              Click to Main Page
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
