import React from "react";
import PageWrapper from "../components/PageWrapper";
import BlurView from "../components/BlurView";
import Container from "react-bootstrap/Container";
import MapLink from "../components/MapLink";

const OutOfTown = () => {
  return (
    <PageWrapper>
      <Container
        style={{
          maxWidth: 600,
          marginBottom: "2rem",
        }}
      >
        <h2>What To Do In Town?</h2>
        <p>There are a few things we like to do in town.</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <img
            style={{
              maxWidth: 250,
              maxHeight: 100,
              width: "auto",
              height: "auto",
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
            src="/wonders-of-wildlife.jpg"
          />
          <p>
            The main thing Springfield is probably known for is that it is the
            birthplace of Bass Pro Shops, and home to the{" "}
            <MapLink query="Wonders Of Wildlife National Museum & Aquarium">
              Wonders of Wildlife Museum & Aquarium
            </MapLink>
            . It is a beautiful tour of wildlife and one of the top ranked
            aquariums in the country.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <p>
            If you are looking to do some shopping, theres no better place in
            Springfield than the{" "}
            <MapLink query="Battlefield Mall Springfield MO">
              Battlefield Mall
            </MapLink>
            . It is full of different stores, and has a full food court.
            Definitely one of the go-to places in town.
          </p>
          <img
            style={{
              maxWidth: 250,
              maxHeight: 100,
              width: "auto",
              height: "auto",
              marginLeft: "1rem",
              marginBottom: "1rem",
            }}
            src="/battlefield-mall.jpg"
          />
        </div>

        <h2>Where Should We Eat?</h2>
        <p>
          There are several great restaurants around the Springfield area, just
          depending on what you are in the mood for.
        </p>
        <p>
          We like{" "}
          <MapLink query="Cheddar's Scratch Kitchen, East Primrose Street, Springfield, MO">
            Cheddar's
          </MapLink>{" "}
          for some eat, cheap comfort food cooking.{" "}
          <MapLink query="Great American Taco Company, E Battlefield Rd, Springfield, MO">
            Great American Taco
          </MapLink>{" "}
          is great spot to find some gourmet tacos and quesadillas, and also
          happens to be where we had our first date. If you are looking for some
          hibachi grilling,{" "}
          <MapLink query="Hinode Japanese Steakhouse and Sushi, South National Avenue, Springfield, MO">
            Hinode Hibachi Grill
          </MapLink>{" "}
          is a great spot to find it. There are a few options for some good
          burgers, but some of our favorites are{" "}
          <MapLink query="Black Sheep Burgers and Shakes">Black Sheep</MapLink>{" "}
          and{" "}
          <MapLink query="BAIR'S All-American Sports Grill">
            Bair's Grill and Bar
          </MapLink>
          .
        </p>

        <h2>Where Should I Stay?</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <img
            style={{
              maxWidth: 250,
              maxHeight: 100,
              width: "auto",
              height: "auto",
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
            src="/courtyard-by-marriott.jpg"
          />
          <p>
            There are two spots we would recommend here in town. The first is
            the{" "}
            <MapLink query="Courtyard by Marriott Springfield Airport">
              Courtyard Hotel by the Springfield Airport
            </MapLink>
            , which is nearby the venue.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <p>
            The other we would recommend would be{" "}
            <MapLink query="Fairfield Inn & Suites by Marriott Springfield North">
              Fairfield Inn & Suites Hotel
            </MapLink>
            , which is just a nice hotel up by I-44 and Highway 65.
          </p>

          <img
            style={{
              maxWidth: 250,
              maxHeight: 100,
              width: "auto",
              height: "auto",
              marginLeft: "1rem",
              marginBottom: "1rem",
            }}
            src="/fairfield-inn.jpg"
          />
        </div>
      </Container>
    </PageWrapper>
  );
};

export default OutOfTown;

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
