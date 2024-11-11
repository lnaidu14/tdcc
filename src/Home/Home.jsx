import { Galleria } from "primereact/galleria";
import { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { ProgressSpinner } from "primereact/progressspinner";

export default function Home() {
  const [images, setImages] = useState(null);
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    fetch("../../images.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setImages(data))
      .catch((error) => console.error("Unable to fetch data:", error));
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "640px", height: "500px" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block", height: "100%", width: "100%" }}
      />
    );
  };

  return (
    <>
      <div>
        <Card>
          <div className="card">
            {images ? (
              <Galleria
                value={images}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                style={{ maxWidth: "640px" }}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                circular
                autoPlay
                transitionInterval={2000}
                showItemNavigators
              />
            ) : (
              <ProgressSpinner />
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
