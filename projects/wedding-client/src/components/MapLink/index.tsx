import * as React from "react";

const MapLink = ({
  query,
  ...rest
}: { query: string } & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
>) => {
  return (
    <a
      {...rest}
      style={{
        color: "white",
        textDecoration: "underline",
        ...(rest.style ?? {}),
      }}
      href={
        isApple()
          ? `http://maps.apple.com/?q=${query}`
          : `https://maps.google.com/?q=${query}`
      }
    />
  );
};

export default MapLink;

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
