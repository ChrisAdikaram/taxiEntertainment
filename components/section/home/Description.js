import Image from "next/image";
import React from "react";

function Description() {
  return (
    <div
      className="grid h-full grid-cols-1 px-16 sm:h-screen sm:grid-cols-2 bg-darkgray"
      id="theband"
    >
      <div className="flex items-center justify-center w-full h-full mt-10 mb-16 sm:mt-0 ">
        <div className="px-3 sm:px-10">
          <p className="text-lg ">“Music that takes you to a better place”</p>
          <p className="pt-3 text-xs">
            We are Taxi! An electrifying musical group from Colombo, Sri Lanka.
            With our versatile fusion of genres like pop, rock, reggae, jazz,
            R&B, and traditional Sri Lankan music, we create a unique sound that
            resonates with audiences of all backgrounds.
          </p>
          <p className="pt-3 text-xs">
            Led by our charismatic frontman and lead vocalist, the band members
            are highly skilled instrumentalists, delivering powerful guitar
            riffs, grooving basslines, dynamic drum beats, and mesmerizing
            keyboard melodies. Our tight-knit harmonies and infectious rhythms
            create an atmosphere that compels listeners to move and groove to
            the beat.
          </p>
          <p className="pt-3 text-xs">
            Having performed at various high-profile events, weddings, and music
            festivals, both in Sri Lanka and Overseas we have garnered a
            dedicated fan base. Our mission is to spread joy and inspiration
            through our music, touching the hearts and souls of our audience.
            With our exceptional talents and passion, we continue to make waves
            in the Sri Lankan music industry and beyond, leaving an indelible
            mark through our dynamic performances.
          </p>
        </div>
      </div>
      <div className="relative w-full h-full pt-10 pb-10 overflow-hidden sm:py-0">
        <div className="relative z-10 flex items-center justify-center w-5/6 h-full">
          <Image
            src={"/images/image01.png"}
            alt="description"
            width={1920}
            height={1282}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0">
          <div className="absolute w-5/6  border-[10px] border-appyellow bottom-4 sm:bottom-24 right-8 sm:right-20 top-16 sm:top-52 lg:top-64 lg:bottom-28"></div>
        </div>
      </div>
    </div>
  );
}

export default Description;
