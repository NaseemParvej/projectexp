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
          height="30px"
          layout="fixed"
        />
      </div>
    </>
  );
};

export default Img;
