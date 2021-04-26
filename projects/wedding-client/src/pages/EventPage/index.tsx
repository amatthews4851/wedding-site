import * as React from "react";
import Image from "../../components/Image";
import MapLink from "../../components/MapLink";
import PageContainer from "../../components/PageContainer";

const EventPage = () => {
  return (
    <PageContainer className="w-full text-center flex flex-col justify-center font-serif">
      <Image
        className="mx-auto"
        height={200}
        width={500}
        alt="Southern Charm Estate"
        src="/southern-charm.jpg"
      />
      <h2 className="text-2xl">Southern Charm Estate</h2>
      <MapLink
        query="Southern Charm Estate Mt Vernon MO"
        style={{
          textDecoration: "underline",
          marginBottom: "2em",
        }}
      >
        <h3 className="text-xl">11189 State Hwy K,</h3>
        <h3 className="text-xl">Mt Vernon, MO 65712</h3>
      </MapLink>

      <div style={{ marginBottom: "3rem" }}>
        <h2 className="text-2xl">October 30, 2021</h2>
        <h3 className="text-xl">Ceremony Starts at 4:00 P.M. (Central)</h3>
      </div>
    </PageContainer>
  );
};

export default EventPage;
