import Image from "next/image";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {
  const [showGallery, setshowGallery] = useState(false);

  return (
    <>
      <div
        className="relative h-full bg-white py-28 px-14 sm:min-h-screen"
        id="gallery"
      >
        <div className="relative z-20 w-full h-full">
          <div className="w-full mb-20">
            <p className="text-2xl font-semibold text-center text-darkgray ">
              “Setting Trends and Shaping Sounds”
            </p>
          </div>
          <div className="grid items-center w-11/12 grid-cols-1 ml-auto mr-auto gap-x-1 gap-y-1 sm:grid-cols-4 justify-items-center">
            <Image
              src={"/images/image01.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
            <Image
              src={"/images/image02.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
            <Image
              src={"/images/image03.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
            <Image
              src={"/images/image04.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
            <Image
              src={"/images/image05.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
            <Image
              src={"/images/image06.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
            <Image
              src={"/images/image07.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
            <Image
              src={"/images/image08.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
            <div></div>
            <Image
              src={"/images/image09.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
            <Image
              src={"/images/image10.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
              onClick={() => setshowGallery(true)}
            />
          </div>
        </div>

        <div className="absolute top-0 bottom-0 left-0 right-0">
          <div className="absolute border-[10px] border-appyellow right-24 left-24 sm:right-36 sm:left-36 top-56 sm:top-48 bottom-20 sm:bottom-48 "></div>
        </div>
      </div>
      <Lightbox
        open={showGallery}
        close={() => setshowGallery(false)}
        slides={[
          { src: "/images/image01.png" },
          { src: "/images/image02.png" },
          { src: "/images/image03.png" },
          { src: "/images/image04.png" },
          { src: "/images/image05.png" },
          { src: "/images/image06.png" },
          { src: "/images/image07.png" },
          { src: "/images/image08.png" },
          { src: "/images/image09.png" },
          { src: "/images/image10.png" },
        ]}
      />
    </>
  );
}

export default Gallery;
