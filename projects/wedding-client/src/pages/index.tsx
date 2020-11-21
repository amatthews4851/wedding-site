import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import NavBar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("/kiss.jpeg")',
        height: "100vh",
        width: "100vw",
        backgroundPosition: "right-top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavBar bg="primary" variant="dark">
        <NavBar.Brand>❤️ Mr. & Mrs. Matthews</NavBar.Brand>
      </NavBar>
      <Container
        style={{
          paddingTop: "5rem",
          maxWidth: 500,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: 5,
            backdropFilter: "blur(4px)",
            padding: "1em",
          }}
        >
          <h1>Join Us</h1>
          <h4>October 30, 2021</h4>
          <h5 style={{ textAlign: "center", fontFamily: "serif" }}>
            For the union of Mr. Russell Alexander Matthews & Ms. Darby LeeAnn
            Young
          </h5>
          <br />
          <Button variant="primary" size="lg">
            RSVP Now
          </Button>
        </div>
      </Container>
    </div>
  );
}
