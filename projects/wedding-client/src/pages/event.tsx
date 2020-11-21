import React from "react";
import PageWrapper from "../components/PageWrapper";
import BlurView from "../components/BlurView";
import Container from "react-bootstrap/Container";

const Event = () => {
  return (
    <PageWrapper>
      <Container
        style={{
          paddingTop: "5rem",
          maxWidth: 500,
        }}
      >
        <BlurView>
          <h1>Where:</h1>
          <h2 style={{ margin: 0 }}>Southern Charm Estate</h2>
          <a
            href={
              isApple()
                ? "http://maps.apple.com/?q=Southern Charm Estate Mt Vernon MO"
                : "https://maps.google.com/?q=Southern Charm Estate Mt Vernon MO"
            }
            style={{
              color: "white",
              textDecoration: "underline",
              fontFamily: "serif",
              textAlign: "center",
              marginBottom: "2em",
            }}
          >
            <h3>11189 State Hwy K,</h3>
            <h3>Mt Vernon, MO 65712</h3>
          </a>

          <h1>When:</h1>
          <h2>October 30, 2021</h2>
          <h3>4:00 P.M. (Central)</h3>
        </BlurView>
      </Container>
    </PageWrapper>
  );
};

export default Event;

// https://stackoverflow.com/a/9039885
function isApple() {
  if (typeof window === "undefined") {
    return false;
  }
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(window.navigator.platform) ||
    window.navigator.userAgent.includes("Mac")
  );
}
