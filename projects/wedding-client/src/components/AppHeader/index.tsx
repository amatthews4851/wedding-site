import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Routes } from "../../Router";

const AppHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { width } = useWindowDimensions();

  const isSmall = width < 600;

  const location = useLocation();
  return (
    <div
      className="border-b border-white bg-primary flex flex-row items-center py-2 px-4 fixed left-0 right-0 top-0 z-10"
      style={{
        fontFamily: "'Parisienne', cursive",
        justifyContent: isSmall ? "space-between" : "flex-start",
      }}
    >
      <div
        className="text-2xl opacity-80 mr-4"
        style={location.pathname === Routes.Home ? { opacity: 1 } : undefined}
      >
        <Link to={Routes.Home}>Mr. & Mrs. Matthews</Link>
      </div>
      {isSmall ? (
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
      ) : (
        <>
          <SubLink to={Routes.Event}>Event</SubLink>
          <SubLink to={Routes.Registry}>Registry</SubLink>
          <SubLink to={Routes.Photos}>Photos</SubLink>
          <SubLink to={Routes.OutOfTown}>Out Of Town</SubLink>
        </>
      )}
      <div
        className="absolute h-screen right-0 top-0 btm-0 bg-primary flex flex-col z-30"
        style={{
          width: "15rem",
          transform: `translate(${menuIsOpen ? 0 : 15}rem, 0px)`,
          transitionDuration: "0.25s",
          transitionTimingFunction: "ease-out",
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
        <MobileSubLink to={Routes.Event} closeMenu={() => setMenuIsOpen(false)}>
          When & Where
        </MobileSubLink>
        <MobileSubLink
          to={Routes.Registry}
          closeMenu={() => setMenuIsOpen(false)}
        >
          Registry
        </MobileSubLink>
        <MobileSubLink
          to={Routes.Photos}
          closeMenu={() => setMenuIsOpen(false)}
        >
          Photos
        </MobileSubLink>
        <MobileSubLink
          to={Routes.OutOfTown}
          closeMenu={() => setMenuIsOpen(false)}
        >
          Out Of Town
        </MobileSubLink>
      </div>
    </div>
  );
};

export default AppHeader;

function SubLink({ to, children }: { to: Routes; children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div
      className="text-lg opacity-70 mx-2"
      style={location.pathname === to ? { opacity: 1 } : undefined}
    >
      <Link to={to}>{children}</Link>
    </div>
  );
}

function MobileSubLink({
  to,
  children,
  closeMenu,
}: {
  to: Routes;
  children: React.ReactNode;
  closeMenu: () => void;
}) {
  return (
    <Link to={to}>
      <div
        onClick={closeMenu}
        className="border-b border-white w-full pl-4 py-4 text-xl"
      >
        {children}
      </div>
    </Link>
  );
}
