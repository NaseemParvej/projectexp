import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const postIndex = ({ data }) => {
  return (
    <>
      <ul
        style={{
          textAlign: "center",
          marginLeft: "10px",
        }}
      >
        {data.slice(0, 8).map((item) => {
          return (
            <div
              key={item.id}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {/* <span style={{ marginRight: "2px" }}> {item.id}</span> */}
              <h2>{item.id}</h2>
              <h3
              // style={{
              //   padding: "4px",
              //   marginRight: "10px",
              //   listStyle: "none",
              // }}
              >
                <Link
                  href={`/projectexp/pages/post/${item.id}`}
                  // href="/projectexp/pages/post/[id].js"
                  // as={"/projectexp/pages/post" + item.id}
                >
                  <a> {item.title}</a>
                </Link>
              </h3>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default postIndex;
