import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import BlurView from "../components/BlurView";

export default function Home() {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 100);
  }, []);

  return (
    <PageWrapper hasImage>
      <Container
        style={{
          paddingTop: "5rem",
          maxWidth: 600,
          fontFamily: "Parisienne, serif",
        }}
      >
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: `translate(0px, ${mounted ? 0 : 25}px)`,
            transitionDuration: "1s",
            transitionTimingFunction: "ease-out",
            transitionDelay: "1s",
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
      </Container>
    </PageWrapper>
  );
}
