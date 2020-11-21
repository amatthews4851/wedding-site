import React from "react";
import "./custom.scss";
import NavBar from "react-bootstrap/NavBar";
import { Link } from "gatsby";

const PageWrapper = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/kiss2.jpeg")',
        height: "100vh",
        width: "100vw",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavBar bg="primary" variant="dark">
        <Link to="/">
          <NavBar.Brand>Mr. & Mrs. Matthews</NavBar.Brand>
        </Link>
        <div style={{ width: "1em" }} />

        <Link to="/rsvp">
          <NavBar.Text>RSVP</NavBar.Text>
        </Link>
        <div style={{ width: "1em" }} />
        <Link to="/event">
          <NavBar.Text>When & Where</NavBar.Text>
        </Link>
      </NavBar>
      {children}
    </div>
  );
};

export default PageWrapper;
