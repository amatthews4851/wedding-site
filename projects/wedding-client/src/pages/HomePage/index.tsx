import * as React from "react";
import BlurView from "../../components/BlurView";

const HomePage = () => {
  const [mounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 100);
  }, []);

  return (
    <div
      className="w-screen min-h-full flex justify-center pt-16"
      style={{
        backgroundImage: 'url("/IMG_0002.jpeg")',
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        fontFamily: "Parisienne, serif",
        overflowY: "hidden",
      }}
    >
      <div className="text-xl max-w-xl">
        <div className="bg-white text-black text-center rounded-xl p-4 shadow-lg border border-black">
          <h1>Join Us</h1>
          <h4>October 30, 2021</h4>
          <h5 style={{ textAlign: "center" }}>For the union of</h5>
          <h5>Mr. Russell Alexander Matthews &</h5>
          <h5>Ms. Darby LeeAnn Young</h5>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
