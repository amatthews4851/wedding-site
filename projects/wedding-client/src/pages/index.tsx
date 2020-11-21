import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";

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
      <NavBar bg="dark" variant="dark">
        <NavBar.Brand>❤️ Mr. & Mrs. Matthews</NavBar.Brand>
      </NavBar>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5rem",
        }}
      >
        Join Us
      </Container>
    </div>
  );
}
