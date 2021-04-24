import React from "react";
import "./custom.scss";
import NavBar from "react-bootstrap/NavBar";
import { Link } from "gatsby";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const PageWrapper = ({
  children,
  hasImage,
}: {
  children: React.ReactNode | React.ReactNode[];
  hasImage?: boolean;
}) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { width } = useWindowDimensions();

  const isSmall = width > 0 && width < 600;

  return (
    <div
      style={{
        backgroundImage: hasImage ? 'url("/IMG_0002.jpeg")' : null,
        width: "100vw",
        minHeight: "100vh",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: hasImage ? null : "rgb(40, 0, 0)",
        color: "white",
        fontFamily: "serif",
        overflowY: "hidden",
      }}
    >
      <div
        style={
          isSmall
            ? {
                fontFamily: "Parisienne, serif",
                backgroundColor: "rgb(40, 0, 0)",
                position: "static",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
              }
            : {
                fontFamily: "Parisienne, serif",
                backgroundColor: "rgb(40, 0, 0)",
                position: "static",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "1rem",
              }
        }
      >
        <Link to="/">
          <div style={{ color: "white", fontSize: "1.25rem" }}>
            Mr. & Mrs. Matthews
          </div>
        </Link>

        {isSmall ? (
          <>
            <svg
              height="1rem"
              viewBox="0 -53 384 384"
              width="1rem"
              fill="white"
              onClick={() => setMenuIsOpen(true)}
            >
              <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
              <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
              <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            </svg>
          </>
        ) : (
          <>
            <div style={{ width: "1em" }} />

            <Link to="/event">
              <div style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                When & Where
              </div>
            </Link>

            <div style={{ width: "1em" }} />

            <Link to="/photos">
              <div style={{ color: "rgba(255, 255, 255, 0.5)" }}>Photos</div>
            </Link>

            <div style={{ width: "1em" }} />

            <Link to="/out-of-town">
              <div style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                Out Of Town
              </div>
            </Link>
          </>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "15rem",
          transform: `translate(${menuIsOpen ? 0 : 15}rem, 0px)`,
          transitionDuration: "0.25s",
          transitionTimingFunction: "ease-out",
          backgroundColor: "rgb(40, 0, 0)",
          display: "flex",
          flexDirection: "column",
          color: "white",
          borderLeft: "1px solid white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: "1rem",
            borderBottom: "1px solid white",
          }}
        >
          <svg
            height="1rem"
            width="1rem"
            viewBox="0 0 22.88 22.88"
            fill="white"
            onClick={() => setMenuIsOpen(false)}
          >
            <path
              d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539
	l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539
	c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0
	c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"
            />
          </svg>
        </div>
        <Link to="/event">
          <div
            style={{
              color: "white",
              borderBottom: "1px solid white",
              width: "100%",
              paddingLeft: "1rem",
            }}
          >
            When & Where
          </div>
        </Link>
        <Link to="/photos">
          <div
            style={{
              color: "white",
              borderBottom: "1px solid white",
              width: "100%",
              paddingLeft: "1rem",
            }}
          >
            Photos
          </div>
        </Link>
        <Link to="/out-of-town">
          <div
            style={{
              color: "white",
              borderBottom: "1px solid white",
              width: "100%",
              paddingLeft: "1rem",
            }}
          >
            Out Of Town
          </div>
        </Link>
      </div>
      <div onClick={() => setMenuIsOpen(false)}>{children}</div>
    </div>
  );
};

export default PageWrapper;
