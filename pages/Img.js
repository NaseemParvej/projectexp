import React from "react";
import Image from "next/image";
import logoimg from "../public/loginimg.png";

const Img = () => {
  return (
    <>
      <div>
        <Image
          src={logoimg}
          alt="Picture of the author"
          width="30px"
          height="20px"
          layout="responsive"
        />
      </div>
    </>
  );
};

export default Img;
