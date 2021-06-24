import * as React from "react";

const HomePage = () => (
  <div
    className="w-screen min-h-full flex justify-center pt-16"
    style={{
      backgroundImage: 'url("/IMG_0002.jpeg")',
      backgroundPosition: "0% 33%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "white",
      fontFamily: "Parisienne, serif",
      overflowY: "hidden",
    }}
  >
    <div className="shadow-lg text-3xl h-24 backdrop-filter backdrop-blur rounded-xl max-w-xl text-center p-4">
      <p>Join Us October 30, 2021</p>
      <p>For Our Wedding</p>
    </div>
  </div>
);

export default HomePage;
