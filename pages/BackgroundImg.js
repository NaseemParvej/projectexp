import React from "react";
import Image from "next/image";
import sp2 from "../public/sp2.png";

const BackgroundImg = () => {
  return (
    <div>
      <Image
        className="bg-success"
        src={sp2}
        // width="100%"
        // height="70%"
        alt="Picture of the author"
        layout="responsive"
      />
    </div>
  );
};

export default BackgroundImg;
