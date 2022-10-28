import React from "react";
// import { useRouter } from "next/router";
// import { GetServerSideProps } from "next/types";

export const getStaticPath = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        postid: item.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.postid;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const postId = ({ data }) => {
  // const router = useRouter();
  // const slug = router.query.slug;
  return (
    <>
      <div key={data.id}>
        {/* <h1>Dyanmic routing {slug}</h1> */}
        <h2>Dyanmic data by routing{data.id}</h2>
        <p>{data.body}</p>
      </div>
    </>
  );
};

export default postId;
