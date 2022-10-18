import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div className=" bg-dark text-white text-center p-6">
      <h1>Home</h1>
      <p className="border border-info rounded-3 text-info">
        If you export a function called getStaticProps (Static Site Generation)
        from a page, Next.js will pre-render this page at build time using the
        props returned by getStaticProps.
      </p>
      <ol className="border border-info rounded-3 text-info">
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

      <div class="text-center mt-4">
        <Link href="/">
          <a class=" rounded-2 bg-info text-dark border border-dark">
            click to Main Page
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
