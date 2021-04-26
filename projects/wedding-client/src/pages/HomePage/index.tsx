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
      <div
        className="text-xl"
        style={{
          opacity: mounted ? 1 : 0,
          transform: `translate(0px, ${mounted ? 0 : 25}px)`,
          transitionDuration: "1s",
          transitionTimingFunction: "ease-out",
          transitionDelay: "1s",
          maxWidth: 600,
        }}
      >
        <BlurView>
          <h1>Join Us</h1>
          <h4>October 30, 2021</h4>
          <h5 style={{ textAlign: "center" }}>For the union of</h5>
          <h5>Mr. Russell Alexander Matthews &</h5>
          <h5>Ms. Darby LeeAnn Young</h5>
        </BlurView>
      </div>
    </div>
  );
};

export default HomePage;
