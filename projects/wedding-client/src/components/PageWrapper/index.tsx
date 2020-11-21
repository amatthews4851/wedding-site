import React from "react";
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
          <NavBar.Brand>❤️ Mr. & Mrs. Matthews</NavBar.Brand>
        </Link>
      </NavBar>
      {children}
    </div>
  );
};

export default PageWrapper;
