import React, { useState, useEffect, useMemo } from "react";
import Container from "react-bootstrap/Container";
import { sortBy, uniqBy } from "ramda";
import PageWrapper from "../components/PageWrapper";
import BlurView from "../components/BlurView";

type Attendee = {
  firstName: string;
  lastName: string;
};

const createKey = (attendee: Attendee) =>
  `${attendee.lastName} ${attendee.firstName}`;

const GetWholeListOfAttendees = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  useEffect(() => {
    fetch("/all_rsvps")
      .then((res) => res.json())
      .then(setAttendees);
  }, []);

  const attendeesToShow = useMemo(
    () => uniqBy(createKey, sortBy(createKey, attendees)),
    [attendees]
  );

  return (
    <PageWrapper>
      <Container style={{ marginTop: "2em" }}>
        <BlurView>
          <div style={{ textAlign: "left", fontFamily: "serif" }}>
            {attendeesToShow.map((attendee) => {
              return (
                <div key={createKey(attendee)}>
                  {attendee.firstName} {attendee.lastName}
                </div>
              );
            })}
          </div>
        </BlurView>
      </Container>
    </PageWrapper>
  );
};

export default GetWholeListOfAttendees;
