import React, { useEffect, useState } from "react";

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
        <h1>Fetch Data from Server</h1>
        <div>
          {data.slice(0, 5).map((ele) => {
            return (
              <div key={ele.id}>
                <h5>{ele.id}</h5>
                <p>{ele.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default dataSErver;
