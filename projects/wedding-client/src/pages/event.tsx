import React from "react";
import PageWrapper from "../components/PageWrapper";
import BlurView from "../components/BlurView";
import Container from "react-bootstrap/Container";
import MapLink from "../components/MapLink";

const Event = () => {
  return (
    <PageWrapper>
      <Container
        style={{
          maxWidth: 600,
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <img
            style={{
              maxWidth: 500,
              maxHeight: 250,
              width: "auto",
              height: "auto",
              marginBottom: "1rem",
            }}
            src="/southern-charm.jpg"
          />
          <h2>Southern Charm Estate</h2>
          <MapLink
            query="Southern Charm Estate Mt Vernon MO"
            style={{
              textDecoration: "underline",
              marginBottom: "2em",
            }}
          >
            <h3>11189 State Hwy K,</h3>
            <h3>Mt Vernon, MO 65712</h3>
          </MapLink>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <h2>October 30, 2021</h2>
          <h3>Ceremony Starts at 4:00 P.M. (Central)</h3>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default Event;
