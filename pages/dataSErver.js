import React, { useEffect, useState } from "react";
import Link from "next/link";

const dataSErver = () => {
  const [data, setData] = useState([
    {
      id: "1",
      title: "Developer",
    },
    {
      id: "2",
      title: "Web Developer",
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    // console.log(result, "gghhv");
    setData(result);
  };

  return (
    <>
      <div className=" bg-dark text-white text-center p-6">
        <h1 className="text-primary">Fetch Data from Server</h1>
        <div>
          {data.slice(0, 5).map((ele) => {
            return (
              <div
                className="border border-info rounded-3 text-info"
                key={ele.id}
              >
                <h5>{ele.id}</h5>
                <p>{ele.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div class="text-center mt-4">
        <Link href="/">
          <a class=" rounded-2 bg-info text-dark border border-dark">
            click to Main Page
          </a>
        </Link>
      </div>
    </>
  );
};

export default dataSErver;
