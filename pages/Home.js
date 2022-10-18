import React from "react";

const Home = () => {
  return (
    <div className=" bg-dark text-white text-center p-6">
      <h1>Home</h1>
      <p>
        If you export a function called getStaticProps (Static Site Generation)
        from a page, Next.js will pre-render this page at build time using the
        props returned by getStaticProps.
      </p>
      <ol>
        <li>getStaticProps always runs during next build </li>
        <li>getStaticProps runs in the background when using fallback: true</li>
        <li>
          getStaticProps is called before initial render when using fallback:
          blocking
        </li>
        <li>getStaticProps runs in the background when using revalidate</li>
        <li>
          getStaticProps runs on-demand in the background when using
          revalidate()
        </li>
      </ol>
    </div>
  );
};

export default Home;
