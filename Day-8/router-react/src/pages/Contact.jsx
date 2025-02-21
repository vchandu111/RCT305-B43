import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    //api - which will take 20 second to fetch
    let i = 0;
    const x = setInterval(() => {
      console.log("hello-", i);
      i++;
    }, 1000);

    //cleanup function - unmounting component
    return () => {
      clearInterval(x);
    };
  });
  return <div className="center">Contact</div>;
};

export default Contact;
