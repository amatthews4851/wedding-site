import * as React from "react";
import Modal from "../../components/Modal";
import PageContainer from "../../components/PageContainer";
import Button from "../../components/Button";
import * as R from "ramda";

const urls = [
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
];

const PhotosPage = () => {
  const [activePhotoUrlIndex, setActivePhotoUrlIndex] = React.useState<
    number | null
  >(null);

  return (
    <PageContainer>
      <div className="w-full px-4">
        <div>
          <div className="flex flex-row justify-center items-center flex-wrap">
            {React.useMemo(
              () =>
                urls.map((url, index) => (
                  <img
                    key={url}
                    alt={`engagement-${index}`}
                    onClick={() => setActivePhotoUrlIndex(index)}
                    src={url}
                    className="cursor-pointer"
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
      </div>
      <Modal
        isOpen={activePhotoUrlIndex !== null}
        onRequestClose={() => setActivePhotoUrlIndex(null)}
        style={{
          content: {
            overflow: "hidden",
            backgroundColor: "rgb(242, 242, 242)",
            borderColor: "black",
            maxHeight: "calc(100% - 4rem)",
            width: "calc(100% - 4rem)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div style={{ height: "2rem" }}>
          <div className="flex flex-row justify-between items-center w-full mb-4">
            <Button
              variant="secondary"
              onClick={() =>
                setActivePhotoUrlIndex((v) =>
                  v !== null ? R.clamp(0, urls.length - 1, v - 1) : 0
                )
              }
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
              variant="secondary"
              onClick={() =>
                setActivePhotoUrlIndex((v) =>
                  v !== null ? R.clamp(0, urls.length - 1, v + 1) : 0
                )
              }
            >
              Next
            </Button>
          </div>
        </div>
        <div
          className="flex justify-center items-center w-full"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          <img
            src={urls[activePhotoUrlIndex!]}
            alt="engagement"
            style={{
              maxWidth: "100%",
              maxHeight: "calc(100% - 4rem)",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            className="shadow-lg rounded p-4 bg-white"
          />
        </div>
      </Modal>
    </PageContainer>
  );
};

export default PhotosPage;
