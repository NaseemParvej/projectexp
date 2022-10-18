import React from "react";
import Link from "next/link";
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        cupiditate assumenda fuga accusamus debitis ipsam dignissimos, provident
        unde! Quas, saepe!
      </p>

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

export default Blog;
