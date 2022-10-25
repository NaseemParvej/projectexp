// import Image from "next/image";
// import Logo from "../public/wolf.jpg";
import "bootstrap/dist/css/bootstrap.css";
import Detail from "../component/Detail";
import Navbar from "../component/Navbar";
import BackgroundImg from "./BackgroundImg";
// import SignUp from "../component/SignUp";
// import SignIn from "./SignIn";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        {/* <div>
          <Image src={Logo} alt="Picture of the author" priority />
        </div> */}
        {/* <SignIn /> */}
        {/* <Detail /> */}
        <BackgroundImg />
      </div>
    </>
  );
}
