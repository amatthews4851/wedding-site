import React, { useMemo, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import BlurView from "../components/BlurView";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Photos = () => {
  const [activePhotoUrlIndex, setActivePhotoUrlIndex] = useState<number | null>(
    null
  );
  const urls = useMemo(
    () => [
      "/IMG_0001.jpeg",
      "/IMG_0002.jpeg",
      "/IMG_0004.jpeg",
      "/IMG_0005.jpeg",
      "/IMG_0006.jpeg",
      "/IMG_0007.jpeg",
      "/IMG_0008.jpeg",
      "/IMG_0011.jpeg",
      "/IMG_0012.jpeg",
      "/IMG_0014.jpeg",
      "/IMG_0015.jpeg",
      "/IMG_0018.jpeg",
      "/IMG_0019.jpeg",
      "/IMG_0021.jpeg",
      "/IMG_0022.jpeg",
      "/IMG_0027.jpeg",
      "/IMG_0028.jpeg",
      "/IMG_0029.jpeg",
      "/IMG_0030.jpeg",
      "/IMG_0032.jpeg",
      "/IMG_0034.jpeg",
      "/IMG_0035.jpeg",
      "/IMG_0039.jpeg",
      "/IMG_0043.jpeg",
      "/IMG_0044.jpeg",
      "/IMG_0045.jpeg",
      "/IMG_0046.jpeg",
      "/IMG_0047.jpeg",
      "/IMG_0048.jpeg",
      "/IMG_0049.jpeg",
      "/IMG_0056.jpeg",
      "/IMG_0059.jpeg",
      "/IMG_0062.jpeg",
      "/IMG_0065.jpeg",
      "/IMG_0066.jpeg",
      "/IMG_0068.jpeg",
      "/IMG_0071.jpeg",
      "/IMG_0073.jpeg",
      "/IMG_0074.jpeg",
      "/IMG_0075.jpeg",
      "/IMG_0077.jpeg",
    ],
    []
  );

  return (
    <PageWrapper>
      <Container
        style={{
          padding: "2rem 0",
          width: "100%",
          height: "calc(100% - 56px)",
        }}
      >
        <div
          style={{
            overflowY: "scroll",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {useMemo(
              () =>
                urls.map((url, index) => (
                  <img
                    onClick={() => setActivePhotoUrlIndex(index)}
                    src={url}
                    style={{
                      width: 128,
                      height: 128,
                      objectFit: "cover",
                    }}
                  />
                )),
              []
            )}
          </div>
        </div>
      </Container>
      <Modal
        show={activePhotoUrlIndex !== null}
        onHide={() => setActivePhotoUrlIndex(null)}
      >
        <Modal.Header>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              variant="outline-secondary"
              onClick={() => setActivePhotoUrlIndex((v) => v - 1)}
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={() => setActivePhotoUrlIndex(null)}
            >
              Close
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => setActivePhotoUrlIndex((v) => v + 1)}
            >
              Next
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <img
            src={urls[activePhotoUrlIndex]}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Modal.Body>
      </Modal>
    </PageWrapper>
  );
};

export default Photos;
